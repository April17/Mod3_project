class Utility{
  static setCurrentUser(data){
    const id = data.id
    localStorage.setItem('userid', id);
  }
  static setCurrentStory(data){
    const id = data.id
    localStorage.setItem('storyid', id);
  }
  static setStoryOwner(data){
    const id = data.user_id
    localStorage.setItem('storyownerid', id);
  }
  static allStoriesToDOM(data) {
    data.forEach(function(story){
      Utility.oneStory(story)
    })
  }

  static allStoriesToDOMTwo(data) {
    data.forEach(function(story){
      Utility.oneStoryTwo(story)
    })
  }

  static oneStory(story){
    graveYard.innerHTML =  `
     <div class="tomb" id="${story.id}"><img src="images/tombstone.png" data-id=${story.id} id="tomb-con" height= 200px>
      <div class="tomb-title">${story.title}</div>
     </div>
    ` + graveYard.innerHTML
    anime({
      targets: '.tomb',
      translateY: -30,
      delay: anime.stagger(150)
    })
  }

  static oneStoryTwo(story){
    graveYard.innerHTML =  `
     <div class="tomb" id="${story.id}"><img src="images/night-mode-tomb2.png" data-id=${story.id} id="tomb-con" height= 200px>
      <div class="tomb-title">${story.title}</div>
     </div>
    ` + graveYard.innerHTML
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
    // newStoryForm.append(checkDiv)
  }

  static addStoryData(story) {
    deleteBtn.className = "btns hidden"
    showStory.querySelector('h3').innerText = story.title
    showStory.querySelector('p').innerText = story.content
    showStory.querySelector('.like-btn').innerText = `💀 ${story.like_count}`
    Utility.getComments(story)
    Utility.getTags(story)
    Utility.setCurrentStory(story)
    Utility.setStoryOwner(story)
    Utility.showDeleteBtn()
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
    commentForm.reset()
  }

  static showDeleteBtn(){
    if (localStorage.userid == localStorage.storyownerid) {
      deleteBtn.className = "btns"
    }
  }

  static getTags(story) {
    const p = document.querySelector("#js-tags")
    const tagArray = story.tags.map(x => x.name)
    p.innerText = "TAGS: " + tagArray.join(", ")
  }

  static updateLike(likeCount){
    showStory.querySelector('.like-btn').innerText = `💀 ${likeCount.like_count}`
  }

  static removeStone(data){
    document.getElementById(`${data.id}`).remove()
    showStory.style.display = "none";
  }

  static searchStone(event){
    event.preventDefault()
    ApiAdapter.searchStories(searchForm.search.value)
    .then(Utility.filterDom)
  }

  static filterDom(results) {
    graveYard.innerHTML = ""
    if (switchCan.name === "light") {
      Utility.allStoriesToDOM(results)
    } else {
    Utility.allStoriesToDOMTwo(results)
    }
  }

  static addFilterTags(tags){
    filterUl.innerHTML = ""
    tags.forEach(function(tag){
      if (checkedFilterTags.includes(tag.id.toString())) {
        filterUl.innerHTML += `
          <li class="tag-dropdown">
            <input id="${tag.name}" type="checkbox" class="newStoryCheckbox" value="${tag.id}" checked>
            <label name="${tag.name}" for="content">${tag.name}</label>
          </li>
        `
      } else {
        filterUl.innerHTML += `
          <li class="tag-dropdown">
            <input id="${tag.name}" type="checkbox" class="newStoryCheckbox" value="${tag.id}">
            <label name="${tag.name}" for="content">${tag.name}</label>
          </li>
        `
      }
    })
  }

  static filterStone(event){
    if (event.target.checked === true) {
      checkedFilterTags.push(event.target.value)
    } else {
      checkedFilterTags = checkedFilterTags.filter(function(tag) { return tag !== event.target.value })
    }
    ApiAdapter.filterStone(checkedFilterTags)
      .then(Utility.filterDom)
  }

  static changeCandle() {
    if (switchCan.name === "light") {
      switchCan.src = "images/dark-candle.png"
      switchCan.name = "dark"
      the_body.className = "nightmode"
      graveYard.innerHTML = ""
      ApiAdapter.fetchStories()
      .then(rsp => rsp.json())
      .then(Utility.allStoriesToDOMTwo)
      audioBar.innerHTML = `<iframe src="music/ghost_choir.mp3" allow="autoplay" id="audio" controls=0 class="hidden"></iframe>`
    } else {
      switchCan.src = "images/candle-img.gif"
      switchCan.name = "light"
      the_body.className = "daytime"
      graveYard.innerHTML = ""
      ApiAdapter.fetchStories()
      .then(rsp => rsp.json())
      .then(Utility.allStoriesToDOM)
      audioBar.innerHTML = ""
    }
  }
}
