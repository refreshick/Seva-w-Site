const LOCAL_DATA = {
    header: `
<header class="header">
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.html" class="logo">Seva'w'Coffee</a>
            
            <!-- Desktop Menu -->
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link">Главная</a></li>
                <li><a href="games.html" class="nav-link">Игры</a></li>
                <li><a href="books.html" class="nav-link">Книги</a></li>
                <li><a href="music.html" class="nav-link">Музыка</a></li>
                <li><a href="art.html" class="nav-link">Арты</a></li>
            </ul>
            
            <!-- Mobile Menu Button -->
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</header>
    `,
    footer: `
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <h3>Seva'w'Coffee</h3>
                <p>Творческий хаб. Игры, книги, музыка, арты.</p>
            </div>
            
            <div class="footer-section">
                <h4>Разделы</h4>
                <ul>
                    <li><a href="games.html">Игры</a></li>
                    <li><a href="books.html">Книги</a></li>
                    <li><a href="music.html">Музыка</a></li>
                    <li><a href="art.html">Арты</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Контакты</h4>
                <p>Email: <a href="mailto:contact@sevaw.com">vowlger@gmail.com</a></p>
                <div class="social-links">
                    <a href="#">Telegram</a>
                    <a href="#">Discord</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 Seva'w'Coffee. Все права защищены.</p>
        </div>
    </div>
</footer>
    `,
    games: [
        {
            "id": 1,
            "slug": "game-1",
            "title": "DanGolitsino",
            "shortDescription": "Экспериментальный проект на Godot",
            "description": "Полное описание первой игры",
            "status": "development",
            "statusLabel": "В разработке",
            "image": "images/games/game1.jpg",
            "technologies": ["Godot", "GDScript"],
            "itchLink": ""
        },
    ],
    books: [
        {
            "id": 1,
            "slug": "book-1",
            "title": "942",
            "genre": "Стимпанк Фэнтези",
            "shortDescription": "Мир страха и надежды в 942 году",
            "description": "",
            "status": "writing",
            "statusLabel": "В работе",
            "image": "images/books/book1.png",
            "excerpt": "Это начало книги... Текст первого отрывка из произведения.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "authorTodayLink": "https://author.today/work/417897"
        },
        {
            "id": 2,
            "slug": "book-2",
            "title": "Во тьме летают бабочки",
            "genre": "Научная фантастика",
            "shortDescription": "История о магии в России нулевых",
            "description": "",
            "status": "writing",
            "statusLabel": "В работе",
            "image": "images/books/book2.png",
            "excerpt": "Это начало книги... Текст первого отрывка из произведения.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "authorTodayLink": "https://author.today/work/469872"
        }
    ],
    music: [
        {
            "id": 1,
            "slug": "cozy-home",
            "title": "Cozy Home",
            "year": 2025,
            "type": "album",
            "description": "Атмосферный альбом с уютными и теплыми звуками. Идеален для расслабления и спокойного времяпровождения.",
            "image": "images/music/cozy-home.png",
            "tracks": [ 
            ],
            "platforms": [
                { "name": "Spotify", "url": "https://open.spotify.com/album/6KLBSFgDHUQf1dKM5Ejq8l?si=YvdrlTosS-mqODKEQtsjSQ" },
                { "name": "YouTube", "url": "https://www.youtube.com/watch?v=2b-8Ct-iXzc" },
                { "name": "Яндекс Музыка", "url": "https://music.yandex.ru/album/35895850" }
            ]
        },
        {
            "id": 2,
            "slug": "city-of-broken-dreams",
            "title": "City of Broken Dreams",
            "year": 2025,
            "type": "album",
            "description": "Мрачный и интенсивный альбом, исследующий темы потери и надежды в современном городе.",
            "image": "images/music/city-of-broken-dreams.png",
            "tracks": [
            ],
            "platforms": [
                { "name": "Spotify", "url": "https://open.spotify.com/album/6yBeArhY5Qy3ARL3a4JGPO?si=8t_vlQk5TAKT6c8ZtjnYkg" },
                { "name": "YouTube", "url": "https://www.youtube.com/watch?v=MYqz4rRwCZM" },
                { "name": "Яндекс Музыка", "url": "https://music.yandex.ru/album/37016086" }
            ]
        },
        {
            "id": 3,
            "slug": "ignite",
            "title": "Ignite",
            "year": 2025,
            "type": "album",
            "description": "Энергичный и вдохновляющий альбом с мощными синтезаторами и динамичными ритмами.",
            "image": "images/music/ignite.png",
            "tracks": [
            ],
            "platforms": [
                { "name": "Spotify", "url": "https://open.spotify.com/album/4cZlbuGOKLg1ZKDGWQeNOa?si=fX36_IjtS6ydKtehWc4cZQ" },
                { "name": "Яндекс Музыка", "url": "https://music.yandex.ru/album/39847705" }
            ]
        },
        {
            "id": 4,
            "slug": "i-dont-know-how-to-name-this",
            "title": "I will never name this",
            "year": 2025,
            "type": "single",
            "description": "Я все еще не знаю, как это назвать",
            "image": "images/music/single-1.png",
            "tracks": [
                "I will never name this"
            ],
            "platforms": [
                { "name": "Spotify", "url": "https://open.spotify.com/album/1Ed6kXAywXBnut1f95vS5b?si=PHaYDlj_SFGR8RP5_izZAg" },
                { "name": "YouTube", "url": "https://www.youtube.com/watch?v=h2X6BY8KdSw" },
                { "name": "Яндекс Музыка", "url": "https://music.yandex.ru/album/36179016" }
            ]
        },
        {
            "id": 5,
            "slug": "sunsettape",
            "title": "Sunset Tape",
            "year": 2025,
            "type": "single",
            "description": "Первый и, пожалуй, лучший мой сингл",
            "image": "images/music/single-2.png",
            "tracks": [
                "Sunset Tape"
            ],
            "platforms": [
                { "name": "Spotify", "url": "https://open.spotify.com/album/6McPRZofOazXNN2xRB63qk?si=K4Gc3ddsSvOb3M6gUMNkIg" },
                { "name": "YouTube", "url": "https://www.youtube.com/watch?v=-kHDFddXGW0" },
                { "name": "Яндекс Музыка", "url": "https://music.yandex.ru/album/36156758" }
            ]
        }
    ]
};

// ===========================
// LOAD COMPONENTS
// ===========================

async function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // when opened via file://, use embedded data to avoid network
    if (window.location.protocol === 'file:') {
        if (containerId === 'header-placeholder') {
            container.innerHTML = LOCAL_DATA.header;
        } else if (containerId === 'footer-placeholder') {
            container.innerHTML = LOCAL_DATA.footer;
        }
        // re‑initialize menu after header injection
        if (containerId === 'header-placeholder') {
            initMobileMenu();
            setActiveNav();
        }
        return;
    }

    // resolve path relative to current document
    const url = new URL(filePath, window.location.href).href;
    console.log('loadComponent:', containerId, url);

    // try using fetch first (works on http/https)
    try {
        const response = await fetch(url);
        if (response.ok) {
            const html = await response.text();
            container.innerHTML = html;
        } else {
            throw new Error(`Fetch failed with status ${response.status}`);
        }
    } catch (fetchError) {
        // fallback to synchronous XHR which is allowed over file:// in most browsers
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send();
            if (xhr.status === 0 || xhr.status === 200) {
                container.innerHTML = xhr.responseText;
            } else {
                throw new Error(`XHR failed with status ${xhr.status}`);
            }
        } catch (xhrError) {
            console.error(`Error loading component via fetch or XHR:`, fetchError, xhrError, url);
        }
    }

    // re‑initialize mobile menu if header was injected
    if (containerId === 'header-placeholder') {
        initMobileMenu();
        setActiveNav();
    }
}

// Load header and footer on all pages
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', './components/header.html');
    loadComponent('footer-placeholder', './components/footer.html');
    
    // Initialize other features
    initAnimations();
    setupSmoothScroll();
});

// ===========================
// MOBILE MENU
// ===========================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===========================
// SET ACTIVE NAVIGATION
// ===========================

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===========================
// SMOOTH SCROLL
// ===========================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
}

// ===========================
// LOAD PROJECTS FROM JSON
// ===========================

async function loadProjects(containerId, jsonFile, cardTemplate) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // if running from file://, use embedded data
    const key = jsonFile.replace('.json','');
    if (window.location.protocol === 'file:') {
        const projects = LOCAL_DATA[key] || [];
        if (projects.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); padding: 40px; text-align: center;">Нет данных</p>';
            return;
        }
        container.innerHTML = '';
        projects.forEach((project, index) => {
            const card = cardTemplate(project, index);
            container.innerHTML += card;
        });
        initAnimations();
        return;
    }

    const filePath = new URL('./data/' + jsonFile, window.location.href).href;
    console.log('loadProjects path:', containerId, filePath);
    let projects = [];

    // first attempt fetch
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            projects = await response.json();
            // Save loaded projects into LOCAL_DATA so other pages (e.g. detail pages)
            // can use the data when running on a hosted environment.
            try { LOCAL_DATA[key] = projects; } catch (e) { /* ignore */ }
        } else {
            throw new Error(`Fetch status ${response.status}`);
        }
    } catch (fetchError) {
        // fallback to XHR for file:// protocol
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, false);
            xhr.send();
            if (xhr.status === 0 || xhr.status === 200) {
                projects = JSON.parse(xhr.responseText);
                try { LOCAL_DATA[key] = projects; } catch (e) { /* ignore */ }
            } else {
                throw new Error(`XHR status ${xhr.status}`);
            }
        } catch (xhrError) {
            console.error(`Error loading projects via fetch or XHR:`, fetchError, xhrError, filePath);
        }
    }

    if (!projects || projects.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); padding: 40px; text-align: center;">Ошибка при загрузке данных</p>';
        return;
    }

    container.innerHTML = '';
    projects.forEach((project, index) => {
        const card = cardTemplate(project, index);
        container.innerHTML += card;
    });

    // Initialize animations for newly created elements
    initAnimations();
}
            container.innerHTML = '<p style="color: var(--text-secondary); padding: 40px; text-align: center;">Ошибка при загрузке данных</p>';
        
    


// ===========================
// GAME CARD TEMPLATE
// ===========================

function gameCardTemplate(game, index) {
    return `
        <div class="project-card games-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image">
                <img src="${game.image}" alt="${game.title}" loading="lazy" width="280" height="180" decoding="async">
            </div>
            <div class="card-body">
                <h3>${game.title}</h3>
                <p>${game.shortDescription}</p>
                <div class="card-footer">
                    <span class="status ${game.status === 'development' ? 'status-dev' : 'status-release'}">
                        ${game.statusLabel}
                    </span>
                    <a href="${game.itchLink}" target="_blank" rel="noopener noreferrer" class="card-link">→</a>
                </div>
            </div>
        </div>
    `;
}

// ===========================
// BOOK CARD TEMPLATE
// ===========================

function bookCardTemplate(book, index) {
    return `
        <div class="project-card books-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image tall">
                <img src="${book.image}" alt="${book.title}" loading="lazy" width="280" height="240" decoding="async">
            </div>
            <div class="card-body">
                <h3>${book.title}</h3>
                <p>${book.genre}</p>
                <div class="card-footer">
                    <span class="status ${book.status === 'completed' ? 'status-completed' : 'status-writing'}">
                        ${book.statusLabel}
                    </span>
                    <a href="${book.authorTodayLink}" target="_blank" rel="noopener noreferrer" class="card-link">→</a>
                </div>
            </div>
        </div>
    `;
}

// ===========================
// MUSIC CARD TEMPLATE
// ===========================

function musicCardTemplate(album, index) {
    return `
        <div class="project-card music-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image square">
                <img src="${album.image}" alt="${album.title}" loading="lazy" width="200" height="200" decoding="async">
            </div>
            <div class="card-body">
                <h3>${album.title}</h3>
                <p>${album.year}</p>
                <div class="card-footer">
                    <span class="status">Альбом</span>
                    <a href="music-detail.html?album=${album.slug}" class="card-link">→</a>
                </div>
            </div>
        </div>
    `;
}

// ===========================
// LOAD RELEASE DETAIL PAGE
// ===========================

async function loadReleaseDetail() {
    // Get album slug from URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const albumSlug = urlParams.get('album');
    
    if (!albumSlug) {
        document.querySelector('.release-detail').innerHTML = '<div class="container"><p style="color: var(--text-secondary); padding: 40px; text-align: center;">Альбом не найден</p></div>';
        return;
    }
    
    // Find release in LOCAL_DATA
    let release = (LOCAL_DATA.music || []).find(r => r.slug === albumSlug);
    // If not present in LOCAL_DATA (hosted environment), try to fetch data/music.json as a fallback
    if (!release) {
        try {
            const filePath = new URL('./data/music.json', window.location.href).href;
            const resp = await fetch(filePath);
            if (resp.ok) {
                const musicData = await resp.json();
                try { LOCAL_DATA.music = musicData; } catch (e) { /* ignore */ }
                release = musicData.find(r => r.slug === albumSlug);
            }
        } catch (e) {
            console.error('Error fetching music data fallback:', e);
        }
    }

    if (!release) {
        document.querySelector('.release-detail').innerHTML = '<div class="container"><p style="color: var(--text-secondary); padding: 40px; text-align: center;">Альбом не найден</p></div>';
        return;
    }
    
    // Fill release info
    document.getElementById('releaseTitle').textContent = release.title;
    document.getElementById('releaseImage').src = release.image;
    document.getElementById('releaseImage').alt = release.title;
    document.getElementById('releaseYear').textContent = release.year;
    document.getElementById('releaseDescription').textContent = release.description;
    document.getElementById('releaseType').textContent = release.type === 'album' ? 'Альбом' : 'Сингл';
    
    // Fill platforms
    const platformsList = document.getElementById('platformsList');
    platformsList.innerHTML = '';
    release.platforms.forEach(platform => {
        const link = document.createElement('a');
        link.href = platform.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'platform-link';
        link.textContent = platform.name;
        platformsList.appendChild(link);
    });
    
    // Fill tracklist
    const tracksList = document.getElementById('tracksList');
    tracksList.innerHTML = '';
    release.tracks.forEach((track, index) => {
        const trackEl = document.createElement('div');
        trackEl.className = 'track-item fade-in';
        trackEl.style.animationDelay = (index * 0.05) + 's';
        trackEl.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <h4>${track}</h4>
            </div>
        `;
        tracksList.appendChild(trackEl);
    });
    
    // Update page title
    document.title = release.title + ' | SevawCoffee';
    
    // Initialize animations
    initAnimations();
    setupSmoothScroll();
}

// ===========================
// EXPORT FOR EXTERNAL USE
// ===========================

window.loadProjects = loadProjects;
window.gameCardTemplate = gameCardTemplate;
window.bookCardTemplate = bookCardTemplate;
window.musicCardTemplate = musicCardTemplate;
window.loadReleaseDetail = loadReleaseDetail;
