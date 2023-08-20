let myIcon = document.querySelector("nav .nav-icon");
let myList = document.querySelector("nav .almokhtar-list")
let relatedInfo = document.querySelector(".related-section");
let myIndicators = document.querySelectorAll(".related_section .related_section_indicators_span");
let myInputs = document.querySelectorAll(".my-Email");
let myHtml = document.querySelector("html")

myIcon.addEventListener("click", () => {

    myIcon.classList.toggle("open");
    myList.classList.toggle("open")
})

function changeLang(value) {
    let elements = document.querySelectorAll("[data-tr]");
    let logo = document.querySelector("#logo");
    if (value == "ar") {
        localStorage.setItem("lang", "ar");
        console.log(value)
        myInputs.forEach(input => {
            input.placeholder = "أدخل بريدك الإلكتروني"
        });
        logo.innerHTML = `<img src="./assets/img/arabic-logo.svg" alt="">`
        elements.forEach((element) => {
            let translationKey = element.getAttribute("data-tr");
            element.innerHTML = translations["ar"][translationKey];
            myHtml.setAttribute("dir", "rtl")
            element.style.fontFamily = "'Tajawal', sans-serif";
            document.body.classList.add("ar")

        });
    } else {
        localStorage.setItem("lang", "en");
        myInputs.forEach(input => {
            input.placeholder = "ُEnter Your Email"
        });
        logo.innerHTML = `<img src="./assets/img/Layer 3.svg" alt="">`
        elements.forEach((element) => {
            let translationKey = element.getAttribute("data-tr");
            element.innerHTML = translations["en"][translationKey];
            element.style.fontFamily = "'Raleway', sans-serif";
            myHtml.setAttribute("dir", "ltr")
            document.body.classList.remove("ar")

        });
    }
}

changeLang(localStorage.getItem("lang"))

let SecBlur = document.querySelector(".SecBlur")
let SecpopUp = document.querySelector(".SecpopUp")
let SecclosePopUp = document.querySelector("#SecclosePopUp")
async function sendEmail(event) {
    event.preventDefault();
    const value = document.querySelector("#emailInput").value;
    await fetch("https://app.almukhtar-travel.com/api/emails/create?email=" + value, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            SecBlur.style.visibility = "visible";
            SecpopUp.style.visibility = "visible";
        })
        .catch(error => console.log(error));
    document.querySelector("#emailInput").value = "";
}

SecclosePopUp.addEventListener("click", () => {
    SecBlur.style.visibility = "hidden";
    SecpopUp.style.visibility = "hidden";
})


let myBlogDetails = document.querySelector(".blog__details");
// console.log(myBlogDetails)

myBlogDetails.innerHTML = null;
myBlogDetails.innerHTML +=
    `

<div class="blog__details-img">
  <img src="${localStorage.getItem("image")}" alt="dubai city">
</div>
<div class="container blog__details-info" ${(localStorage.getItem("lang") == "ar") ? 'dir="rtl"' : ''}>
  <h1 class="blog__details-info-h1">${localStorage.getItem("title")}</h1>
  <span class="blog__details-info-span">July 17, 2023</span>
  <p class="blog__details-info-p">${localStorage.getItem("content")}</p>
  <span class="blog__details-info-span">#Tourism, #Dubai</span>
</div>
`

let myBulletsContainerSec = document.querySelector(".dots-blog-sec")

let blogContainerSec = document.querySelector(".card-blog-sec")

let articlesSec;
let newsSec;

function cardsSave(array, type) {
    (type == "articlesSec") ? articlesSec = array : newsSec = array;
}

function HundelData(newsSec, articlesSec) {
    let myInfo = newsSec.concat(articlesSec);
    console.log(myInfo)
    showData(newsSec, 0);
    showData(articlesSec, 1);
    showBullets(myInfo);
    cardsSave(myInfo, "newsSec")
    let myLinksSec = document.querySelectorAll(".cards-blog .card .text .link a");
    myLinksSec.forEach(link => {
        link.addEventListener("click", () => {
            console.log(link.id)
            saveDataToLocal(myInfo, link.id);
        })
    });

    const blogCardsSec = document.querySelectorAll(".cards-blog .card");
    const blogCardsSecImg = document.querySelectorAll(".cards-blog .card");

    for (let i = 0; i < myBulletsContainerSec.children.length - 1; i++) {
        if (i == 0) {
            myBulletsContainerSec.children[i].classList.add("active-dot-bl")
        }
        myBulletsContainerSec.children[i].onclick = () => {
            console.log("ddddddddddddd")
            for (let j = 0; j < myBulletsContainerSec.children.length - 1; j++) {
                myBulletsContainerSec.children[j].setAttribute("class", "dot-bl")
                blogCardsSec[j].setAttribute("class", "card")
            }
            if (i == 0) {
                blogCardsSec[0].classList.add("active-card")
                blogCardsSec[1].classList.add("next-card")
            }
            if (i > 0 && i < myBulletsContainerSec.children.length - 2) {
                blogCardsSec[i - 1].classList.add("prev-card")
                blogCardsSec[i].classList.add("active-card")
                blogCardsSec[i + 1].classList.add("next-card")
            }
            if (i == myBulletsContainerSec.children.length - 2) {
                blogCardsSec[i].classList.add("active-card")
                blogCardsSec[i - 1].classList.add("prev-card")
            }
            myBulletsContainerSec.children[i].classList.add("active-dot-bl")
        }
    }

    for (let k = 0; k < blogCardsSecImg.length; k++) {
        blogCardsSecImg[k].onclick = () => {
            myBulletsContainerSec.children[k].click()
        }
    }
    for (let m = 0; m < blogCardsSec.length; m++) {
        let FirstValueSec = 0;
        let secValueSec = 0;
        blogCardsSec[m].ondragstart = (e) => {
            FirstValueSec = e.screenX;
        }
        blogCardsSec[m].ondragover = (e1) => {
            secValueSec = e1.screenX;
            if (FirstValueSec > secValueSec + 30) {
                if (m >= 0 && m < dotsBl.children.length - 1)
                    dotsBl.children[m + 1].click();
                if (m === dotsBl.children.length - 1)
                    dotsBl.children[0].click();
            }
            if (FirstValueSec < secValueSec - 30) {
                if (m > 0 && m < dotsBl.children.length - 1)
                    dotsBl.children[m - 1].click();
                if (m === 0)
                    dotsBl.children[dotsBl.children.length - 1].click();
            }
        }
    }
    console.log(newsSec, articlesSec)
}

HundelData(news, articles)

function showData(array, imageUrl) {
    for (let i = 0; i < array.length; i++) {
        if (((localStorage.getItem("lang") == "en") && (localStorage.getItem("title") == array[i].title_en)) || ((localStorage.getItem("lang") == "ar") && (localStorage.getItem("title") == array[i].title_ar))) {
            continue;
        }
        blogContainerSec.innerHTML += `
        <div class="col-lg-4 col-md-6" >
        <div class= "card${i == 0 ? " active-card" : ""} ${i == 1 ? " next-card" : ""}" draggable = "true">
        <div class="type-topic" >${imageUrl ? "ARTICLE" : "NEWS"}</div>
        <div class="icon-pop d-none"><i class="fa-solid fa-x"></i></div>   
        <a href="./blog.html" target = "_blank" id=${array[i].id} style="width=100%;"> 
            <img src = "https://app.almukhtar-travel.com/images/${(imageUrl == 0) ? "news/" + array[i].image : array[i].image}" alt="tower" />
        </a>
          <div class="text">
          <div class="title">
            ${(localStorage.getItem("lang") == "en") ? array[i].title_en : array[i].title_ar}
            </div>
            <div class="date" data-tr="blog-1-date">July 17, 2023</div>
            <div class="content">
            ${(localStorage.getItem("lang") == "en") ? array[i].content_en : array[i].content_ar}
            </div>
            <div class="sites" data-tr="blog-1-tags">#Tourism, #Dubai</div>
            <div class="link">
            <a data-tr="view-more" href="./blog.html" target = "_blank" id=${array[i].id} dir ="ltr" class="view-more">
            ${(localStorage.getItem("lang") == "en") ? "view more" : "عرض المزيد"}
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
    myBulletsContainerSec.innerHTML = "";
    for (let index = 0; index < array.length; index++) {
        myBulletsContainerSec.innerHTML += `

    <span class="dot-bl" id="bl${index + 2}" style=${(index == array.length - 1) ? "display:none;" : ""}></span>

    `
    }



}


function saveDataToLocal(array, myId) {
    console.log(length)
    console.log("sdfsdfsdfsdf")
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == myId) {
            console.log(array[i].id)
            console.log(array[i].image)
            console.log(array[i].title_en)
            console.log(array[i].content_en)
            if (localStorage.getItem("lang") == "en") {
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

