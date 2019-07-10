class FilterController < ApplicationController

  def search_stories
    if params[:search] == nil
      stories = Story.all
    else
      stories = Story.search(params[:search])
      if stories == []
        no_result = "Sorry, we can't find #{params[:search]} for you."
        stories = Story.all
      end
    end
    render json: stories.to_json(include: [:user, :comments])
  end

end
