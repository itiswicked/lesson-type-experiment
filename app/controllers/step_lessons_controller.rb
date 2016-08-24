class StepLessonsController < ApplicationController
  def show
  end

  def markdown
    file = File.read(path_to_markdown)
    render json: { markdown: file }
  end

  def path_to_markdown
    File.expand_path("../../../markdown.md", __FILE__)
  end
end
