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
      // .then(console.log)
  }

  static fetchStories() {
    return fetch("http://localhost:3000/stories")
  }
  static searchStories(searchParams){
    let search = {
      "search": searchParams
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(search)
    }
    return fetch("http://localhost:3000/search", config)
  }
}
