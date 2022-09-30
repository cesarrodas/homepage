(function (){
  let pages = Array.from(document.querySelectorAll(".page"));
  console.log("PAGES", pages);
  let leftButton = document.querySelector(".left-button");
  let rightButton = document.querySelector(".right-button");
  //let selected = 0;
  let selected = document.querySelector(".page[selected]");
  let notSelected = document.querySelectorAll(".page:not([selected])");

  for(let item of notSelected){
    item.classList.add("hide");
  }

  leftButton.addEventListener("click", () => {
    selected.classList.add("hide");
    let selectedIndex = selected.classList[1].substring(5);
    if(selectedIndex == 0){
      selectedIndex = pages.length - 1;
    } else {
      selectedIndex = Number(selectedIndex) - 1;
    }
    selected.removeAttribute("selected");
    pages[selectedIndex].classList.remove("hide");
    pages[selectedIndex].setAttribute("selected", true);
    selected = document.querySelector(".page[selected]");
  });

  rightButton.addEventListener("click", () => {
    selected.classList.add("hide");
    let selectedIndex = selected.classList[1].substring(5);
    if(selectedIndex == pages.length - 1){
      selectedIndex = 0;
    } else {
      selectedIndex = Number(selectedIndex) + 1;
    }
    selected.removeAttribute("selected");
    console.log("sle", selectedIndex);
    pages[selectedIndex].classList.remove("hide");
    pages[selectedIndex].setAttribute("selected", true);
    selected = document.querySelector(".page[selected]");
  });
})();