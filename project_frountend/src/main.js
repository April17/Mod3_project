const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showForm = document.querySelector(".js-btn");
const span = document.getElementsByClassName("close")[0];


// ---------------- EVENT LISTENERS WELCOME ----------------
document.addEventListener("DOMContentLoaded", () => {
  const welcomeForm = document.querySelector('.the_form');
  welcomeForm.addEventListener("submit", secondStage)
  showForm.addEventListener("click", displayModal)
})

// ---------------- DOM LOGIC WELCOME ----------------
function secondStage(event) {
  event.preventDefault()
  event.target.parentElement.className += " hidden"
  theApp.className = ""
}

function displayModal() {
  modal.style.display = "block";
  span.addEventListener("click", () =>{
    modal.style.display = "none";
  })
  const newStoryForm = document.querySelector('.js-form')
  newStoryForm.addEventListener("submit", testDomSlap)
}

// use this function after you do a fetch request in your event listener
function testDomSlap(event) {
  event.preventDefault();
  const title = event.target[0].value
  modal.style.display = "none";
  graveYard.innerHTML +=  `
   <div class="tomb">${title}</div>
  `
  anime({
    targets: '.tomb',
    translateY: -30
  });
  event.target.reset()
}
