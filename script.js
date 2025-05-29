/* script.js */

// ----------------------------
// PAGE 1: NAME ENTRY & NAVIGATION
// ----------------------------
function saveName() {
  var name = document.getElementById("userName").value.trim();
  if (name !== "") {
    localStorage.setItem("userName", name);
    window.location.href = "message.html";
  } else {
    alert("Please enter your name!");
  }
}

// ----------------------------
// Utility: Typewriter Effect
// ----------------------------
function typeWriter(element, text, i, speed, callback) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(function () {
      typeWriter(element, text, i + 1, speed, callback);
    }, speed);
  } else {
    if (callback) callback();
  }
}

// ----------------------------
// PAGE 2: SPECIAL MESSAGE + PHOTO
// ----------------------------
function initMessagePage() {
  var name = localStorage.getItem("userName") || "Sunu";
  document.getElementById("greeting").innerText = "Happy Birthday, " + name + "!";
  var fullMessage =
    "Shubho jonmo dine onek onek shubhechha. Tumi sara jibon amar sathe thako—ei prothom ebong shesh iccha. Onk happy thako, onek bhalobasha diye tomake rakhibo amar hridoye. Tumi amar shob kichu, aar ami tomake bhalobashi beshi beshi.\n\nI love you, forever and always.";
  var msgElement = document.getElementById("typedMessage");
  msgElement.innerHTML = "";
  typeWriter(msgElement, fullMessage, 0, 50);
}

function goToGallery() {
  window.location.href = "gallery.html";
}

// ----------------------------
// PAGE 3: POPUP MESSAGE GALLERY
// ----------------------------
var galleryMessages = [
  {
    img: "https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg",
    text:
      "Happy Birthday Sunu… Aaj ka din sirf tumhara hai, jaise mera har din sirf tumhare liye hai. Tum mein hi mera sukoon hai, meri muskurahat hai, mera pyaar hai. Har saal, har janam tum meri hi raho — bas yahi dua karta hoon. Main tumse lafzon se zyada, waqt se zyada, zindagi se zyada pyaar karta hoon.",
  },
  {
    img: "https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg",
    text:
      "Happy Birthday meri jaan, Kabhi kabhi tum dard deti ho, par us dard mein bhi tumhara naam hota hai. Main toot padta hoon, par phir bhi tum mein hi jeena chahta hoon. Tum sirf mera pyaar nahi ho, meri aadat ban chuki ho. Galti tumhari ho ya na ho, main khud ko sirf tum mein hi dhoondta hoon.",
  },
  {
    img: "https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg",
    text:
      "Janamdin mubarak ho meri sanskari pari, Mujhe na gifts chahiye, na cake, na dikhawa — Bas tumhara vishwas, ek dil jo sirf mera ho. Main har kadam tumhare saath hoon, har faisle mein tumhara saathi hoon. Bas tum loyal rehna… kyunki meri poori duniya tum ho.",
  },
  {
    img: "https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg",
    text:
      "Happy Birthday meri hone wali biwi, Sochta hoon jab tum meri zindagi mein hamesha ke liye aayogi, Toh har din tumhara birthday ban jaayega. Main tumhe har wo khushi dunga jiska tumne kabhi sapna dekha tha. Tumhara haath pakadkar tumhe poori duniya dikhana chahta hoon — Sharafat aur izzat ke saath.",
  },
  {
    img: "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg",
    text:
      "Sunu, Kabhi tum galti karti ho, toh main gussa ho jaata hoon. Kabhi lafz tez ho jaate hain… lekin mera pyaar kabhi kam nahi hota. Main tumse ladta hoon, samjhaata hoon — kyunki main tumhe khona nahi chahta. Happy Birthday meri jiddi, lekin pyaari si jaan, Gussa bhi tum pe, aur pyaar bhi sirf tum se.",
  },
  {
    img: "https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg",
    text:
      "Tere is khaas din pe ek wada karta hoon — Main tumhe kabhi chhodunga nahi… Lekin tum bhi mujhe kabhi todna mat. Main tumhe pyaar dunga, vishwas dunga, izzat dunga — Bas tum meri zindagi mein hamesha meri apni rehna. Happy Birthday meri zindagi, Tumhara naam mere dil pe likha hai — Jise na waqt mita sakta hai, na koi aur.",
  },
];
var galleryIndex = 0;

function initGalleryPage() {
  galleryIndex = 0;
  showGalleryMessage(galleryIndex);
}

function showGalleryMessage(index) {
  var imgEl = document.getElementById("popupImage");
  var msgEl = document.getElementById("popupMessage");
  imgEl.src = galleryMessages[index].img;
  msgEl.innerHTML = "";
  typeWriter(msgEl, galleryMessages[index].text, 0, 40);
}

function nextMessage() {
  galleryIndex = (galleryIndex + 1) % galleryMessages.length;
  showGalleryMessage(galleryIndex);
}

function prevMessage() {
  galleryIndex = (galleryIndex - 1 + galleryMessages.length) % galleryMessages.length;
  showGalleryMessage(galleryIndex);
}

function goToCarousel() {
  window.location.href = "carousel.html";
}

// ----------------------------
// PAGE 4: 3D ROTATING IMAGE CAROUSEL
// ----------------------------
var carouselImages = [
  { src: "https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg", caption: "Image 1" },
  { src: "https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg", caption: "Image 2" },
  { src: "https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg", caption: "Image 3" },
  { src: "https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg", caption: "Image 4" },
  { src: "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg", caption: "Image 5" },
  { src: "https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg", caption: "Image 6" },
  { src: "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg", caption: "Image 7" },
  { src: "https://i.ibb.co/fGHSQzks/IMG-20250509-143542-113.jpg", caption: "Image 8" },
  { src: "https://i.ibb.co/KcJSZVpz/IMG-20250509-143535-691.jpg", caption: "Image 9" },
  { src: "https://i.ibb.co/QFPtVpdQ/IMG-20250509-143544-298.jpg", caption: "Image 10" },
];

function initCarouselPage() {
  var name = localStorage.getItem("userName") || "Sunu";
  document.getElementById("carouselGreeting").innerText = "Happy Birthday " + name + "!";
  var carousel = document.getElementById("carousel");
  carousel.innerHTML = "";
  var angleIncrement = 360 / carouselImages.length;
  // Adjust radius value to properly space images in 3D
  var radius = 130;
  carouselImages.forEach(function (item, index) {
    var figure = document.createElement("figure");
    figure.style.transform = "rotateY(" + (index * angleIncrement) + "deg) translateZ(" + radius + "px)";
    
    var img = document.createElement("img");
    img.src = item.src;
    
    var caption = document.createElement("figcaption");
    caption.innerText = item.caption;
    
    figure.appendChild(img);
    figure.appendChild(caption);
    carousel.appendChild(figure);
  });
}

// ----------------------------
// PAGE 5: WHATSAPP REPLY PAGE
// ----------------------------
function toggleReply() {
  var replyBox = document.getElementById("replyBox");
  if (replyBox.style.display === "none" || replyBox.style.display === "") {
    replyBox.style.display = "block";
  } else {
    replyBox.style.display = "none";
  }
}

function sendWA() {
  var message = document.getElementById("waMessage").value.trim();
  if (message !== "") {
    window.open("https://wa.me/?text=" + encodeURIComponent(message), "_blank");
  } else {
    alert("Please enter a message.");
  }
}

// ----------------------------
// Initialize Page Based on Class
// ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("message-page")) {
    initMessagePage();
  }
  if (document.body.classList.contains("gallery-page")) {
    initGalleryPage();
  }
  if (document.body.classList.contains("carousel-page")) {
    initCarouselPage();
  }
  // No special init needed for the WhatsApp page.
});
