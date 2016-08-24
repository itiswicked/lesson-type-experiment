## Object Stuff

A core aspect of object-oriented programming is determining what constitutes an object, and the circumstances that warrant splitting a concept into multiple objects.

### Learning Goals

* Demonstrate the __Single Responsibility Principle__ and why it is important
* Identify what belongs in a single class, and what should be split across multiple classes
* Recognize that objects can also represent abstract concepts, not just physical objects

### Single Responsibility Principle

How do we decide what belongs in a single class?

This question is answered by the __Single Responsiblity Principle__. Formally, the __Single Responsibility Principle__ [states](http://butunclebob.com/ArticleS.UncleBob.SrpInRuby) that "a class should have one, and only one, reason to change".

In practice, this means that each class should only do one thing, and you should be able to explain the purpose of a class in a single sentence. So if you need to use the words "and" or "or" to describe the purpose of a class, that class probably has more than one purpose, and should be split into multiple classes.

Let's say we're trying to represent a canoe and an oil tanker in our application. Should this be one class, or two? If we represented these two objects as instances of a single class, `Boat`, what would the purpose of this class be? "An object that transports people __and__ oil across small __and__ large bodies of water." Even though we're oversimplifying canoes and oil tankers quite a bit, the purpose that we present above still violates the __Single Responsibility Principle__. There are two __ands__, which is two too many.

What if we made these two separate classes? Then we might have:

`Canoe`: An object that transports people across small bodies of water
`OilTanker`: An object that transports oil across large bodies of water

As two separate classes, `Canoe` and `OilTanker` each have a single responsibility.

### Sailboats

Continuing with our boat theme, let's consider an object: `Sailboats`. As you may know, sailboats are incredibly complex objects. Some attributes of a sailboat we might want to characterize are:

* Mainsail Type
* Mainsail Size
* [Jib](https://en.wikipedia.org/wiki/Jib) Type
* Jib Size
* Boat Length

```ruby
class Sailboat
attr_reader :mainsail_type, :mainsail_size, :jib_type, :jib_size, :length

def initialize(mainsail_type, mainsail_size, jib_type, jib_size, length)
@mainsail_type = mainsail_type
@mainsail_size = mainsail_size
@jib_type = jib_type
@jib_size = jib_size
@length = length
end
end
```

In this case, however, the `Sailboat` class is taking responsibility for not just properties of the sailboat (i.e., `length`), but is also in charge of attributes of the mainsail and jib as well (i.e., type, size). From an organizational standpoint, this may seem a little messy, but still manageable. What if we consider adding another attribute, like color, to the mainsail and jib? Now our `Sailboat` class would look like so:

```ruby
class Sailboat
attr_reader :mainsail_type, :mainsail_size, :mainsail_color, :jib_type, :jib_size, :jib_color, :length

def initialize(mainsail_type, mainsail_size, mainsail_color, jib_type, jib_size, jib_color, length)
@mainsail_type = mainsail_type
@mainsail_size = mainsail_size
@mainsail_color = mainsail_color
@jib_type = jib_type
@jib_size = jib_size
@jib_color = jib_color
@length = length
end
end
```

The `Sailboat` class is now burdened with taking in attributes about two sails: the mainsail and the jib, that technically have nothing to do with the `Sailboat` itself. The `Sailboat` class simply cares that there is a mainsail and a jib - but should it be concerned with the color and type of these sails?

There must be a better way!

### Guidelines

As a rule of thumb, methods should not having more than 3-5 lines of code (LoC), and classes should not have more than 100 LoC. While this isn't a hard and fast rule, if your methods and classes are extremely long, there's a good chance that they're more complicated that they need to be - and they might be better served by being split into multiple objects.

### Object Composition

Recall the concept of __Single Responsibility__ above. Let's pause to ask ourselves about the purpose of the `Sailboat`, compared to the purpose of the sails.

`Sailboat`: A environmentally-friendly, carbon-neutral vessel that transports people across water in style
`Sail`: A large piece of fabric that catches wind to move vessels across water

Given that the `Sail` has quite a distinct purpose from the `Sailboat`, it really should be its own class. Let's see what that would look like:

```ruby
class Sail
attr_reader :type, :size, :color

def initialize(type, size, color)
@type = type
@size = size
@color = color
end
end

large_sail = Sail.new("canvas", 50, "white")
small_sail = Sail.new("carbon-fiber", 20, "dark gray")

class Sailboat
attr_reader :mainsail, :jib, :length

def initialize(mainsail, jib, length)
@mainsail = mainsail
@jib = jib
@length = length
end
end

ss_drod = Sailboat.new(large_sail, small_sail, 50)
```

Now, `Sailboat` only needs to accept a `Sail` object for `mainsail` and `jib`. It no longer needs to handle the sail type, size, or color - that's the responsibility of the `Sail` class. In addition to being cleaner and more logically organized, appropriately composing objects from multiple classes allows us the ability to __reuse__ code elsewhere. Let's consider two other boats that also use sails: the `Frigate` and the `Trireme`.

```ruby
class Frigate
attr_reader :mainsail, :fore_sail, :aft_sail, :cannons

def initialize(mainsail, fore_sail, aft_sail, cannons)
@mainsail = mainsail
@fore_sail = fore_sail
@aft_sail = aft_sail
@cannons = cannons
end
end

class Trireme
attr_reader :sail, :oars

def initialize(sail, oars)
@sail = sail
@oars = oars
end
end
```

We can use the same `Sail` objects from our `Sailboat` in our `Frigate` and `Trireme` as well.

```ruby
large_sail = Sail.new("canvas", 50, "white")
small_sail = Sail.new("carbon-fiber", 20, "dark gray")

pequod = Frigate.new(large_sail, small_sail, small_sail, 10)
olympias = Trireme.new(large_sail, 30)
```

If `Frigate` and `Trireme` did not use a `Sail` object, they would be responsible for the properties of each sail as well, which would result in unnecessary complexity, and would not be very [__DRY__](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

### Abstract Objects: Everything Is An Object

So far, we've discussed tangible, physical objects. But in Ruby, everything is an object. For example, a `Sailboat` can have speed and direction.

```ruby
class Sailboat
attr_reader :mainsail, :jib, :length
attr_accessor :speed, :direction

def initialize(mainsail, jib, length)
@mainsail = mainsail
@jib = jib
@length = length
@speed = 0
@direction = "NNW"
end

def accelerate
@speed += 10
end

def stop
@speed = 0
end

def pleasant_trip
accelerate
# change direction a few times...
stop
end
end
```

But `Sailboat` is now responsible for the __attributes__ `speed` and `direction`, as well as the `accelerate` and `stop` __methods__. At first glance, that may not seem unnecessarily complex, but let's ask ourselves this:

* Does `Sailboat` care about `speed` and `direction` specifically, or just its "path" as a whole?
* Are there other objects that may care about this concept of a "path" that encapsulates `speed` and `direction`?

This abstract concept of path can be represented by `Velocity`, which would be responsible for `speed` and `direction` attributes - as well as methods that affect these attributes, like `accelerate` and `stop`.

```ruby
class Velocity
attr_reader :speed, :direction

def initialize(speed, direction)
@speed = speed
@direction = direction
end

def accelerate
@speed += 10
end

def stop
@speed = 0
end
end

class Sailboat
attr_reader :mainsail, :jib, :length
attr_accessor :velocity

def initialize(mainsail, jib, length)
@mainsail = mainsail
@jib = jib
@length = length
@velocity = Velocity.new(0, "NNW")
end

def pleasant_trip
@velocity.accelerate
# change direction a few times...
@velocity.stop
end
end

ss_drod = Sailboat.new(large_sail, small_sail, 50)
```

Once we've pulled out the concept of `Velocity` into its own object, we can simply create a new `Velocity` object for each `Sailboat`. This way, a `Sailboat` has a `Velocity`, and that `Velocity` has its own attributes that can be changed _independently_ of the attributes of the `Sailboat`. After all, the `Sailboat`'s `mainsail`, `jib`, and `length` should not be affected by changes in `velocity`.

This also allows us to access the methods that `Velocity` provides, such as `accelerate` and `stop`, without having to define these as behaviors of the `Sailboat` itself.

Furthermore, there are many objects that may have a `Velocity` that have nothing to do with `Sailboat`. So if we create a `KoalaBear`, it can now take advantage of the `accelerate` and `stop` methods as well as the `speed` and `direction` attributes without having to build them from scratch.

```ruby
class KoalaBear
attr_reader :type, :favorite_food
attr_accessor :velocity

def initialize(type, favorite_food)
@type = type
@favorite_food = favorite_food
@velocity = Velocity.new(0, "SSE")
end

def stroll
@velocity.accelerate
puts "Reaching a top speed of #{@velocity.speed} feet per minute!"

# other things that koalas do

@velocity.stop
end
end

joel = KoalaBear.new("furry","eucalyptus leaves")
joel.stroll # => Reaching a top speed of 10 feet per minute!
```
