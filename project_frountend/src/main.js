
const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showStory = document.getElementById("showModal")
const storyclose = showStory.querySelector('.close')
const showForm = document.querySelector(".js-btn");
const span = document.getElementsByClassName("close")[0];
const data = ApiAdapter.fetchStories()


// ---------------- EVENT LISTENERS ----------------
document.addEventListener("DOMContentLoaded", () => {
  new Welcome
  new NewStoryModal
  new ShowStoryModal
})

// ---------------- DOM LOGIC ----------------
//
// function testFunction(data) {
//   debugger
// }
