
const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showForm = document.querySelector(".js-btn");
const span = document.getElementsByClassName("close")[0];
const data = ApiAdapter.fetchStories()


// ---------------- EVENT LISTENERS ----------------
document.addEventListener("DOMContentLoaded", () => {
  new Welcome
  new EditModal
})

// ---------------- DOM LOGIC ----------------
//
// function testFunction(data) {
//   debugger
// }

// use this function after you do a fetch request in your event listener
// function testDomSlap(event) {
//   event.preventDefault();
//   const title = event.target[0].value
//   modal.style.display = "none";
//   graveYard.innerHTML +=  `
//    <div class="tomb">${title}</div>
//   `
//   anime({
//     targets: '.tomb',
//     translateY: -30
//   });
//   event.target.reset()
// }
