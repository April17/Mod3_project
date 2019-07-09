class Welcome {

  constructor() {
    const welcomeForm = document.querySelector('.the_form');
    welcomeForm.addEventListener("submit", this.secondStage)
  }


  secondStage(event) {
    event.preventDefault()
    const name = event.target[0].value
    const welcomeUser = document.querySelector('.js-user')
    if (name === "") {
      // welcomeUser.innerText = "👻 NAMELESS GHOST 👻 "
      return alert("Please Enter A Name!");
    } else { welcomeUser.innerText = `👻 ${name.toUpperCase()} 👻` }
    event.target.parentElement.className += " hidden"
    theApp.className = ""
  }

}
