const apiAdapter = new ApiAdapter()


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#login").addEventListener("submit", userLogin)
})

function userLogin(event){
  event.preventDefault()
  const form = document.querySelector("#login")
  currentUser = form.username.value
  apiAdapter.setCurrentUser(currentUser)
}
