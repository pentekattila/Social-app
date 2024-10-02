const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsList = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsList.style.display !== "flex") {
    accountSettingsList.style.display = "flex";
  } else {
    accountSettingsList.style.display = "none";
  }
});

logoutButton.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfDonationsElem = document.getElementById("donationsNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberOfDonations() {
  noOfDonationsElem.innerText = noOfDonationsElem.innerText || 13;
}

function getData() {
  getNumberOfLikes();
  getNumberOfDonations();
}

getData();

const likeButton = document.getElementById("likeButton");
const donationsButton = document.getElementById("donateButton");

let isLiked = false;
let isDonated = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1;

  this.classList.toggle("touched");
});

donationsButton.addEventListener("click", function () {
  noOfDonationsElem.innerText = Number(noOfDonationsElem.innerText) + 1;

  this.classList.add("touched");
});

const adoptButton = document.getElementById("adoptButton");
const commentInput = document.getElementById("commentInput");

adoptButton.addEventListener("click", function () {
  commentInput.focus();
});

function dropDown() {
  document.getElementById("dropDownMenu").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".bellIcon")) {
    let dropDowns = document.getElementsByClassName("dropDownList");
    let i;
    for (i = 0; i < dropDowns.length; i++) {
      let openDropDown = dropDowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

const noOfLikesElemOne = document.getElementById("likesNumberOne");
const noOfDonationsElemOne = document.getElementById("donationsNumberOne");

function getNumberOfLikesOne() {
  noOfLikesElemOne.innerText = noOfLikesElemOne.innerText || 5;
}

function getNumberOfDonationsOne() {
  noOfDonationsElemOne.innerText = noOfDonationsElemOne.innerText || 3;
}

function getDataOne() {
  getNumberOfLikesOne();
  getNumberOfDonationsOne();
}

getDataOne();

const likeButtonOne = document.getElementById("likeButtonOne");
const donationsButtonOne = document.getElementById("donateButtonOne");

let isLikedOne = false;
let isDonatedOne = false;

likeButtonOne.addEventListener("click", function () {
  isLikedOne = !isLikedOne;

  noOfLikesElemOne.innerText = isLikedOne
    ? Number(noOfLikesElemOne.innerText) + 1
    : Number(noOfLikesElemOne.innerText) - 1;

  this.classList.toggle("touched");
});

donationsButtonOne.addEventListener("click", function () {
  noOfDonationsElemOne.innerText = Number(noOfDonationsElemOne.innerText) + 1;

  this.classList.add("touched");
});
