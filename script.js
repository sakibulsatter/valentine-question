const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const videoContainer = document.getElementById("videoContainer");
const videoPlayer = document.getElementById("videoPlayer");
const heartsDiv = document.getElementById("hearts");

// YES CLICK
yesBtn.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  videoPlayer.src = "video1.mp4";
  videoPlayer.play();

  launchHearts();
});

// NO CLICK
noBtn.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  videoPlayer.src = "video2.mp4";
  videoPlayer.play();
});

// HEART ANIMATION
function launchHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

