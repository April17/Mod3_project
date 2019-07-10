# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# fan = User.create(name: "Fan")

# boo = Story.create(title: "Sup secry", content: "Boo", user_id: 2)

Story.create(title: "Not Sup secry", content: "Boo", user_id: 3)
Story.create(title: "Sup Sup secry", content: "NUUU", user_id: 1)
Story.create(title: "Sup secry", content: "WUUUU", user_id: 1)

# tag_1 = Tag.create(name: "Gost", story: boo)
#
# comment_1 = Comment.create(content: "nice story", user: fan, story: boo)
#
# like_1 = Like.create(user: fan, story: boo)
# like_2 = Like.create(user_id: 1, story_id: 1)
# like_3 = Like.create(user_id: 1, story_id: 1)
# like_4 = Like.create(user_id: 1, story_id: 1)


puts "good seeding"
