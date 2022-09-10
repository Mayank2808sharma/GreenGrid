// Get the modal, its content <div>, the button to open it, and the span to close it.
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modalp");
var span = document.getElementsByClassName("close")[0];
var menu = document.getElementById("nav-content");

// When the user clicks the button, modal opens, fetches JokeAPI, and displays it in the modal on screen.
function jokey() {
  fetch(
    "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.type === "single") {
        var joke = data.joke;
        modalContent.innerHTML = joke;
        localStorage.setItem("joke1", JSON.stringify(joke));
        console.log(joke);
      } else if (data.type === "twopart") {
        modalContent.innerHTML = data.setup + "<br><br>" + data.delivery;
        localStorage.setItem(
          "joke2",
          JSON.stringify(data.setup, "<br><br>", data.delivery)
        );
        console.log(data.setup, "<br><br>", data.delivery);
      }
    });
  menu.style.transform = "translate(-150px)";
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    // menu.style.transform = "translate(0px)"
    location.reload();
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      // menu.style.transform = "translate(0px)"
      location.reload();
    }
  };
}
//menu.style.transform = "translate(-150px)";
const loader = document.getElementById("preloader");
function callmedealy() {
  window.addEventListener("load", function () {
    loader.style.display = "none";
    document.getElementsByClassName("navbar")[0].style.position = "fixed";

    console.log("yup this part has ended");
  });
}
callmedealy();
const navbar = document.getElementsByClassName("navbar")[0];
const mapa = document.getElementById("suraklal");
const lia = document.getElementsByClassName("lia");
// navbar.style.backgroundColor = "crimson";
// changing nav bar color on scrolling
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 600) {
    navbar.classList.add("active_nava");
    mapa.style.color = "white";
    for (let element of lia) {
      // console.log(element);
      element.addEventListener("mouseover", function () {
        element.style.color = "crimson";
      });
      element.addEventListener("mouseout", function () {
        element.style.color = "white";
      });
    }
  } else {
    navbar.classList.remove("active_nava");
    mapa.style.color = "crimson";
    for (let element of lia) {
      // console.log(element);
      element.addEventListener("mouseover", function () {
        element.style.color = "crimson";
      });
      element.addEventListener("mouseout", function () {
        element.style.color = "white";
      });
    }
  }
});
// scroll image effect
const uppersection = document.getElementById("uppersection");
setInterval(function () {
  let classname = uppersection.className;
  if (classname == "img1") {
    uppersection.classList.remove("img1");
    uppersection.classList.add("img2");
  } else if (classname == "img2") {
    uppersection.classList.remove("img2");
    uppersection.classList.add("img3");
  } else if (classname == "img3") {
    uppersection.classList.remove("img3");
    uppersection.classList.add("img4");
  } else if (classname == "img4") {
    uppersection.classList.remove("img4");
    uppersection.classList.add("img1");
  }
}, 3000);
setTimeout(function () {
  window.down = 1000;
}, 5000);
