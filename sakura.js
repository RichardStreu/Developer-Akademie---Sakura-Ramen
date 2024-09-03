// get the elements and butoons from DOM

const popupAbout = document.getElementById("popupAbout");

const aboutBtn = document.getElementById("aboutBtn");

const logoBtn = document.getElementById("sakuraLogo");

const popupQuitBtn = document.getElementById("popupQuitBtn");



// this functions generates a new player via API

let player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('popupIframe', {
      events: {
    'onStateChange': onPlayerStateChange
  }
  });
}

// this function checks und saves the state of the player
let playerState;
function onPlayerStateChange(event) {
	playerState = event.data;
}
// this function pause the video if it is currently playing.
function PlayPause() {
	if(playerState == '1') {
		player.pauseVideo();
	}
}




// this function hides the popup
function hidePopup() {
  popupAbout.classList.remove("popup-visible");
  popupAbout.classList.add("popup-invisible");
  PlayPause();
}

// this function unhides the popup
function unhidePopup() {
  popupAbout.classList.remove("popup-invisible");
  popupAbout.classList.add("popup-visible");
}

// at first check if the popup is unhidden.
// if it is the aboutBtn get's the function to hide the popup
// else the aboutBtn get's the function to unhide the popup 

function assignFunctionallityToAboutBtn() {

if(popupAbout.classList.contains("popup-visible")) {
  hidePopup();
}
else {
  unhidePopup();
}

}

aboutBtn.addEventListener("click", assignFunctionallityToAboutBtn);
logoBtn.addEventListener("click", assignFunctionallityToAboutBtn);

// popupQuitBtn get's the function to hide the popup

popupQuitBtn.addEventListener("click", hidePopup);

// when the side is loaded for the first time or reloaded, the popup is hidden by default

hidePopup();