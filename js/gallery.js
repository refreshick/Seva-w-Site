// ===========================
// GALLERY LIGHTBOX FUNCTIONALITY
// ===========================

let currentImageIndex = 1;
const totalImages = 6;

/**
 * Open lightbox with smooth fade-in animation
 * @param {number} imageNum - Image number to display
 */
function openLightbox(imageNum) {
    currentImageIndex = imageNum;
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.classList.add('open');
    updateImage();
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close lightbox with fade-out animation
 * @param {Event} event - Click event (optional)
 */
function closeLightbox(event) {
    // Don't close if clicking on content (except close button)
    if (event && event.target.id !== 'lightbox' && !event.target.classList.contains('lightbox-close')) {
        return;
    }
    
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.classList.remove('open');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

/**
 * Navigate to next image
 */
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1;
    }
    updateImage();
}

/**
 * Navigate to previous image
 */
function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = totalImages;
    }
    updateImage();
}

/**
 * Update displayed image number
 */
function updateImage() {
    const imageDisplay = document.getElementById('currentImage');
    if (imageDisplay) {
        // Add fade effect
        imageDisplay.style.opacity = '0';
        setTimeout(() => {
            imageDisplay.textContent = `Арт ${currentImageIndex}`;
            imageDisplay.style.opacity = '1';
        }, 150);
    }
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('open')) return;

    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            previousImage();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextImage();
            break;
        case 'Escape':
            e.preventDefault();
            closeLightbox();
            break;
    }
});

// ===========================
// CLICK OUTSIDE LIGHTBOX
// ===========================

document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    // Close only if clicking directly on lightbox background
    if (e.target === lightbox) {
        closeLightbox(e);
    }
});

// ===========================
// TOUCH SUPPORT FOR MOBILE
// ===========================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('open')) return;
    
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    // Swipe right - previous image
    if (touchEndX < touchStartX - 50) {
        nextImage();
    }
    // Swipe left - next image
    if (touchEndX > touchStartX + 50) {
        previousImage();
    }
}
