class LikesController < ApplicationController
  def create
    like = Like.create(like_params)
    story = Story.find_by(id: params[:story_id])
    story.like_count += 1
    story.save
    render json: story.to_json(only: [:like_count])
    # byebug
  end
end

private

def like_params
  params.require(:like).permit(:user_id, :story_id)
end
