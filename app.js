const out = document.querySelector(".out");
const well = document.querySelector("#well");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const next = document.querySelector("#next");
const items = [well, scissors, paper];
let compItem;
console.log(Math.random());
next.onclick = () => {
  next.textContent = "Почати";
  compItem = Math.random();
  console.log(compItem);
  out.textContent = "Комп вибирає";
  function getCompItem() {
    if (compItem <= 0.3) {
      compItem = "колодязь";
      console.log("колодязь");
    }
    if (compItem > 0.3 && compItem <= 0.6) {
      compItem = "ножиці";
      console.log("ножиці");
    }
    if (compItem > 0.6 && compItem <= 1) {
      compItem = "папір";
      console.log("папір");
    }
    out.innerHTML += "<br> Комп вибрав";
  }
  getCompItem();
  console.log(compItem);
  out.innerHTML += "<br> Вибирай";
  function addActive() {
    well.classList.add("button-active");
    scissors.classList.add("button-active");
    paper.classList.add("button-active");
    next.classList.remove("button-active");
  }
  addActive();
  // цей нижній фор я вкрав і не особо розумію як він праціює
  let userItem;
  function fbc() {
    for (let i = 0; i < items.length; i++)
      items[i].onclick = function () {
        userItem = this.innerHTML;

        console.log(userItem);
        out.innerHTML += `<br> Ти вибрав ${this.innerHTML}`;
        out.innerHTML += `<br> Комп вибрав ${compItem}`;
        compares();
      };
  }
  fbc();
  function compares() {
    if (compItem == "колодязь") {
      switch (userItem) {
        case "колодязь":
          out.innerHTML += "<br> Нічія";
          break;
        case "ножиці":
          out.innerHTML += "<br> Ти програв";
          break;
        case "папір":
          out.innerHTML += "<br> Ти виграв";
          break;
      }
    }
    if (compItem == "ножиці") {
      switch (userItem) {
        case "колодязь":
          out.innerHTML += "<br> Ти виграв";
          break;
        case "ножиці":
          out.innerHTML += "<br> Нічія";
          break;
        case "папір":
          out.innerHTML += "<br> Ти програв";
          break;
      }
    }
    if (compItem == "папір") {
      switch (userItem) {
        case "колодязь":
          out.innerHTML += "<br> Ти програв";
          break;
        case "ножиці":
          out.innerHTML += "<br> Ти виграв";
          break;
        case "папір":
          out.innerHTML += "<br> Нічія";
          break;
      }
    }
    endingGame();
  }
  function endingGame() {
    well.classList.remove("button-active");
    scissors.classList.remove("button-active");
    paper.classList.remove("button-active");
    next.classList.add("button-active");
    next.textContent = "Заново";
  }
};
