const searchForm = document.querySelector("#search")

searchForm.addEventListener("submit", searchStone)

function searchStone(event){
  event.preventDefault()
  var searchData = ApiAdapter.searchStories(searchForm.search.value)
  searchData
  .then(rsp => rsp.json())
  .then(console.log)
}
