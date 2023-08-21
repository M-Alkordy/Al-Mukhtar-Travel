console.log(translations)
const lang = document.querySelector('.selected-lang')
lang.value=(localStorage.getItem("lang"))? localStorage.getItem("lang") : "ar";
// console.log(lang.options.length)

const langg = document.querySelector('.lang-mobile')
langg.value=(localStorage.getItem("lang"))? localStorage.getItem("lang") : "ar";
lang.value="ar"
langg.value="ar"
localStorage.setItem("lang" , "ar");
// console.log(langg)
// console.log(langg.options[0])
// console.log(langg.options[1])

let myHtml = document.querySelector("html")


let myInputs = document.querySelectorAll(".my-Email");
// console.log(myInputs)




lang.addEventListener('change', ()=>{changeLang(lang.value)})
langg.addEventListener('change', ()=>{changeLang(langg.value)})


function changeLang(value) {
  let elements = document.querySelectorAll("[data-tr]");
  let logo = document.querySelector("#logo");
  if (value == "ar") {
    localStorage.setItem("lang" , "ar");
    console.log(value)
    myInputs.forEach(input => {
      input.placeholder = "أدخل بريدك الإلكتروني"
    });
    langg.options[1].selected = true;
    logo.innerHTML = `<img src="./assets/img/arabic-logo.svg" alt="">`
    elements.forEach((element) => {
      let translationKey = element.getAttribute("data-tr");
      element.innerHTML = translations["ar"][translationKey];
      myHtml.setAttribute("dir" , "rtl")
      element.style.fontFamily  = "'Tajawal', sans-serif";
      document.body.classList.add("ar")
      
    });
  }else{
    localStorage.setItem("lang" , "en");
    myInputs.forEach(input => {
      input.placeholder = "ُEnter Your Email"
    });
    langg.options[0].selected = true;
    logo.innerHTML = `<img src="./assets/img/Layer 3.svg" alt="">`
    elements.forEach((element) => {
      let translationKey = element.getAttribute("data-tr");
      element.innerHTML = translations["en"][translationKey];
      element.style.fontFamily  = "'Raleway', sans-serif";
      myHtml.setAttribute("dir" , "ltr")
      document.body.classList.remove("ar")

    });
  }
}
changeLang("ar")
changeLang(localStorage.getItem("lang"))
