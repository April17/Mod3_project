class Utility{
  static setCurrentUser(data){
    const id = data.id
    localStorage.setItem('userid', id);
  }
  static allStoriesToDOM(data) {
    data.forEach(function(story){
      Utility.oneStory(story)
    })
  }
  static oneStory(story){
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
  }
  static addTags(tags){
    const checkDiv = document.querySelector("#checkdiv")
    checkDiv.innerHTML = ""
    tags.forEach(function(tag){
      checkDiv.innerHTML += `
        <input type="checkbox" class="newStoryCheckbox" value="${tag.id}"><label for="content">${tag.name}</label><br>
      `
    })
    newStoryForm.append(checkDiv)
  }
}
