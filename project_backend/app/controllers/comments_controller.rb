class CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)
    story = Story.find_by(id: params[:story_id])
    render json: story.to_json(include: [:comments])
    # byebug
  end
end

private

def comment_params
  params.require(:comment).permit(:content, :user_id, :story_id)
end
