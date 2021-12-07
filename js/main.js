

const arrowTop = document.querySelector(".arrow-top"), 
      wrapperFormCallback = document.querySelector(".wrapper-form-callback"), 
      buttonCallBack = document.querySelectorAll(".button-call-back"), 
      postCard = document.querySelectorAll(".postcard"), 
      body = document.querySelector("body"), 
      navIcon = document.querySelector("#nav-icon3"), 
      wrapperNavBurger = document.querySelector(".wrapper-nav-burger"), 
      navItems = document.querySelectorAll(".nav-item"); 
      
    window.addEventListener("scroll", (function (e) { window.scrollY > 100 ? arrowTop.classList.add("active") : arrowTop.classList.remove("active") })),
    arrowTop.addEventListener("click", (function (e) { window.scroll(0, 0) })); for (let buttonCallBacks of buttonCallBack) buttonCallBacks.onclick = e => { wrapperFormCallback.classList.add("active") };
    navIcon.addEventListener("click", (function (e) {
        if (wrapperNavBurger.classList.contains("active") == false) {
            body.style.position = "fixed";
            body.style.width = "100%";
            body.style.overflowY = "scroll"
        }
        if (navIcon.classList.contains("open") == true) {
            body.style.position = "static";
            body.style.overflowY = "auto";
        }
        navIcon.classList.toggle("open"), wrapperNavBurger.classList.toggle("active"), html.style.overflowY = "visible" })); for (let navItem of navItems) navItem.onclick = () => { 
            body.style.position = "static";
            body.style.overflowY = "auto";
            wrapperNavBurger.classList.remove("active"), navIcon.classList.remove("open") };

wrapperFormCallback.onclick = event => { event.target === wrapperFormCallback && wrapperFormCallback.classList.remove("active") };