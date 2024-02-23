var className = "white-background";
var scrollTrigger = 60;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1){
        document.getElementsByTagName("header")[0].classList.add(className);
    } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
    }
})

