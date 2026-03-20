const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
let currentImageIndex = 0;

function getCurrentGalleryItem() {
    return galleryItems[currentImageIndex] || null;
}

function syncGalleryText() {
    const imageDisplay = document.getElementById("currentImage");
    const currentItem = getCurrentGalleryItem();
    if (!imageDisplay || !currentItem) {
        return;
    }

    const label = currentItem.dataset.title || currentItem.textContent.trim() || `Art ${currentImageIndex + 1}`;
    imageDisplay.style.opacity = "0";

    window.setTimeout(() => {
        imageDisplay.textContent = label;
        imageDisplay.style.opacity = "1";
    }, 150);
}

function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || !galleryItems.length) {
        return;
    }

    const normalizedIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
    currentImageIndex = normalizedIndex;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    syncGalleryText();
}

function closeLightbox(event) {
    if (event && event.target.id !== "lightbox" && !event.target.classList.contains("lightbox-close")) {
        return;
    }

    const lightbox = document.getElementById("lightbox");
    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("open");
    document.body.style.overflow = "";
}

function nextImage() {
    if (!galleryItems.length) {
        return;
    }

    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    syncGalleryText();
}

function previousImage() {
    if (!galleryItems.length) {
        return;
    }

    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    syncGalleryText();
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
    item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(index);
        }
    });
});

document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || !lightbox.classList.contains("open")) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            event.preventDefault();
            previousImage();
            break;
        case "ArrowRight":
            event.preventDefault();
            nextImage();
            break;
        case "Escape":
            event.preventDefault();
            closeLightbox();
            break;
        default:
            break;
    }
});

let touchStartX = 0;

document.addEventListener(
    "touchstart",
    (event) => {
        const lightbox = document.getElementById("lightbox");
        if (!lightbox || !lightbox.classList.contains("open")) {
            return;
        }

        touchStartX = event.changedTouches[0].screenX;
    },
    false
);

document.addEventListener(
    "touchend",
    (event) => {
        const lightbox = document.getElementById("lightbox");
        if (!lightbox || !lightbox.classList.contains("open")) {
            return;
        }

        const touchEndX = event.changedTouches[0].screenX;
        const delta = touchEndX - touchStartX;

        if (delta <= -50) {
            nextImage();
        } else if (delta >= 50) {
            previousImage();
        }
    },
    false
);

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.previousImage = previousImage;
