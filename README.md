# Module 3: 👻 The Graveyard 👻

The Graveyard is an application that emulates the atomsphere of telling ghost stories in the setting of graveyard. It's a forum based app where users can write scary stories as well as comment and like content. The Graveyard takes the concept of a literal graveyard and a little less fright full through interactive gravestones.

This is a fullstack application made with a Ruby API and a Javascript frontend.

## How to Install The Graveyard
1. Use your terminal to navigate into the place where you want to clone The Graveyard's directory.
2. In terminal `cd` into the Graveyard's backend and run `bundle install` to install necessary gems needed to run the backend.
3. Run command `rails db:migrate && rails db:seed` to set up the tables and the necessary seeded files.
4. Finally, run `rails s` and copy the url in your terminal (more than likely localhost:3000).
5. For the frontend, `cd` in the Graveyard's Frontend directory and run `npm start`. There is no need to run `npm install` since all necessary libraries are included in the head of the `index.html` file. This should open up a window in your browser and The Graveyard is ready to be used!

## How to Use The Graveyard
After successful launching the backend and frontend, The Graveyard allows users to:
* Create, delete, and read scary stories that are rendered on a user's screen.
* Users can like and comment on stories of their choosing.
* Users can delete stories they've made with the help of Local storage.
* Stories can be filtered by their tags found in the navigation bar.
* The Graveyard provides two user modes. The default mode is light (a light candle) and a dark mode that occurs by clicking the candle.

## Developers
* Fanqiang Meng
* Daniela Sandoval

## More About Our App
The Graveyard is made with Ruby on Rails, ActiveRecord, Javascript, Boostrap, Anime.js, and Object Orientated Javascript. 


### License
This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.
