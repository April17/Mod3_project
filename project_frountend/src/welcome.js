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
      graveYard.innerHTML +=  `
       <div class="tomb"><img src="images/tombstone.png" data-id=${story.id} id="tomb-con" height= 200px>
        <div class="tomb-title">${story.title}</div>
       </div>
      `
      anime({
        targets: '.tomb',
        translateY: -30,
        delay: anime.stagger(150)
      })
    })
  }

}
