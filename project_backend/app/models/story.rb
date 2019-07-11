class Story < ApplicationRecord
  belongs_to :user

  has_many :comments, :dependent => :destroy
  has_many :users, through: :comments

  has_many :likes, :dependent => :destroy
  has_many :liked_users, through: :likes, class_name: 'User'

  has_many :story_tags, :dependent => :destroy
  has_many :tags, through: :story_tags


  def self.search(search)
    result = self.all.select{|story| story.title.downcase.include?(search.downcase)}
  end

  def self.filter(tag_ids)
    result = self.all
    tag_ids.each do |tag_id|
      result = result.select{|story| story.tags.map{|tag| tag.id.to_s}.include?(tag_id)}
    end
    return result
  end

end
