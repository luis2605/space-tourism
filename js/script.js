const hamburgerOpenBtn = document.getElementById("hamburger-open-btn")
const hamburgerCloseBtn = document.getElementById("hamburger-close-btn")
let hamburgerMenuShown = document.getElementById("hamburger-menu-shown")
// general
const celestial = document.getElementById("celestial")


hamburgerOpenBtn.addEventListener("click",displayHidden)
hamburgerCloseBtn.addEventListener("click",hideHidden)

function displayHidden(){

  if(hamburgerMenuShown.classList.contains("hidden")){
      hamburgerMenuShown.classList.remove("hidden")
      hamburgerMenuShown.classList.add("shown")
  } 
}
function hideHidden(){
    if (hamburgerMenuShown.classList.contains("shown")){
       hamburgerMenuShown.classList.remove("shown")
       hamburgerMenuShown.classList.add("hidden")


    }
}

//destination

celestial.classList.add("animation-celestials")

