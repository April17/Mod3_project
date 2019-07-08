class User < ApplicationRecord
  has_many :stories
  has_many :comments
  has_many :stories, through: :comments
  has_many :likes
  has_many :liked_stories, through: :likes, class_name: 'Story'
end
