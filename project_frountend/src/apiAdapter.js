class ApiAdapter {

  static setCurrentUser(name){
    let currentUser = {
      "name": name
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    }
    fetch("http://localhost:3000/users", config)
      .then(rsp => rsp.json())
      .then(console.log)
  }

  static fetchStories(callback) {
    fetch("http://localhost:3000/stories")
    .then(rsp => rsp.json())
    .then(callback)
  }
}
