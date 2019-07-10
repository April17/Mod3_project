class Story < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  has_many :likes
  has_many :liked_users, through: :likes, class_name: 'User'
  has_many :story_tags
  has_many :tags, through: :story_tags


  def self.search(search)
    result = self.all.select{|story| story.title.downcase.include?(search.downcase)}
  end

end
