const lessonText = `
## Lists

Lists are incredibly useful. You probably have a list of tasks you need to complete
this week. Before you make a trip to the grocery store, you make a list of
things to purchase so you won't forget anything. The menu at your favorite Thai
restaurant is a list of dishes the kitchen is stocked to make. The roster for a
classroom is a list of students that should be in attendance.

Programmers need lists, too. We just gave them a funny name.

## Arrays

An array is just an ordered list. You can add items to the list. You can remove
items from the list. And, because our lists exist in the magical realm of the
computer, we can do plenty of crazy things with them. Such as, \`reverse\` the
order of the items, replace items with specific attributes, \`sort\` them, or
\`shuffle\` all the items around like a deck of cards.

Let's start calling our lists \`Arrays\`. That way Ruby will understand what we
are talking about.

## Array Basics

You will learn the most in this lesson by typing in the examples provided. Open
up [\`pry\` session][pry-screencast] and follow along.

If you don't have pry, you can \`gem install pry\` to get it. It's super awesome.

Or, you can always go with plain, old \`irb\`.

### Creating Arrays

\`\`\`no-highlight
pry(main)> Array.new
=> []
\`\`\`

Notice that when we called \`Array.new\`, we received back opening and closing
square brackets: \`[]\`. Programmers use lists, __\*ahem\*__, arrays, all the
time. This is the shorthand notation for an empty array. We can create a new
array this way:

\`\`\`no-highlight
pry(main)> []
=> []
\`\`\`

An empty array is like a blank canvas. Let's create a new array with some tasks
for us to accomplish, and assign the new array to a
[variable][variables-article] named \`to_do\`:

\`\`\`no-highlight
pry(main)> to_do = ["walk the dog", "buy milk", "learn about arrays"]
=> ["walk the dog", "buy milk", "learn about arrays"]
\`\`\`

### Array Methods

We can find out some interesting things about our array.

\`\`\`no-highlight
pry(main)> to_do.length
=> 3

pry(main)> to_do.first
=> "walk the dog"

pry(main)> to_do.last
=> "learn about arrays"

pry(main)> to_do.empty?
=> false
\`\`\`

\`length\`, \`first\`, \`last\`, and \`empty?\` are all methods
defined on the \`Array\` class. Read up on these methods in the <a href="http://ruby-doc.org/core-2.0.0/Array.html" target="_blank">Ruby documentation for arrays</a>. I hinted at a few methods we could
call on arrays earlier in this article. What other methods of the \`Array\` class
might be useful? Pick out a few methods from the list of methods in the \`Array\`
class and read about them and try them out in \`pry\`.


### Accessing Items in Arrays

Arrays are a little bit funny about the way we access items. We can access an
item in the array by providing an \`index\`, which starts at zero. We can ask an
array what exists at any particular index by passing it a number in square
brackets. Try this out:

\`\`\`no-highlight
pry(main)> to_do = ["walk the dog", "buy milk", "learn about arrays"]
=> ["walk the dog", "buy milk", "learn about arrays"]

pry(main)> to_do[1]
=> # what happens here?
\`\`\`

Try out the code above. Don't worry, I'll still be here when you get back.

What did you expect to see when calling \`to_do[1]\`? What did you get in return?
What happens when you try other numbers, such as \`0\`? What does this experiment
tell us about arrays?

Array indices start at zero, and go up to the length of the array minus one.
\`to_do[0]\` will return the first item in the array. \`to_do[2]\` will give us the
last item since the length is currently \`3\`.

We can visually represent our array like so:

\`\`\`no-highlight
        +-----------+-----------+-----------+
        |           |           |           |
        |   "walk   |   "buy    |  "learn   |
array:  |    the    |   milk"   |   about   |
        |    dog"   |           |  arrays"  |
        |           |           |           |
        +-----------+-----------+-----------+
index:       [0]         [1]         [2]
\`\`\`

What happens if we try to access \`to_do[3]\` in our array?

\`\`\`no-highlight
pry(main)> to_do[3]
=> nil
\`\`\`

We get [\`nil\`][nil-article], which is Ruby's way of saying that nothing is there.

Right now, you might be asking yourself, "Why do we start counting at zero
instead of one?" The <a href="http://stackoverflow.com/a/13519429/2675670" target="_blank">answer</a> to this is a bit complex.
To explain it simply, think of each cell in the above diagram as a section of
memory. If we know the location first cell, we can get the data in the first
cell, "walk the dog". To get to the second cell from the first, we need to move
exactly one cell to the right. To get to the third cell from the first, we need
to move exactly two cells. This is the basis of pointer arithmetic and finding data in memory. In most every programming language, zero-based arrays
indices are the norm.

## Adding Items

### The Shovel Operator \`<<\` and \`push\`

Our array of things to do is growing. Let's amend our list to reflect the
current list of tasks we need to accomplish:

\`\`\`no-highlight
pry(main)> to_do << "read the news"
=> ["walk the dog", "buy milk", "learn about arrays", "read the news"]
\`\`\`

Here, we have introduced a new method we can use to add items to the end of an
array. It is called the **shovel operator**, and it is represented by two
less-than signs \`<<\`.

The other method we can use to put new items on to the end of the list is the
\`push\` method. The shovel \`<<\` and the \`push\` method are equivalent. They also
exemplify the idea that there are many ways to achieve the same result when
programming.

\`\`\`no-highlight
pry(main)> to_do.push("do laundry")
=> ["walk the dog", "buy milk", "learn about arrays", "read the news", "do laundry"]
\`\`\`

### Adding Arrays

We can combine arrays using the addition symbol:

\`\`\`no-highlight
pry(main)> ["walk the dog", "buy milk"] + ["learn about arrays", "read the news", "do laundry"]
=> ["walk the dog", "buy milk", "learn about arrays", "read the news", "do laundry"]
\`\`\`

### The \`unshift\` Method

What if we have a really important task that belongs at the beginning of our
list? Well, via the \`unshift\` method, we can add items to the front of the
array.

\`\`\`no-highlight
pry(main)> to_do.unshift("pay the rent!")
=> ["pay the rent!", "walk the dog", "buy milk", "learn about arrays", "read the news", "do laundry"]
\`\`\`

### The \`insert\` Method

What if after I learn about arrays, I want to learn more about Ruby? Well, we
can \`insert\` a task into our ordered list of things to do! \`insert\` takes two
arguments: first, the index of the position to insert the item, and second, the
item to insert.

\`\`\`no-highlight
pry(main)> to_do.insert(4, "learn ruby")
=> ["pay the rent!", "walk the dog", "buy milk", "learn about arrays", "learn ruby", "read the news", "do laundry"]
\`\`\`

### The \`include?\` Method

What if I'm quite forgetful, and I can't remember if I already added "buy milk"
to my array? Well, I could print it out and scan through it, but that wouldn't
be efficient. I can use ruby code to check my list!

\`\`\`no-highlight
pry(main)> to_do.include?("buy milk")
=> true

pry(main)> to_do.include?("buy eggs")
=> false
\`\`\`

### The \`index\` Method

What if I want to find out the location of an item in my array of things to do?
The \`index\` method does that for us:

\`\`\`no-highlight
pry(main)> to_do.index("pay the rent!")
=> 0

pry(main)> to_do.index("read the news")
=> 5
\`\`\`

### Reassigning Items in an Array

What if I'm lactose intolerant? Well, we can reassign specific elements in the
array like so:

\`\`\`no-highlight
pry(main)> to_do[2] = "buy soy milk"
=> "buy soy milk"

pry(main)> to_do
=> ["pay the rent!", "walk the dog", "buy soy milk", "learn about arrays", "learn ruby", "read the news", "do laundry"]
\`\`\`

It is great to know about all these methods we have available to us for
inserting items into an array. We have covered quite a bit so far. Arguably, the
most important of these is the shovel operator \`<<\` and the \`include?\` method.
You don't have to commit all of these methods to memory. Just know that they
exist and where you can find them in the <a href="http://ruby-doc.org/core-2.0.0/" target="_blank">Ruby docs</a> if you
might need one of them in the future.

## Removing Items

### The \`shift\` Method

Fast forward. It is the future, and we have accomplished some of our tasks. We
paid the rent, walked the dog, read the news, and finished the laundry. Let's
start crossing items off of our virtual list.

\`\`\`no-highlight
pry(main)> to_do.shift
=> "pay the rent!"

pry(main)> to_do.shift
=> "walk the dog"

pry(main)> to_do
=> ["buy soy milk", "learn about arrays", "learn ruby", "read the news", "do laundry"]
\`\`\`

#### Before calling \`shift\`

\`\`\`no-highlight
        +-----------+-----------+-----------+-----------+-----------+
        |           |           |           |           |           |
        |   "walk   |   "buy    |  "learn   |  "read    |  "do      |
array:  |    the    |   milk"   |   about   |   the     |  laundry" |
        |    dog"   |           |  arrays"  |   news"   |           |
        |           |           |           |           |           |
        +-----------+-----------+-----------+-----------+-----------+
index:       [0]         [1]         [2]         [3]         [4]
\`\`\`

#### After calling \`shift\`

\`\`\`no-highlight
         +-----------+          +-----------+-----------+-----------+-----------+
         |           |          |           |           |           |           |
         |   "walk   |          |   "buy    |  "learn   |  "read    |  "do      |
return:  |    the    |  array:  |   milk"   |   about   |   the     |  laundry" |
         |    dog"   |          |           |  arrays"  |   news"   |           |
         |           |          |           |           |           |           |
         +-----------+          +-----------+-----------+-----------+-----------+
                        index:       [0]         [1]         [2]         [3]
\`\`\`

The \`shift\` method allows us to remove an item from the front of our array.
Imagine all of the items being \`shift\`ed to the left by one place, with the
first item being the return value.

### The \`delete\` Method

\`\`\`no-highlight
pry(main)> to_do.delete("read the news")
=> "read the news"

pry(main)> to_do
=> ["buy soy milk", "learn about arrays", "learn ruby", "do laundry"]
\`\`\`

The \`delete\` method is very powerful. It searches through our array, finds the
item that matches what we told it to look for, and then removes and returns it.
How awesome is that?

### The \`pop\` Method

\`\`\`no-highlight
pry(main)> to_do.pop
=> "do laundry"

pry(main)> to_do
=> ["buy soy milk", "learn about arrays", "learn ruby"]
\`\`\`

The \`pop\` method removes and returns the last item from
our array. You can think of the \`pop\` method as the opposite of \`push\`, since
\`push\` adds to then end of the array, and \`pop\` removes from the end of the
array. \`unshift\` and \`shift\` are opposites too, except that they operate on the
front of the array. To use an analogy: \`push\` is to \`pop\`, as \`unshift\` is to
\`shift\`. Now you're talking like a programmer!

### Iterating through Items in an Array

Let's say that I want to print out my \`to_do\` list in a nice format. I can find
the length of my array with the \`length\` method. Knowing the length of my array,
I can construct a \`while\` loop, that indexes each item in my array and prints
out the value.

\`\`\`no-highlight
puts "My To Do list:"
to_do = ["buy soy milk", "learn about arrays", "learn ruby"]
i = 0
while i < to_do.length
  print " * "
  puts to_do[i]
  i += 1
end
\`\`\`

Let's stop for a second and ask ourselves what's going on with our variable \`i\` here.
We're using it as a counter to keep track of some data, and in this case, namely the
index of the element of the array. \`i\` is initialized as zero (pointing to the first
element of the array \`to_do\`) and we increment it to go through each index of the
array with \`i += 1\`. \`i += 1\` is the Ruby way of saying "take whatever \`i\` is and
add one to it."

As programmers, we end up looping through arrays quite often. We do this so
often, that the designers of Ruby have created a method allowing us to iterate
through items in an array without having to keep track of the index. This method
is called the \`each\` method.

\`\`\`no-highlight
puts "My To Do list:"
to_do = ["buy soy milk", "learn about arrays", "learn ruby"]

to_do.each do |item|
  print " * "
  puts item
end
\`\`\`

This is the "Ruby way" of iterating through an array, and is preferred over the
previous example. Let's go over what is happening here:

The first time through the \`each\` loop, \`item\` is assigned to the string \`"buy
soy milk"\`. We print out an asterisk, to represent a bullet point, and then we
use the \`puts\` method to print out the value of \`item\`, which is the string
\`"buy soy milk"\`. \`puts\` is different than \`print\` in that \`puts\` prints out a
new line at the end of the string.

The next time through the \`each\` loop, \`item\` is assigned to the string \`"learn
about arrays"\`. We print out an asterisk, and then \`puts\` the value stored in
\`item\`, which is \`"learn about arrays"\`.

The third and final time through the \`each\` loop, \`item\` is assigned to the
string \`"learn ruby"\`. We print out an asterisk, and then \`puts\` the value
stored in \`item\`, which is \`"learn ruby"\`.

You will use the \`each\` method *a lot* when dealing with arrays. Make sure to
commit this method to memory.

## Outro

Here, we mostly dealt with strings as the items in our array, but our array can
hold most anything. Be it integers, real numbers, \`File\` objects, or even other
arrays, the \`Array\` class can handle it.

Oh, and one more thing:

\`\`\`no-highlight
pry(main)> to_do.delete("learn about arrays")
\`\`\`

[pry-screencast]: /lessons/lucky_number
[variables-article]: /lessons/variables
[nil-article]: /lessons/nil
`
export default lessonText;
