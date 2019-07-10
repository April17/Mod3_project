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

  def create
    story = Story.create(story_params)
    params[:tags].each do |tag|
      StoryTag.create(story_id: story.id, tag_id: tag)
    end
    render json: story.to_json(include: [:user, :comments, :tags])
  end

  def destroy
    story = Story.find_by(id: params[:id])
    story.destroy
    render json: story.to_json(only: [:id])
  end

end

private

def story_params
  params.require(:story).permit(:title, :content, :user_id)
end
