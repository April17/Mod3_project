class Welcome {

  secondStage(event) {
    event.preventDefault()
    const name = event.target[0].value
    const welcomeUser = document.querySelector('#js-user')
      if (name === "") {
        return alert("(Θ︹Θ)ს Please Enter A Name!");
      }
    welcomeUser.innerText = `Welcome, ${name.toUpperCase()} 👻`
    ApiAdapter.setCurrentUser(name)
      .then(Utility.setCurrentUser)
    event.target.parentElement.className += " hidden"
    theApp.className = ""

    data
    .then(rsp => rsp.json())
    .then(Utility.allStoriesToDOM)
  }

  addFilter(){
    ApiAdapter.getTags()
      .then(Utility.addFilterTags)
  }

}
