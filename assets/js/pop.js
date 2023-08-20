let myPop = document.querySelector(".pop-box");
const l1 = document.querySelector('.selected-lang')
const l2 = document.querySelector('.lang-mobile')
let myBulletsContainer = document.querySelector(".blogs .dots-blog")
let blogContainer = document.querySelector(".cards-blog")
let x;
blogContainer.addEventListener("mousemove" , (e) =>{
  x=e.offsetX;
  if (x==0) {
    for (let index = 0; index < Array.from(myBulletsContainer.children).length; index++) {
      if (myBulletsContainer.children[index].classList == "dot-bl active-dot-bl") {
        if (myBulletsContainer.children[index+1]) {
          myBulletsContainer.children[index+1].click();
          break;
        }
      }
    }
  }
  if (x==180) {
    for (let index = 0; index < Array.from(myBulletsContainer.children).length; index++) {
      if (myBulletsContainer.children[index].classList == "dot-bl active-dot-bl") {
        if (myBulletsContainer.children[index-1]) {
          myBulletsContainer.children[index-1].click();
          break;
        }
      }
    }
  }
})
let articles;
let news;
var length;
let myInfo

function cardsSave(array, type) {
  (type == "articles") ? articles = array : news = array;
}

function HundelData(news, articles) {
  length = news.length;
  myInfo = news.concat(articles);
  console.log(myInfo)
  showData(news, 0);
  showData(articles, 1);
  showBullets(myInfo);
  cardsSave(myInfo, "news")
  let myLinks = document.querySelectorAll(".blogs .cards-blog .card a");
  myLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(link.id)
      saveDataToLocal(myInfo, link.id);
    })
  });

  const blogCards = document.querySelectorAll(".cards-blog .card");
  const blogCardsImg = document.querySelectorAll(".cards-blog .card");

  for (let i = 0; i < myBulletsContainer.children.length; i++) {
    if (i == 0) {
      myBulletsContainer.children[i].classList.add("active-dot-bl")
    }
    myBulletsContainer.children[i].onclick = () => {
      console.log("ddddddddddddd")
      for (let j = 0; j < myBulletsContainer.children.length; j++) {
        myBulletsContainer.children[j].setAttribute("class", "dot-bl")
        blogCards[j].setAttribute("class", "card")
      }
      if (i == 0) {
        blogCards[0].classList.add("active-card")
        blogCards[1].classList.add("next-card")
      }
      if (i > 0 && i < myBulletsContainer.children.length - 1) {
        blogCards[i - 1].classList.add("prev-card")
        blogCards[i].classList.add("active-card")
        blogCards[i + 1].classList.add("next-card")
      }
      if (i == myBulletsContainer.children.length - 1) {
        blogCards[i].classList.add("active-card")
        blogCards[i - 1].classList.add("prev-card")
      }
      myBulletsContainer.children[i].classList.add("active-dot-bl")
    }
  }

  for (let k = 0; k < blogCardsImg.length; k++) {
    blogCardsImg[k].onclick = () => {
      // console.log("ssss")
      myBulletsContainer.children[k].click()
    }
  }
  for (let m = 0; m < blogCards.length; m++) {
    let FirstValue = 0;
    let secValue = 0;
    blogCards[m].ondragstart = (e) => {
      FirstValue = e.screenX;
    }
    blogCards[m].ondragover = (e1) => {
      secValue = e1.screenX;
      if (FirstValue > secValue + 30) {
        if (m >= 0 && m < dotsBl.children.length - 1)
          dotsBl.children[m + 1].click();
        if (m === dotsBl.children.length - 1)
          dotsBl.children[0].click();
      }
      if (FirstValue < secValue - 30) {
        if (m > 0 && m < dotsBl.children.length - 1)
          dotsBl.children[m - 1].click();
        if (m === 0)
          dotsBl.children[dotsBl.children.length - 1].click();
      }
    }
  }
  console.log(news, articles)
}

async function fetchData() {
  await fetch("https://app.almukhtar-travel.com/api/news")
    .then((res) => res.json())
    .then((data) => { news = data.news })
  await fetch("https://app.almukhtar-travel.com/api/articles")
    .then((res) => res.json())
    .then((data) => { articles = data.articles })

  HundelData(news, articles)
}

fetchData()

function showData(array, imageUrl) {
  for (let i = 0; i < array.length; i++) {
    blogContainer.innerHTML += `
        <div class="col-lg-4 col-md-6" draggable="true">
        <div class= "card${i == 0 ? " active-card" : ""} ${i == 1 ? " next-card" : ""}" draggable = "true">
        <div class="type-topic" >${imageUrl ? "ARTICLE" : "NEWS"}</div>
        <div class="icon-pop d-none"><i class="fa-solid fa-x"></i></div> 
        <a href="./blog.html" target = "_blank" id=${array[i].id} style="width=100%;"> 
          <img src = "https://app.almukhtar-travel.com/images/${(imageUrl == 0) ? "news/" + array[i].image : array[i].image}" alt="tower" />
        </a>
          <div class="text">
            <div class="title">
              ${(l1.value == "en" || l2.value == "en") ? array[i].title_en : array[i].title_ar}
            </div>
            <div class="date" data-tr="blog-1-date">July 17, 2023</div>
            <div class="content">
            ${(l1.value == "en" || l2.value == "en") ? array[i].content_en : array[i].content_ar}
            </div>
            <div class="sites" data-tr="blog-1-tags">#Tourism, #Dubai</div>
            <div class="link">
            <a data-tr="view-more" href="./blog.html" target = "_blank" id=${array[i].id} dir ="ltr" class="view-more">
            ${(l1.value == "en" || l2.value == "en") ? "view more" : "عرض المزيد"}
              <i class="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
  }

}

function showBullets(array) {
  myBulletsContainer.innerHTML = "";
  if (!window.location.href.includes("blog.html")) {
    for (let index = 0; index < array.length; index++) {
      myBulletsContainer.innerHTML += `
  
      <span class="dot-bl" id="bl${index + 2}"></span>
  
      `
    }
  } else {
    for (let index = 0; index < array.length - 1; index++) {
      myBulletsContainer.innerHTML += `
  
      <span class="dot-bl" id="bl${index + 2}"></span>
  
      `
    }
  }
}


function saveImage(kind, url) {
  console.log(kind, url)
  let image = (kind == 0) ? "https://app.almukhtar-travel.com/images/news/" + url : "https://app.almukhtar-travel.com/images" + url;
  localStorage.setItem("image", image);
}
function saveDataToLocal(array, myId) {
  let image
  console.log(length)
  console.log("sdfsdfsdfsdf")
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == myId) {
      if (i < length) {
        image = "https://app.almukhtar-travel.com/images/news/" + array[i].image;
        localStorage.setItem("image", image);
      } else {
        image = "https://app.almukhtar-travel.com/images/" + array[i].image;
        localStorage.setItem("image", image);
      }
      console.log(array[i].id)
      console.log(array[i].image)
      console.log(array[i].title_en)
      console.log(array[i].content_en)
      if (l1.value == "en" || l2.value == "en") {
        localStorage.setItem("title", array[i].title_en);
        localStorage.setItem("content", array[i].content_en);
        localStorage.setItem("lang", "en");
      } else {
        localStorage.setItem("title", array[i].title_ar);
        localStorage.setItem("content", array[i].content_ar);
        localStorage.setItem("lang", "ar");
      }

    }

  }
}

let cardsTitle;
let cardsInfo;
if (!window.location.href.includes("blog.html")) {
l1.addEventListener('change', () => {
  console.log(myInfo)
  cardsTitle = document.querySelectorAll(".cards-blog .card .title")
  cardsInfo = document.querySelectorAll(".cards-blog .card .content")
  console.log(articles)
  console.log(news)
  console.log(cardsTitle)
  console.log(cardsInfo)
  if (cardsTitle) {
    for (let index = 0; index < myInfo.length; index++) {
      cardsTitle[index].innerHTML = (l1.value == "en") ? myInfo[index].title_en : myInfo[index].title_ar;
      cardsInfo[index].innerHTML = (l1.value == "en") ? myInfo[index].content_en : myInfo[index].content_ar;
    }
  }
})

l2.addEventListener('change', () => {
  cardsTitle = document.querySelectorAll(".cards-blog .card h4")
  cardsInfo = document.querySelectorAll(".cards-blog .card p")
  console.log(cardsInfo)
  console.log(news)
  if (cardsTitle) {
    console.log(news.length)
    for (let index = 0; index < news.myInfo; index++) {
      cardsTitle[index].innerHTML = (l2.value == "en") ? myInfo[index].title_en : myInfo[index].title_ar;
      cardsInfo[index].innerHTML = (l2.value == "en") ? myInfo[index].content_en : myInfo[index].content_ar;
    }
  }
  console.log(cardsTitle)
})
}