# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

og_user = User.create(name: "daniela");

invis_bug = Story.create(title: "The Invisible Bug", content:"No matter where I look...I could not find the bug. I know it's there. Watching me, watching me type my code. Savoring the moment when the satisfication of a working code is broken my red. All I see is errors. But no bug in sight. Where are you. I will find you bug.", like_count: 0, user_id: og_user.id)

the_comp_ghost = Story.create(title: "Ghost Coder", content: "Every night at 3 am, there's clicking from the living room. At first I thought it was my cats, but one night I got up and found my cats near my feet. My cats also don't have fingers. I slowly walked to the living room to see my computer wide open, a freshly made cup of coffee, and a web page with a single p tag saying.....hello from the underworld.", like_count: 0, user_id: og_user.id)

hands = Story.create(title:"Helpful Hand", content: "I think my body isn't mine. Sometimes I wake up holding something. Sometimes it was a book, a pen, a lamp, but today...tonight someone's computer. I am typing this story, but the moment I stop my body wants to chop me off. I think I need a knew body.", like_count: 0, user_id: og_user.id)

signal = Story.create(title: "No Signal", content: "There's something in my basement, but everytime I turn on the light I hear a hiss and there's nothing there. When I stand at the top of the staircase I see one small ember, but so light I'm afraid I'm losing my mind. Today I took a picture with flash and shut the door. When I looked at it... those small embers I saw was really the lights from a cellphone floating instead a demon's body.", like_count: 0, user_id: og_user.id)

loans = Story.create(title: "The Carrier", content: "It comes right on time. It drops off a letter and leaves with soft foot steps. What it brings is much worse. I'm afriad to even look at it and I dread when it comes. It's my student loans letter, back to haunt me.", like_count: 0, user_id: og_user.id)

ghost_tag = Tag.create(name: "Ghost")
funny_tag = Tag.create(name: "Funny")
creepy_tag = Tag.create(name: "Creepy")
creature_tag = Tag.create(name: "Creature")

invis_bug_tag = StoryTag.create(story_id: invis_bug.id, tag_id: ghost_tag.id)

invis_bug_tag2 = StoryTag.create(story_id: invis_bug.id, tag_id: creepy_tag.id)

the_comp_ghost_tag = StoryTag.create(story_id: the_comp_ghost.id, tag_id: ghost_tag.id)

the_comp_ghost_tag2 = StoryTag.create(story_id: the_comp_ghost.id, tag_id: funny_tag.id)

hands_tag = StoryTag.create(story_id: hands.id, tag_id: creepy_tag.id)

signal_tag = StoryTag.create(story_id: signal.id, tag_id: creature_tag.id)

loans = StoryTag.create(story_id: loans.id, tag_id: funny_tag.id)


puts "good seeding"
