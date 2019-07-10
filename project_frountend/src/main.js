// ---------------- Verable ----------------
const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showForm = document.querySelector(".js-btn");
const welcomeForm = document.querySelector('.the_form');
const span = document.getElementsByClassName("close")[0];
const data = ApiAdapter.fetchStories()
const welcome = new Welcome
const editModal = new EditModal


// ---------------- EVENT LISTENERS ----------------
document.addEventListener("DOMContentLoaded", () => {
  showForm.addEventListener("click", editModal.displayModal)
  welcomeForm.addEventListener("submit", welcome.secondStage)
})
