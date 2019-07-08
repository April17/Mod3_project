class Story < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  has_many :likes
  has_many :liked_users, through: :likes, class_name: 'User'
  has_many :tags
end
