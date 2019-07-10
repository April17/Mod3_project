class ShowStoryModal {
  constructor() {
    graveYard.addEventListener("click", this.displayStoryModal)
  }

  displayStoryModal(event) {
    if (event.target.id === "tomb-con") {
      const storyId = event.target.dataset.id
      ApiAdapter.fetchOnStory(storyId)
        .then(Utility.addStoryData)
    }
  }

}
