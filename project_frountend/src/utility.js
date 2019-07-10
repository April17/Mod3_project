class Utility{

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
}
