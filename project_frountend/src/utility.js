class Utility{

  static allStoriesToDOM(data) {
    data.forEach(function(story){
      Utility.oneStory(story)
    })
  }
  static oneStory(story){
    graveYard.innerHTML =  `
     <div class="tomb"><img src="images/tombstone.png" data-id=${story.id} id="tomb-con" height= 200px>
      <div class="tomb-title">${story.title}</div>
     </div>
    ` + graveYard.innerHTML
    anime({
      targets: '.tomb',
      translateY: -30,
      delay: anime.stagger(150)
    })
  }


  static addStoryData(story) {
    showStory.querySelector('h3').innerText = story.title
    showStory.querySelector('p').innerText = story.content
    showStory.querySelector('.like-btn').innerText = `💀 ${story.like_count}`
    Utility.getComments(story)
    Utility.getTags(story)
    showStory.style.display = "block";
    storyclose.addEventListener("click", () => {
      showStory.style.display = "none";
    })
  }

  static getComments(story) {
    const ul = document.querySelector("#js-ul")
    ul.innerHTML = ""
    if (story.comments.length === 0) {
      ul.innerText = "be the first to comment!!!";
      showStory.querySelector('.js-comment-list').append(ul)
    } else {
      const comContent = story.comments.map(x => x.content)
      comContent.forEach(com => {
        ul.innerHTML += `<li>${com}</li>`
        showStory.querySelector('.js-comment-list').append(ul)
      })
    }
  }

  static getTags(story) {
    const p = document.querySelector("#js-tags")
    const tagArray = story.tags.map(x => x.name)
    p.innerText = tagArray.join(", ")
  }

}
