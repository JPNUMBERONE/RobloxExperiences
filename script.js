function playRandomSound() {
  const audioArray = [
    "oof",
    "nom",
    "scary",
    "gg",
    "boom",
    "cola",
    "gravity",
    "mmm",
    "pizza",
    "speed",
    "sword",
    "taco",
  ];
  for (let i = 0; i < audioArray.length; i++) {
    let audio = document.getElementById(audioArray[i]);
    audio.pause();
    audio.currentTime = 0;
  }
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    document.getElementById("oof").play();
  } else if (randomNumber == 2) {
    document.getElementById("nom").play();
  } else if (randomNumber == 3) {
    document.getElementById("scary").play();
  } else if (randomNumber == 4) {
    document.getElementById("gg").play();
  } else if (randomNumber == 5) {
    document.getElementById("boom").play();
  } else if (randomNumber == 6) {
    document.getElementById("cola").play();
  } else if (randomNumber == 7) {
    document.getElementById("gravity").play();
  } else if (randomNumber == 8) {
    document.getElementById("mmm").play();
  } else if (randomNumber == 9) {
    document.getElementById("pizza").play();
  } else if (randomNumber == 10) {
    document.getElementById("speed").play();
  } else if (randomNumber == 11) {
    document.getElementById("sword").play();
  } else if (randomNumber == 12) {
    document.getElementById("taco").play();
  }
}
// Fisher–Yates shuffle

function remove() {
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/ui3WGEX2pno?si=fqsNpOundxTBCQ1E&amp;controls=0";
  document.getElementById("boop").play();
  document.getElementById("info").classList.add("hide");
  document.getElementById("text1").classList.remove("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
}
function remove2() {
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/vR8D9fsmoxU?si=R7JcmF31D185jfsD&amp;controls=0";
  document.getElementById("boop").play();
  document.getElementById("info2").classList.add("hide");
  document.getElementById("text2").classList.remove("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
}
function remove3() {
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/FtXON4WbUCM?si=-Y_tF-rWvD-F453y&amp;controls=0";
  document.getElementById("boop").play();
  document.getElementById("info3").classList.add("hide");
  document.getElementById("text3").classList.remove("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
}
function remove4() {
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/TUxDy88VCKY?si=WF87L3aebUVWi8oF&amp;controls=0";
  document.getElementById("boop").play();
  document.getElementById("info4").classList.add("hide");
  document.getElementById("text4").classList.remove("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
}
function removeall() {
  playRandomSound();
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/3y3MdGrgOCA?si=Q4GbeH2RCwT0cr4z";
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
}
