
// ---------------- Verable ----------------
const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showStory = document.getElementById("showModal")
const storyclose = showStory.querySelector('.close')
const showForm = document.querySelector(".js-btn");
const welcomeForm = document.querySelector('.the_form');
const span = document.querySelector("#newStoryClose");
const newStoryForm = document.querySelector('#newStoryForm')
const likeBtn = document.querySelector(".like-btn")
const searchForm = document.querySelector("#search")
const storyTag = document.querySelector("#storyTag")
const commentForm = document.querySelector("#commentform")
const deleteBtn = document.querySelector("#deleteBtn")
const switchCan = document.querySelector("#light-candle")
const filter = document.querySelector("#filter")
const filterUl = document.querySelector("#filterUl")
const the_body = document.querySelector("body")
const audioBar = document.querySelector("#audio-bar")
const data = ApiAdapter.fetchStories()
const welcome = new Welcome
const newStory = new NewStoryModal
const oneStory = new ShowStoryModal
let checkedFilterTags = []


// ---------------- EVENT LISTENERS ----------------
document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: '.login',
    opacity: 1,
    translateY: 30,
    easing: 'spring(14, 80, 5, 0)',
    duration: 9000
  });
  
  welcomeForm.addEventListener("submit", welcome.secondStage)
  showForm.addEventListener("click", newStory.displayModal)
  newStoryForm.addEventListener("submit", newStory.newStoryInfo)
  commentForm.addEventListener("submit", oneStory.newComment)
  likeBtn.addEventListener("click", oneStory.likeStory)
  deleteBtn.addEventListener("click", ApiAdapter.deleteStory)
  searchForm.addEventListener("submit", Utility.searchStone)
  filter.addEventListener("click", welcome.addFilter)
  filterUl.addEventListener("change", Utility.filterStone)
  switchCan.addEventListener("click", Utility.changeCandle)
})
