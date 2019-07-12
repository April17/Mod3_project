class NewStoryModal {

  displayModal() {
    ApiAdapter.getTags()
      .then(Utility.addTags)
    modal.style.display = "block";
    span.addEventListener("click", () =>{
      modal.style.display = "none";
    })
  }

  newStoryInfo(event){
      event.preventDefault()
      modal.style.display = "none"
      const title = event.target.title.value
      const content = event.target.content.value
      let checkedTags = []
      let checkboxes = event.target.querySelectorAll(".newStoryCheckbox")
      checkboxes.forEach(function(box){
        if (box.checked === true){
          checkedTags.push(box.value)
        }
      })
      newStoryForm.reset()
      ApiAdapter.createStory(title, content, checkedTags)
        .then(data => {
          if (switchCan.name === "light") {
            Utility.oneStory(data)
          } else {
          Utility.oneStoryTwo(data)
          }
        })
  }

}
