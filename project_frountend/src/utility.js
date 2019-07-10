class Utility{
  
  static allStoriesToDOM(data) {
    data.forEach(function(story){
      Utility.oneStory(story)
    })
  }
  static oneStory(story){
    graveYard.innerHTML +=  `
     <div class="tomb">${story.title}</div>
    `
    anime({
      targets: '.tomb',
      translateY: -20
    })
  }
}
