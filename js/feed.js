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

function toggleClass() {
  const messageElement = document.getElementById("message");

  const contactNameElement = document.getElementById("contactName");
  const contactImageElement = document.getElementById("contactImage");

  const contactButtons = Array.from(
    document.getElementsByClassName("contactButton")
  );

  if (messageElement.style.display === "block") {
    messageElement.style.display = "none";
  } else {
    messageElement.style.display = "block";
  }

  contactButtons.forEach((button) => {
    if (!button.hasEventListener) {
      button.addEventListener("click", function () {
        const userName = button.querySelector(".users").innerText;
        const profileImageSrc = button.querySelector(".profileImage").src;

        contactNameElement.innerText = userName;
        contactImageElement.src = profileImageSrc;

        messageElement.style.display = "block";
      });

      button.hasEventListener = true;
    }
  });
}

function closeMessage() {
  if (document.getElementById("message").style.display === "block") {
    document.getElementById("message").style.display = "none";
  }
}

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

const messageInput = document.getElementById("messageInput");
const messageText = document.getElementsByClassName("messageText")[0];
const messageBody = document.getElementsByClassName("messageBody")[0];

// messageText.innerText =
//   localStorage.getItem("message") || messageText.innerText;

function newMessage() {
  const newMessage = document.createElement("div");
  const newMessageContent = `
  <div class="messageText">
    <p class="messageText">${messageInput.value}</p>
  </div>`;
  newMessage.innerHTML = newMessageContent;
  messageBody.insertAdjacentElement("beforeend", newMessage);
  localStorage.setItem("message", JSON.stringify(messageInput.value));
  messageInput.value = "";
}

messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    newMessage();
    this.blur();
  }
});

const insertMessageButton = document.getElementsByClassName(
  "insertMessageButton"
)[0];

insertMessageButton.addEventListener("click", newMessage);

const adoptButton = document.getElementById("adoptButton");
const commentInput = document.getElementById("commentInput");
const commentMessage = document.getElementById("commentMessage");
const userCommentList = document.getElementsByClassName("userComments")[0];

commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText;

let showComments = true;

adoptButton.addEventListener("click", function () {
  if (showComments) {
    userCommentList.style.display = "block";
    commentInput.focus();
  } else {
    userCommentList.style.display = "none";
  }

  showComments = !showComments;
});

function setComment() {
  const newComment = document.createElement("div");

  const newCommentUsername = Date.now();

  const newCommentMessageContent = `<div class="commentContent">
              <div class="profileUserComment">
                <a href=""
                  ><img
                    src="../assets/dogprofile.png"
                    alt="user profile"
                    class="profileImage"
                /></a>
                <span>${newCommentUsername}</span>
              </div>

              <div class="userCommentText">
                <span id="commentMessage"
                  >${commentInput.value}</span
                >
                <div class="emojiReaction">🥳</div>
                <strong class="removeCommentButton">Remove this comment</strong>
              </div>

              <div class="commentReaction">
                <strong class="commentReactionButton">Like</strong>
                <strong class="commentReactionButton">Dislike</strong>
                <strong class="commentReactionButton">Comment</strong>
              </div>
            </div>`;
  newComment.innerHTML = newCommentMessageContent;
  userCommentList.insertAdjacentElement("afterbegin", newComment);
  localStorage.setItem("comment", JSON.stringify(commentInput.value));
  commentInput.value = "";
  addRemoveCommentListeners();
}

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

const commentInputButton = document.getElementsByClassName(
  "insertCommentButton"
)[0];

commentInputButton.addEventListener("click", setComment);

function addRemoveCommentListeners() {
  const commentContentList = Array.from(
    document.getElementsByClassName("commentContent")
  );

  const removeCommentButtons = Array.from(
    document.getElementsByClassName("removeCommentButton")
  );

  commentContentList.forEach((commentContent, index) => {
    commentContent.addEventListener("mouseover", function () {
      removeCommentButtons[index].style.display = "inline-block";
    });

    commentContent.addEventListener("mouseout", function () {
      removeCommentButtons[index].style.display = "none";
    });
  });

  removeCommentButtons.forEach((removeCommentButton, index) => {
    removeCommentButton.addEventListener("click", () => {
      commentContentList[index].remove();
    });
  });
}

addRemoveCommentListeners();

const infoIcon = document.getElementsByClassName("infoIcon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

let infoIconDisplayTimeout;

infoIcon.addEventListener("mouseover", function () {
  infoIconDisplayTimeout = setTimeout(() => {
    infoMessage.style.display = "block";
  }, 1000);
});

infoIcon.addEventListener("mouseout", function () {
  clearTimeout(infoIconDisplayTimeout);
  infoMessage.style.display = "none";
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
