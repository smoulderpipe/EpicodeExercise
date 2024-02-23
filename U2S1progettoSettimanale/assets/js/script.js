let sfondoBianco = "white-background";
let sfondoVerde = "green-background";
let scrollTrigger = 60;
const heroSection = document.getElementById("hero");
const heroHeight = heroSection.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight){
        document.getElementsByTagName("header")[0].classList.add(sfondoBianco);
        // document.getElementById("get-started").style.background = 'green';
        document.getElementById("get-started").classList.add(sfondoVerde);
    } else {
        document.getElementsByTagName("header")[0].classList.remove(sfondoBianco);
        // document.getElementById("get-started").style.background = 'black';
        document.getElementById("get-started").classList.remove(sfondoVerde);
    }
})

