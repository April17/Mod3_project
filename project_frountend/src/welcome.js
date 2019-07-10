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

    data
    .then(rsp => rsp.json())
    .then(Welcome.testFunction)
  }

  static testFunction(data) {
    data.forEach(function(story){
      Welcome.oneStone(story)
    })
  }

  static oneStone(story){
    graveYard.innerHTML +=  `
     <div class="tomb">${story.title}</div>
    `
    anime({
      targets: '.tomb',
      translateY: -20
    })
  }

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
}
