class UsersController < ApplicationController

  def index
    users = User.all
        render json: users
  end

  def create
    user = User.find_by(name: params[:name])
    if !user
      user = User.create(name: params[:name])
    end
    render json: user
  end

end
