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
        return alert("Please Enter A Name!");
      }
    welcomeUser.innerText = `👻  ${name.toUpperCase()} 👻` 
    ApiAdapter.setCurrentUser(name)
    event.target.parentElement.className += " hidden"
    theApp.className = ""
    // debugger
    // ApiAdapter.fetchStories(data => {
      // testFunction(data)
      // debugger
    // })
  }

  // testFunction(data) {
  //   debugger
  // }


}
