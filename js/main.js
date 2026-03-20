const FALLBACK_COMPONENTS = {
    header: `
<header class="header">
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.html" class="logo">Seva'w'Coffee</a>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link">Главная</a></li>
                <li><a href="games.html" class="nav-link">Игры</a></li>
                <li><a href="books.html" class="nav-link">Книги</a></li>
                <li><a href="music.html" class="nav-link">Музыка</a></li>
                <li><a href="art.html" class="nav-link">Арты</a></li>
            </ul>
            <button class="hamburger" type="button" aria-label="Открыть меню" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
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
                <p>Email: <a href="mailto:vowlger@gmail.com">vowlger@gmail.com</a></p>
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
};

const FALLBACK_DATA = {
    games: [
        {
            id: 1,
            slug: "game-1",
            title: "DanGolitsino",
            shortDescription: "Экспериментальный проект на Godot",
            description: "Полное описание первой игры",
            status: "development",
            statusLabel: "В разработке",
            image: "images/games/game1.jpg",
            technologies: ["Godot", "GDScript"],
            itchLink: "",
        },
    ],
    books: [
        {
            id: 1,
            slug: "book-1",
            title: "942",
            year: 2025,
            genre: "Стимпанк Фэнтези",
            shortDescription: "Мир страха и надежды в 942 году",
            description: "",
            status: "writing",
            statusLabel: "В работе",
            image: "images/books/book1.png",
            excerpt: "Это начало книги...",
            authorTodayLink: "https://author.today/work/417897",
        },
        {
            id: 2,
            slug: "book-2",
            title: "Во тьме летают бабочки",
            year: 2026,
            genre: "Научная фантастика",
            shortDescription: "История о магии в России нулевых",
            description: "",
            status: "writing",
            statusLabel: "В работе",
            image: "images/books/book2.png",
            excerpt: "Это начало книги...",
            authorTodayLink: "https://author.today/work/469872",
        },
    ],
    music: [
        {
            id: 1,
            slug: "cozy-home",
            title: "Cozy Home",
            year: "03-2025",
            type: "album",
            description: "Атмосферный альбом с уютным и теплым звучанием.",
            image: "images/music/cozy-home.png",
            tracks: [],
            platforms: [
                { name: "Spotify", url: "https://open.spotify.com/album/6KLBSFgDHUQf1dKM5Ejq8l?si=YvdrlTosS-mqODKEQtsjSQ" },
                { name: "YouTube", url: "https://www.youtube.com/watch?v=2b-8Ct-iXzc" },
                { name: "Яндекс Музыка", url: "https://music.yandex.ru/album/35895850" },
            ],
        },
        {
            id: 2,
            slug: "city-of-broken-dreams",
            title: "City of Broken Dreams",
            year: 2025,
            type: "album",
            description: "Мрачный и интенсивный альбом о потере и надежде.",
            image: "images/music/city-of-broken-dreams.png",
            tracks: [],
            platforms: [
                { name: "Spotify", url: "https://open.spotify.com/album/6yBeArhY5Qy3ARL3a4JGPO?si=8t_vlQk5TAKT6c8ZtjnYkg" },
                { name: "YouTube", url: "https://www.youtube.com/watch?v=MYqz4rRwCZM" },
                { name: "Яндекс Музыка", url: "https://music.yandex.ru/album/37016086" },
            ],
        },
        {
            id: 3,
            slug: "ignite",
            title: "Ignite",
            year: 2025,
            type: "album",
            description: "Энергичный и вдохновляющий альбом.",
            image: "images/music/ignite.png",
            tracks: [],
            platforms: [
                { name: "Spotify", url: "https://open.spotify.com/album/4cZlbuGOKLg1ZKDGWQeNOa?si=fX36_IjtS6ydKtehWc4cZQ" },
                { name: "Яндекс Музыка", url: "https://music.yandex.ru/album/39847705" },
            ],
        },
        {
            id: 4,
            slug: "i-dont-know-how-to-name-this",
            title: "I will never name this",
            year: 2025,
            type: "single",
            description: "Я все еще не знаю, как это назвать.",
            image: "images/music/single-1.png",
            tracks: ["I will never name this"],
            platforms: [
                { name: "Spotify", url: "https://open.spotify.com/album/1Ed6kXAywXBnut1f95vS5b?si=PHaYDlj_SFGR8RP5_izZAg" },
                { name: "YouTube", url: "https://www.youtube.com/watch?v=h2X6BY8KdSw" },
                { name: "Яндекс Музыка", url: "https://music.yandex.ru/album/36179016" },
            ],
        },
        {
            id: 5,
            slug: "sunsettape",
            title: "Sunset Tape",
            year: 2025,
            type: "single",
            description: "Первый и, пожалуй, лучший мой сингл.",
            image: "images/music/single-2.png",
            tracks: ["Sunset Tape"],
            platforms: [
                { name: "Spotify", url: "https://open.spotify.com/album/6McPRZofOazXNN2xRB63qk?si=K4Gc3ddsSvOb3M6gUMNkIg" },
                { name: "YouTube", url: "https://www.youtube.com/watch?v=-kHDFddXGW0" },
                { name: "Яндекс Музыка", url: "https://music.yandex.ru/album/36156758" },
            ],
        },
    ],
};

const DATA_CACHE = new Map();
const PAGE_TITLES = {
    games: "Игры",
    books: "Книги",
    music: "Музыка",
};

const IMAGE_PLACEHOLDER =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
            <rect width="600" height="400" fill="#262626"/>
            <rect x="24" y="24" width="552" height="352" rx="18" fill="none" stroke="#B23EFF" stroke-opacity="0.35" stroke-width="4"/>
            <text x="50%" y="48%" text-anchor="middle" fill="#EDEDED" font-size="32" font-family="Arial, sans-serif">Seva'w'Coffee</text>
            <text x="50%" y="60%" text-anchor="middle" fill="#AAAAAA" font-size="20" font-family="Arial, sans-serif">Изображение скоро появится</text>
        </svg>
    `);

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function normalizePath(path) {
    return String(path || "").replace(/^\.?\//, "");
}

function resolveImage(path) {
    return normalizePath(path) || IMAGE_PLACEHOLDER;
}

function isValidExternalLink(url) {
    return /^https?:\/\//i.test(String(url || ""));
}

function getRelativePath(filePath) {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    const currentDepth = currentFile.includes(".html") ? 0 : 0;
    const prefix = "../".repeat(currentDepth);
    return `${prefix}${filePath}`.replace(/\\/g, "/");
}

async function fetchText(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.text();
}

async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
}

async function loadComponent(containerId, filePath, fallbackMarkup = "") {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const url = new URL(filePath, window.location.href).href;

    try {
        container.innerHTML = await fetchText(url);
    } catch (error) {
        container.innerHTML = fallbackMarkup;
        console.warn(`Component fallback used for ${containerId}:`, error);
    }

    if (containerId === "header-placeholder") {
        initMobileMenu();
        setActiveNav();
    }
}

function getFallbackData(key) {
    const value = FALLBACK_DATA[key];
    return Array.isArray(value) ? [...value] : [];
}

async function loadCollection(key) {
    if (DATA_CACHE.has(key)) {
        return DATA_CACHE.get(key);
    }

    const filePath = new URL(`./data/${key}.json`, window.location.href).href;
    let data = [];

    try {
        data = await fetchJson(filePath);
    } catch (error) {
        data = getFallbackData(key);
        console.warn(`Data fallback used for ${key}:`, error);
    }

    DATA_CACHE.set(key, Array.isArray(data) ? data : []);
    return DATA_CACHE.get(key);
}

function renderEmptyState(container, message) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
}

function getStatusClass(status) {
    switch (status) {
        case "development":
            return "status-dev";
        case "release":
        case "completed":
            return "status-completed";
        case "writing":
            return "status-writing";
        default:
            return "";
    }
}

function getReleaseTypeLabel(type) {
    return type === "single" ? "Сингл" : "Альбом";
}

function createImageMarkup(src, alt, width, height) {
    return `
        <img
            src="${escapeHtml(resolveImage(src))}"
            alt="${escapeHtml(alt)}"
            loading="lazy"
            width="${width}"
            height="${height}"
            decoding="async"
            onerror="this.onerror=null;this.src='${IMAGE_PLACEHOLDER}'"
        >
    `;
}

function createActionMarkup(url, label = "&rarr;") {
    if (!isValidExternalLink(url)) {
        return `<span class="card-link disabled" aria-disabled="true">${label}</span>`;
    }

    return `
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="card-link">
            ${label}
        </a>
    `;
}

function gameCardTemplate(game, index = 0) {
    const statusClass = getStatusClass(game.status);
    const imageMarkup = createImageMarkup(game.image, game.title, 280, 180);

    return `
        <article class="project-card games-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image">
                ${imageMarkup}
            </div>
            <div class="card-body">
                <h3>${escapeHtml(game.title)}</h3>
                <p>${escapeHtml(game.shortDescription || game.description || "Описание скоро появится.")}</p>
                <div class="card-footer">
                    <span class="status ${statusClass}">${escapeHtml(game.statusLabel || "Без статуса")}</span>
                    ${createActionMarkup(game.itchLink)}
                </div>
            </div>
        </article>
    `;
}

function bookCardTemplate(book, index = 0) {
    const statusClass = getStatusClass(book.status);
    const imageMarkup = createImageMarkup(book.image, book.title, 280, 240);

    return `
        <article class="project-card books-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image tall">
                ${imageMarkup}
            </div>
            <div class="card-body">
                <h3>${escapeHtml(book.title)}</h3>
                <p>${escapeHtml(book.genre || book.shortDescription || "Жанр уточняется")}</p>
                <div class="card-footer">
                    <span class="status ${statusClass}">${escapeHtml(book.statusLabel || "Без статуса")}</span>
                    ${createActionMarkup(book.authorTodayLink)}
                </div>
            </div>
        </article>
    `;
}

function musicCardTemplate(release, index = 0) {
    const imageMarkup = createImageMarkup(release.image, release.title, 200, 200);
    const detailHref = `music-detail.html?album=${encodeURIComponent(release.slug)}`;

    return `
        <article class="project-card music-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image square">
                ${imageMarkup}
            </div>
            <div class="card-body">
                <h3>${escapeHtml(release.title)}</h3>
                <p>${escapeHtml(String(release.year || ""))}</p>
                <div class="card-footer">
                    <span class="status">${escapeHtml(getReleaseTypeLabel(release.type))}</span>
                    <a href="${detailHref}" class="card-link" aria-label="Открыть релиз ${escapeHtml(release.title)}">&rarr;</a>
                </div>
            </div>
        </article>
    `;
}

async function loadProjects(containerId, jsonFile, cardTemplate) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const key = jsonFile.replace(".json", "");
    const projects = await loadCollection(key);

    if (!projects.length) {
        renderEmptyState(container, `${PAGE_TITLES[key] || "Материалы"} скоро появятся.`);
        return;
    }

    container.innerHTML = projects.map((project, index) => cardTemplate(project, index)).join("");
    initAnimations();
}

function getRecentItems(collections, limit = 3) {
    return collections
        .flatMap(({ type, items }) =>
            items.map((item) => ({
                ...item,
                collectionType: type,
                recentOrder: Number(item.year) || 0,
            }))
        )
        .sort((a, b) => b.recentOrder - a.recentOrder || (Number(b.id) || 0) - (Number(a.id) || 0))
        .slice(0, limit);
}

function recentProjectTemplate(item, index) {
    const typeLabel = PAGE_TITLES[item.collectionType] || "Проект";
    const subtitle =
        item.collectionType === "music"
            ? `${getReleaseTypeLabel(item.type)} • ${item.year || "Без даты"}`
            : item.collectionType === "books"
                ? `${item.year || "Без даты"} • ${item.genre || item.statusLabel || "Книга"}`
                : item.shortDescription || item.genre || item.statusLabel || "Новый проект";

    let actionHref = "#";
    let actionExternal = false;

    if (item.collectionType === "music") {
        actionHref = `music-detail.html?album=${encodeURIComponent(item.slug)}`;
    } else if (item.collectionType === "books" && isValidExternalLink(item.authorTodayLink)) {
        actionHref = item.authorTodayLink;
        actionExternal = true;
    } else if (item.collectionType === "games" && isValidExternalLink(item.itchLink)) {
        actionHref = item.itchLink;
        actionExternal = true;
    }

    const actionMarkup = actionExternal
        ? `<a href="${escapeHtml(actionHref)}" target="_blank" rel="noopener noreferrer" class="card-link">&rarr;</a>`
        : `<a href="${escapeHtml(actionHref)}" class="card-link">&rarr;</a>`;

    return `
        <article class="project-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image square">
                ${createImageMarkup(item.image, item.title, 220, 220)}
            </div>
            <div class="card-body">
                <p class="card-eyebrow">${escapeHtml(typeLabel)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(subtitle)}</p>
                <div class="card-footer">
                    <span class="status">${escapeHtml(typeLabel)}</span>
                    ${actionHref === "#" ? `<span class="card-link disabled" aria-disabled="true">&rarr;</span>` : actionMarkup}
                </div>
            </div>
        </article>
    `;
}

async function renderRecentProjects() {
    const container = document.getElementById("recent-projects-container");
    if (!container) {
        return;
    }

    const [games, books, music] = await Promise.all([
        loadCollection("games"),
        loadCollection("books"),
        loadCollection("music"),
    ]);

    const recentItems = getRecentItems(
        [
            { type: "games", items: games },
            { type: "books", items: books },
            { type: "music", items: music },
        ],
        3
    );

    if (!recentItems.length) {
        renderEmptyState(container, "Последние проекты скоро появятся.");
        return;
    }

    container.classList.remove("projects-placeholder");
    container.classList.add("projects-grid");
    container.innerHTML = recentItems.map((item, index) => recentProjectTemplate(item, index)).join("");
    initAnimations();
}

function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu || hamburger.dataset.ready === "true") {
        return;
    }

    const closeMenu = () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".navbar")) {
            closeMenu();
        }
    });

    hamburger.dataset.ready = "true";
}

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((link) => {
        const isActive = link.getAttribute("href") === currentPage;
        link.classList.toggle("active", isActive);
        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        if (anchor.dataset.scrollReady === "true") {
            return;
        }

        anchor.addEventListener("click", (event) => {
            const selector = anchor.getAttribute("href");
            if (!selector || selector === "#") {
                return;
            }

            const target = document.querySelector(selector);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });

        anchor.dataset.scrollReady = "true";
    });
}

function initAnimations() {
    const elements = document.querySelectorAll(".fade-in, .slide-up, .track-item");
    if (!elements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    elements.forEach((element) => {
        if (!element.classList.contains("visible")) {
            observer.observe(element);
        }
    });
}

function fillPlatforms(platforms = []) {
    const container = document.getElementById("platformsList");
    if (!container) {
        return;
    }

    if (!platforms.length) {
        container.innerHTML = '<p class="empty-state compact">Ссылки на площадки скоро появятся.</p>';
        return;
    }

    container.innerHTML = platforms
        .filter((platform) => isValidExternalLink(platform.url))
        .map(
            (platform) => `
                <a href="${escapeHtml(platform.url)}" target="_blank" rel="noopener noreferrer" class="platform-link">
                    ${escapeHtml(platform.name)}
                </a>
            `
        )
        .join("");
}

function fillTracks(tracks = []) {
    const container = document.getElementById("tracksList");
    if (!container) {
        return;
    }

    if (!tracks.length) {
        container.innerHTML = '<p class="empty-state compact">Треклист пока не опубликован.</p>';
        return;
    }

    container.innerHTML = tracks
        .map(
            (track, index) => `
                <div class="track-item fade-in" style="animation-delay: ${index * 0.05}s">
                    <div class="track-number">${index + 1}</div>
                    <div class="track-info">
                        <h4>${escapeHtml(track)}</h4>
                    </div>
                </div>
            `
        )
        .join("");
}

async function loadReleaseDetail() {
    const detailSection = document.querySelector(".release-detail");
    if (!detailSection) {
        return;
    }

    const slug = new URLSearchParams(window.location.search).get("album");
    if (!slug) {
        detailSection.innerHTML = '<div class="container"><p class="empty-state">Релиз не найден.</p></div>';
        return;
    }

    const releases = await loadCollection("music");
    const release = releases.find((item) => item.slug === slug);

    if (!release) {
        detailSection.innerHTML = '<div class="container"><p class="empty-state">Релиз не найден.</p></div>';
        return;
    }

    const image = document.getElementById("releaseImage");
    const title = document.getElementById("releaseTitle");
    const year = document.getElementById("releaseYear");
    const description = document.getElementById("releaseDescription");
    const type = document.getElementById("releaseType");

    if (image) {
        image.src = resolveImage(release.image);
        image.alt = release.title;
        image.onerror = () => {
            image.onerror = null;
            image.src = IMAGE_PLACEHOLDER;
        };
    }

    if (title) {
        title.textContent = release.title;
    }

    if (year) {
        year.textContent = release.year ? String(release.year) : "Дата релиза уточняется";
    }

    if (description) {
        description.textContent = release.description || "Описание релиза скоро появится.";
    }

    if (type) {
        type.textContent = getReleaseTypeLabel(release.type);
    }

    fillPlatforms(release.platforms);
    fillTracks(release.tracks);
    document.title = `${release.title} | Seva'w'Coffee`;
    initAnimations();
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent("header-placeholder", "./components/header.html", FALLBACK_COMPONENTS.header),
        loadComponent("footer-placeholder", "./components/footer.html", FALLBACK_COMPONENTS.footer),
    ]);

    setupSmoothScroll();
    initAnimations();
    renderRecentProjects();
});

window.loadProjects = loadProjects;
window.gameCardTemplate = gameCardTemplate;
window.bookCardTemplate = bookCardTemplate;
window.musicCardTemplate = musicCardTemplate;
window.loadReleaseDetail = loadReleaseDetail;
window.siteData = {
    loadCollection,
};
