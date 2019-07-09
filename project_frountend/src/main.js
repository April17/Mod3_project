const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");

// ---------------- EVENT LISTENERS WELCOME ----------------
document.addEventListener("DOMContentLoaded", () => {
  const newTomb = document.querySelector(".js-btn");
  const welcomeForm = document.querySelector('.the_form');

  newTomb.addEventListener("click", addTomb)
  welcomeForm.addEventListener("submit", secondStage)

})

// ---------------- DOM LOGIC WELCOME ----------------
function secondStage(event) {
  event.preventDefault()
  event.target.parentElement.className += " hidden"
  theApp.className = ""
}

function addTomb() {
  graveYard.innerHTML +=  `
   <div class="tomb">BOO</div>
  `
  anime({
    targets: '.tomb',
    translateY: -30
  });
}
