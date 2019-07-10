class StoriesController < ApplicationController

  def index
    stories = Story.all
    stories.each do |story|
      story.like_count = story.likes.count
      story.save()
    end
    render json: stories.to_json(include: [:user, :comments, :tags])
  end

  def show
    story = Story.find_by(id: params[:id])
    render json: story.to_json(include: [:user, :comments, :tags])
  end

end
