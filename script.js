// Page 1: Name Entry
document.getElementById('continueBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('userName', name);
    window.location.href = 'message.html';
});

// Page 2: Special Message
window.onload = function() {
    const name = localStorage.getItem('userName');
    document.getElementById('birthdayMessage').innerHTML = `Happy Birthday, ${name}!<br>Shubho jonmo dine onek onek shubhechha. Tumi sara jibon amar sathe thako—ei prothom ebong shesh iccha. Onk happy thako, onek bhalobasha diye tomake rakhibo amar hridoye. Tumi amar shob kichu, aar ami tomake bhalobashi beshi beshi.<br>I love you, forever and always.`;
    
    document.getElementById('continueBtn').addEventListener('click', function() {
        window.location.href = 'gallery.html';
    });
};

// Page 3: Popup Message Gallery
const messages = [
    {
        text: "Happy Birthday Sunu… Aaj ka din sirf tumhara hai, jaise mera har din sirf tumhare liye hai. Tum mein hi mera sukoon hai, meri muskurahat hai, mera pyaar hai. Har saal, har janam tum meri hi raho — bas yahi dua karta hoon. Main tumse lafzon se zyada, waqt se zyada, zindagi se zyada pyaar karta hoon.",
        image: "https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg"
    },
    {
        text: "Happy Birthday meri jaan, Kabhi kabhi tum dard deti ho, par us dard mein bhi tumhara naam hota hai. Main toot padta hoon, par phir bhi tum mein hi jeena chahta hoon. Tum sirf mera pyaar nahi ho, meri aadat ban chuki ho. Galti tumhari ho ya na ho, main khud ko sirf tum mein hi dhoondta hoon.",
        image: "https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg"
    },
    {
        text: "Janamdin mubarak ho meri sanskari pari, Mujhe na gifts chahiye, na cake, na dikhawa — Bas tumhara vishwas, ek dil jo sirf mera ho. Main har kadam tumhare saath hoon, har faisle mein tumhara saathi hoon. Bas tum loyal rehna… kyunki meri poori duniya tum ho.",
        image: "https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg"
    },
    {
        text: "Happy Birthday meri hone wali biwi, Sochta hoon jab tum meri zindagi mein hamesha ke liye aayogi, Toh har din tumhara birthday ban jaayega. Main tumhe har wo khushi dunga jiska tumne kabhi sapna dekha tha. Tumhara haath pakadkar tumhe poori duniya dikhana chahta hoon — Sharafat aur izzat ke saath.",
        image: "https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg"
    },
    {
        text: "Sunu, Kabhi tum galti karti ho, toh main gussa ho jaata hoon. Kabhi lafz tez ho jaate hain… lekin mera pyaar kabhi kam nahi hota. Main tumse ladta hoon, samjhaata hoon — kyunki main tumhe khona nahi chahta. Happy Birthday meri jiddi, lekin pyaari si jaan, Gussa bhi tum pe, aur pyaar bhi sirf tum se.",
        image: "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg"
    },
    {
        text: "Tere is khaas din pe ek wada karta hoon — Main tumhe kabhi chhodunga nahi… Lekin tum bhi mujhe kabhi todna mat. Main tumhe pyaar dunga, vishwas dunga, izzat dunga — Bas tum meri zindagi mein hamesha meri apni rehna. Happy Birthday meri zindagi, Tumhara naam mere dil pe likha hai — Jise na waqt mita sakta hai, na koi aur.",
        image: "https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg"
    }
];

let currentMessageIndex = 0;

function showMessage(index) {
    document.getElementById('messageText').innerText = messages[index].text;
    document.getElementById('messageImage').src = messages[index].image;
}

document.getElementById('prevBtn').addEventListener('click', function() {
    currentMessageIndex = (currentMessageIndex > 0) ? currentMessageIndex - 1 : messages.length - 1;
    showMessage(currentMessageIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentMessageIndex = (currentMessageIndex < messages.length - 1) ? currentMessageIndex + 1 : 0;
    showMessage(currentMessageIndex);
});

document.getElementById('giftBtn').addEventListener('click', function() {
    window.location.href = 'carousel.html';
});

// Page 4: 3D Rotating Image Carousel
const images = [
    "https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg",
    "https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg",
    "https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg",
    "https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg",
    "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg",
    "https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg",
    "https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg",
    "https://i.ibb.co/fGHSQzks/IMG-20250509-143542-113.jpg",
    "https://i.ibb.co/KcJSZVpz/IMG-20250509-143535-691.jpg",
    "https://i.ibb.co/QFPtVpdQ/IMG-20250509-143544-298.jpg"
];

let currentImageIndex = 0;

function showCarouselImage(index) {
    const name = localStorage.getItem('userName');
    document.getElementById('carouselTitle').innerText = `Happy Birthday, ${name}`;
    document.getElementById('carouselImage').src = images[index];
}

window.onload = function() {
    showCarouselImage(currentImageIndex);
};

// Page 5: WhatsApp Reply
document.getElementById('replyBtn').addEventListener('click', function() {
    document.getElementById('replyMessage').style.display = 'block';
});

document.getElementById('sendBtn').addEventListener('click', function() {
    const message = document.getElementById('replyMessage').value;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
