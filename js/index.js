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
  window.open("../login.html", "_self");
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
