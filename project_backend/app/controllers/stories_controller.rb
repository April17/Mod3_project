class StoriesController < ApplicationController
  def index
    stories = Story.all
    stories.each do |story|
      story.like_count = story.likes.count
    end
    render json: stories.to_json(include: [:user, :comments])
  end
end
