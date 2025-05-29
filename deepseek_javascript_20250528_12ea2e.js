// Common Functions
document.addEventListener('DOMContentLoaded', function() {
    // Load user name from localStorage if available
    const userNameElements = document.querySelectorAll('#userName');
    if (userNameElements.length > 0) {
        const userName = localStorage.getItem('birthdayUserName') || 'Sunu';
        userNameElements.forEach(el => {
            el.textContent = userName;
        });
    }

    // Page-specific scripts
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Name Entry Page
        const nameInput = document.getElementById('nameInput');
        const continueBtn = document.getElementById('continueBtn');
        
        continueBtn.addEventListener('click', function() {
            const name = nameInput.value.trim();
            if (name) {
                localStorage.setItem('birthdayUserName', name);
                window.location.href = 'message.html';
            } else {
                alert('Please enter your name');
            }
        });
        
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                continueBtn.click();
            }
        });
    } 
    else if (currentPage === 'message.html') {
        // Special Message Page
        const message = `Happy Birthday, Sunu!\n\nShubho jonmo dine onek onek shubhechha. Tumi sara jibon amar sathe thako—ei prothom ebong shesh iccha. Onk happy thako, onek bhalobasha diye tomake rakhibo amar hridoye. Tumi amar shob kichu, aar ami tomake bhalobashi beshi beshi.\n\nI love you, forever and always.`;
        const typedMessage = document.getElementById('typedMessage');
        const nextBtn = document.getElementById('nextBtn');
        
        // Type the message
        typeMessage(typedMessage, message, function() {
            nextBtn.style.display = 'block';
        });
        
        nextBtn.addEventListener('click', function() {
            window.location.href = 'gallery.html';
        });
    } 
    else if (currentPage === 'gallery.html') {
        // Message Gallery Page
        const galleryMessages = [
            {
                image: 'https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg',
                text: 'Happy Birthday Sunu… Aaj ka din sirf tumhara hai, jaise mera har din sirf tumhare liye hai. Tum mein hi mera sukoon hai, meri muskurahat hai, mera pyaar hai. Har saal, har janam tum meri hi raho — bas yahi dua karta hoon. Main tumse lafzon se zyada, waqt se zyada, zindagi se zyada pyaar karta hoon.'
            },
            {
                image: 'https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg',
                text: 'Happy Birthday meri jaan, Kabhi kabhi tum dard deti ho, par us dard mein bhi tumhara naam hota hai. Main toot padta hoon, par phir bhi tum mein hi jeena chahta hoon. Tum sirf mera pyaar nahi ho, meri aadat ban chuki ho. Galti tumhari ho ya na ho, main khud ko sirf tum mein hi dhoondta hoon.'
            },
            {
                image: 'https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg',
                text: 'Janamdin mubarak ho meri sanskari pari, Mujhe na gifts chahiye, na cake, na dikhawa — Bas tumhara vishwas, ek dil jo sirf mera ho. Main har kadam tumhare saath hoon, har faisle mein tumhara saathi hoon. Bas tum loyal rehna… kyunki meri poori duniya tum ho.'
            },
            {
                image: 'https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg',
                text: 'Happy Birthday meri hone wali biwi, Sochta hoon jab tum meri zindagi mein hamesha ke liye aayogi, Toh har din tumhara birthday ban jaayega. Main tumhe har wo khushi dunga jiska tumne kabhi sapna dekha tha. Tumhara haath pakadkar tumhe poori duniya dikhana chahta hoon — Sharafat aur izzat ke saath.'
            },
            {
                image: 'https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg',
                text: 'Sunu, Kabhi tum galti karti ho, toh main gussa ho jaata hoon. Kabhi lafz tez ho jaate hain… lekin mera pyaar kabhi kam nahi hota. Main tumse ladta hoon, samjhaata hoon — kyunki main tumhe khona nahi chahta. Happy Birthday meri jiddi, lekin pyaari si jaan, Gussa bhi tum pe, aur pyaar bhi sirf tum se.'
            },
            {
                image: 'https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg',
                text: 'Tere is khaas din pe ek wada karta hoon — Main tumhe kabhi chhodunga nahi… Lekin tum bhi mujhe kabhi todna mat. Main tumhe pyaar dunga, vishwas dunga, izzat dunga — Bas tum meri zindagi mein hamesha meri apni rehna. Happy Birthday meri zindagi, Tumhara naam mere dil pe likha hai — Jise na waqt mita sakta hai, na koi aur.'
            }
        ];
        
        const galleryImage = document.getElementById('galleryImage');
        const galleryMessage = document.getElementById('galleryMessage');
        const prevBtn = document.getElementById('prevBtn');
        const nextGalleryBtn = document.getElementById('nextGalleryBtn');
        const giftBtn = document.getElementById('giftBtn');
        
        let currentIndex = 0;
        
        function showMessage(index) {
            galleryImage.src = galleryMessages[index].image;
            galleryMessage.textContent = '';
            typeMessage(galleryMessage, galleryMessages[index].text);
            
            // Update button states
            prevBtn.disabled = index === 0;
            nextGalleryBtn.disabled = index === galleryMessages.length - 1;
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                showMessage(currentIndex);
            }
        });
        
        nextGalleryBtn.addEventListener('click', function() {
            if (currentIndex < galleryMessages.length - 1) {
                currentIndex++;
                showMessage(currentIndex);
            }
        });
        
        giftBtn.addEventListener('click', function() {
            window.location.href = 'carousel.html';
        });
        
        // Show first message
        showMessage(0);
    } 
    else if (currentPage === 'carousel.html') {
        // 3D Carousel Page
        const carousel = document.getElementById('carousel');
        const carouselCaption = document.getElementById('carouselCaption');
        
        const images = [
            { url: 'https://i.ibb.co/v4pv9Mtf/IMG-20250509-143550-376.jpg', caption: 'My Love' },
            { url: 'https://i.ibb.co/Z1fPLwjj/IMG-20250509-102300-546.jpg', caption: 'My Heart' },
            { url: 'https://i.ibb.co/4rpHPkB/IMG-20250509-143553-146.jpg', caption: 'My Everything' },
            { url: 'https://i.ibb.co/pYvpZVr/IMG-20250509-155230-389.jpg', caption: 'My Future' },
            { url: 'https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg', caption: 'My Joy' },
            { url: 'https://i.ibb.co/BV2zpvYP/IMG-20250509-143539-528.jpg', caption: 'My Life' },
            { url: 'https://i.ibb.co/GfZqdBQs/IMG-20250509-155228-578.jpg', caption: 'My Happiness' },
            { url: 'https://i.ibb.co/fGHSQzks/IMG-20250509-143542-113.jpg', caption: 'My Smile' },
            { url: 'https://i.ibb.co/KcJSZVpz/IMG-20250509-143535-691.jpg', caption: 'My Peace' },
            { url: 'https://i.ibb.co/QFPtVpdQ/IMG-20250509-143544-298.jpg', caption: 'My Forever' }
        ];
        
        // Create carousel items
        images.forEach((img, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = img.url;
            imgElement.alt = img.caption;
            
            // Calculate position in 3D space
            const angle = (index / images.length) * Math.PI * 2;
            const radius = 150;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            
            imgElement.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${angle}rad)`;
            carousel.appendChild(imgElement);
            
            // Add click event to show caption
            imgElement.addEventListener('click', function() {
                carouselCaption.textContent = img.caption;
            });
        });
        
        // Show first caption
        carouselCaption.textContent = images[0].caption;
        
        // Add click event to go to reply page
        setTimeout(function() {
            const replyBtn = document.createElement('button');
            replyBtn.textContent = 'Reply';
            replyBtn.className = 'btn';
            replyBtn.style.marginTop = '2rem';
            replyBtn.addEventListener('click', function() {
                window.location.href = 'reply.html';
            });
            
            document.querySelector('.container').appendChild(replyBtn);
        }, 5000);
    } 
    else if (currentPage === 'reply.html') {
        // WhatsApp Reply Page
        const replyMessage = document.getElementById('replyMessage');
        const sendBtn = document.getElementById('sendBtn');
        
        sendBtn.addEventListener('click', function() {
            const message = replyMessage.value.trim();
            if (message) {
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
            } else {
                alert('Please type a message');
            }
        });
    }
});

// Helper function to type messages with animation
function typeMessage(element, message, callback) {
    let i = 0;
    element.textContent = '';
    element.classList.add('typing');
    
    function typing() {
        if (i < message.length) {
            // Handle new lines
            if (message.substring(i, i + 1) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.textContent += message.charAt(i);
            }
            i++;
            setTimeout(typing, Math.random() * 50 + 30);
        } else {
            element.classList.remove('typing');
            if (callback) callback();
        }
    }
    
    typing();
}