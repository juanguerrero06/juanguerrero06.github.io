const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const filterButtons = document.querySelectorAll(".filter-btn");
const townCards = document.querySelectorAll(".town-card");
const animatedItems = document.querySelectorAll(".fade-up");
const languageToggle = document.getElementById("languageToggle");
const languageCode = document.getElementById("languageCode");
const languageFlag = document.getElementById("languageFlag");

if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        townCards.forEach((card) => {
            const shouldShow = selectedFilter === "all" || card.dataset.category === selectedFilter;
            card.style.display = shouldShow ? "" : "none";
        });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedItems.forEach((item) => observer.observe(item));

const translations = {
    es: {
        pageTitle: "Postales de Antioquia",
        metaDescription: "Revista digital turística sobre los pueblos más fascinantes de Antioquia.",
        nav: ["Inicio", "Explorar", "Rutas", "Galería", "Historias", "Nosotros"],
        languageLabel: "Cambiar idioma a inglés",
        menuLabel: "Abrir menú",
        accessibilityToggleLabel: "Abrir opciones de accesibilidad",
        heroEyebrow: "DESCUBRE ANTIOQUIA",
        heroTitle: "Antioquia en cada postal",
        heroText: "Una experiencia digital para recorrer los pueblos antioqueños a través de historias, cultura y paisajes.",
        heroButton: "Explorar pueblos →",
        exploreEyebrow: "Explorar",
        exploreTitle: "Pueblos que enamoran",
        exploreSubtitle: "Lugares donde la historia, la arquitectura y el paisaje crean experiencias difíciles de olvidar.",
        filters: ["Todos", "Cálido", "Templado", "Frío"],
        townRegions: [
            "Oriente Antioqueño",
            "Suroeste Antioqueño",
            "Occidente Antioqueño",
            "Suroeste Antioqueño",
            "Norte Antioqueño",
            "Oriente Antioqueño",
            "Oriente Antioqueño",
            "Oriente Antioqueño",
            "Oriente Antioqueño",
            "Oriente Antioqueño"
        ],
        townDescriptions: [
            "Color, agua y uno de los paisajes más icónicos de Colombia.",
            "Cafetales, montañas y arquitectura colonial perfectamente conservada.",
            "Calles empedradas, calor colonial y siglos de historia.",
            "Balcones coloridos, café de altura y tradición antioqueña.",
            "Un secreto entre montañas, niebla y calles que guardan calma.",
            "Música, tradición y arquitectura republicana en una postal viva.",
            "Memoria, montaña y una fuerza comunitaria que se siente en sus calles.",
            "Flores, aire fresco y paisaje verde en el corazón del altiplano.",
            "Ríos, cascadas y aventura entre montañas tropicales.",
            "Agua, piedra y horizonte abierto para mirar Antioquia desde otra altura."
        ],
        knowMore: "Conocer más",
        routesEyebrow: "Experiencias",
        routesTitle: "Elige tu ruta",
        routesSubtitle: "Cada camino revela una versión diferente de Antioquia.",
        routeTitles: ["Ruta Cafetera", "Ruta Patrimonial", "Ruta Natural", "Ruta Gastronómica"],
        routeDescriptions: [
            "Cafetales, montañas y pueblos con aroma a café recién tostado.",
            "Arquitectura colonial, plazas históricas y tradición.",
            "Embalses, montañas, cascadas y senderos inolvidables.",
            "Sabores tradicionales que cuentan historias de región."
        ],
        galleryEyebrow: "Fotografía",
        galleryTitle: "Antioquia en imágenes",
        gallerySubtitle: "Fragmentos de paisaje, cultura y memoria capturados a lo largo del territorio antioqueño.",
        storiesEyebrow: "Editorial",
        storiesTitle: "Historias desde los caminos",
        storyCategories: ["Naturaleza", "Gastronomía", "Patrimonio"],
        storyTitles: ["El amanecer en el Peñol", "Los sabores que definen a Jardín", "Arquitectura que cuenta siglos"],
        storyDescriptions: [
            "Cuando la neblina comienza a retirarse y el embalse refleja los primeros tonos dorados del día, Guatapé muestra una de sus versiones más memorables.",
            "Café especial, tradición campesina y recetas transmitidas durante generaciones.",
            "Cada balcón y cada calle empedrada conserva una parte de la historia antioqueña."
        ],
        readMore: "Leer más →",
        aboutEyebrow: "QUIÉNES SOMOS",
        aboutTitle: "Una mirada joven sobre Antioquia",
        aboutHeadings: ["Nuestro objetivo", "Concepto creativo", "Proceso de diseño"],
        aboutParagraphs: [
            "Postales de Antioquia nace como un proyecto académico inspirado en los paisajes, pueblos y tradiciones que hacen única a nuestra región. Más que una guía turística, buscamos construir una experiencia visual y narrativa que invite a descubrir Antioquia desde una mirada cercana, auténtica y contemporánea.",
            "Cada pueblo fue tratado como una postal viva: una combinación de fotografía, historia, cultura y experiencias que permiten al visitante imaginarse allí incluso antes de emprender el viaje."
        ],
        timeline: [
            "Investigación de pueblos y rutas.",
            "Curaduría fotográfica y narrativa.",
            "Diseño editorial y experiencia web.",
            "Desarrollo y presentación final."
        ],
        footerTagline: "Una revista digital inspirada en los pueblos, paisajes y tradiciones que hacen única a Antioquia.",
        footerExplore: "Explorar",
        footerTowns: "Pueblos",
        footerProject: "Proyecto",
        footerProjectText: "Proyecto académico de diseño editorial y web.",
        footerCredit: "© 2025 Postales de Antioquia — Proyecto académico",
        accessibilityTitle: "Accesibilidad",
        accessibilityOptions: ["Texto grande", "Alto contraste", "Reducir movimiento", "Subrayar enlaces"],
        accessibilityReset: "Restablecer"
    },
    en: {
        pageTitle: "Postcards from Antioquia",
        metaDescription: "A digital travel magazine about Antioquia's most fascinating towns.",
        nav: ["Home", "Explore", "Routes", "Gallery", "Stories", "About"],
        languageLabel: "Switch language to Spanish",
        menuLabel: "Open menu",
        accessibilityToggleLabel: "Open accessibility options",
        heroEyebrow: "DISCOVER ANTIOQUIA",
        heroTitle: "Antioquia in every postcard",
        heroText: "A digital experience to travel through Antioquia's towns through stories, culture and landscapes.",
        heroButton: "Explore towns →",
        exploreEyebrow: "Explore",
        exploreTitle: "Towns that win you over",
        exploreSubtitle: "Places where history, architecture and landscape create experiences that are hard to forget.",
        filters: ["All", "Warm", "Mild", "Cold"],
        townRegions: [
            "Eastern Antioquia",
            "Southwestern Antioquia",
            "Western Antioquia",
            "Southwestern Antioquia",
            "Northern Antioquia",
            "Eastern Antioquia",
            "Eastern Antioquia",
            "Eastern Antioquia",
            "Eastern Antioquia",
            "Eastern Antioquia"
        ],
        townDescriptions: [
            "Color, water and one of Colombia's most iconic landscapes.",
            "Coffee fields, mountains and beautifully preserved colonial architecture.",
            "Cobblestone streets, colonial warmth and centuries of history.",
            "Colorful balconies, high-altitude coffee and Antioquian tradition.",
            "A secret among mountains, mist and streets that hold calm.",
            "Music, tradition and republican architecture in a living postcard.",
            "Memory, mountains and a community strength felt in its streets.",
            "Flowers, cool air and green scenery in the heart of the high plateau.",
            "Rivers, waterfalls and adventure among tropical mountains.",
            "Water, stone and open horizons to see Antioquia from another height."
        ],
        knowMore: "Learn more",
        routesEyebrow: "Experiences",
        routesTitle: "Choose your route",
        routesSubtitle: "Every road reveals a different version of Antioquia.",
        routeTitles: ["Coffee Route", "Heritage Route", "Nature Route", "Food Route"],
        routeDescriptions: [
            "Coffee fields, mountains and towns scented with freshly roasted coffee.",
            "Colonial architecture, historic plazas and tradition.",
            "Reservoirs, mountains, waterfalls and unforgettable trails.",
            "Traditional flavors that tell regional stories."
        ],
        galleryEyebrow: "Photography",
        galleryTitle: "Antioquia in images",
        gallerySubtitle: "Fragments of landscape, culture and memory captured across Antioquia's territory.",
        storiesEyebrow: "Editorial",
        storiesTitle: "Stories from the roads",
        storyCategories: ["Nature", "Food", "Heritage"],
        storyTitles: ["Sunrise in El Peñol", "The flavors that define Jardín", "Architecture that holds centuries"],
        storyDescriptions: [
            "When the mist begins to lift and the reservoir reflects the day's first golden tones, Guatapé reveals one of its most memorable versions.",
            "Specialty coffee, countryside tradition and recipes passed down through generations.",
            "Every balcony and cobblestone street keeps a piece of Antioquia's history."
        ],
        readMore: "Read more →",
        aboutEyebrow: "WHO WE ARE",
        aboutTitle: "A young perspective on Antioquia",
        aboutHeadings: ["Our goal", "Creative concept", "Design process"],
        aboutParagraphs: [
            "Postcards from Antioquia was born as an academic project inspired by the landscapes, towns and traditions that make our region unique. More than a travel guide, we aim to build a visual and narrative experience that invites people to discover Antioquia through a close, authentic and contemporary perspective.",
            "Each town was treated as a living postcard: a combination of photography, history, culture and experiences that allow visitors to imagine themselves there even before the journey begins."
        ],
        timeline: [
            "Research on towns and routes.",
            "Photographic and narrative curation.",
            "Editorial design and web experience.",
            "Development and final presentation."
        ],
        footerTagline: "A digital magazine inspired by the towns, landscapes and traditions that make Antioquia unique.",
        footerExplore: "Explore",
        footerTowns: "Towns",
        footerProject: "Project",
        footerProjectText: "Academic project for editorial and web design.",
        footerCredit: "© 2025 Postcards from Antioquia — Academic project",
        accessibilityTitle: "Accessibility",
        accessibilityOptions: ["Large text", "High contrast", "Reduce motion", "Underline links"],
        accessibilityReset: "Reset"
    }
};

const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
};

const setListText = (selector, values) => {
    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index]) {
            element.textContent = values[index];
        }
    });
};

const setTimelineText = (values) => {
    document.querySelectorAll(".timeline-item").forEach((item, index) => {
        if (values[index]) {
            item.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${values[index]}`;
        }
    });
};

const applyLanguage = (language) => {
    const text = translations[language];
    const isSpanish = language === "es";

    document.documentElement.lang = language;
    document.title = text.pageTitle;
    document.querySelector("meta[name='description']")?.setAttribute("content", text.metaDescription);

    setListText(".nav-links a", text.nav);
    setListText(".mobile-nav a", text.nav);
    setText(".nav-logo-text", text.pageTitle);

    setText(".hero .section-eyebrow", text.heroEyebrow);
    setText(".hero h1", text.heroTitle);
    setText(".hero p", text.heroText);
    setText(".hero .btn", text.heroButton);

    setText("#explorar > .container > .section-eyebrow", text.exploreEyebrow);
    setText("#explorar .section-title", text.exploreTitle);
    setText("#explorar .section-subtitle", text.exploreSubtitle);
    setListText(".filter-btn", text.filters);
    setListText(".town-card .town-region", text.townRegions);
    setListText(".town-card p", text.townDescriptions);
    setListText(".town-card .btn", Array.from({ length: document.querySelectorAll(".town-card .btn").length }, () => text.knowMore));

    setText("#rutas .section-eyebrow", text.routesEyebrow);
    setText("#rutas .section-title", text.routesTitle);
    setText("#rutas .section-subtitle", text.routesSubtitle);
    setListText(".route-card h3", text.routeTitles);
    setListText(".route-card p", text.routeDescriptions);

    setText("#galeria .section-eyebrow", text.galleryEyebrow);
    setText("#galeria .section-title", text.galleryTitle);
    setText("#galeria .section-subtitle", text.gallerySubtitle);

    setText("#historias .section-eyebrow", text.storiesEyebrow);
    setText("#historias .section-title", text.storiesTitle);
    setListText(".story-category", text.storyCategories);
    setListText(".story-content h3", text.storyTitles);
    setListText(".story-content p", text.storyDescriptions);
    setText(".story-feature .btn-ghost", text.readMore);

    setText("#nosotros .section-eyebrow", text.aboutEyebrow);
    setText("#nosotros .section-title", text.aboutTitle);
    setListText(".about-content h3", text.aboutHeadings);
    setListText(".about-content p", text.aboutParagraphs);
    setTimelineText(text.timeline);

    setText(".footer-logo", text.pageTitle);
    setText(".footer-grid > div:first-child p", text.footerTagline);
    setText(".footer-grid > div:nth-child(2) h4", text.footerExplore);
    setListText(".footer-grid > div:nth-child(2) a", text.nav.slice(0, 4));
    setText(".footer-grid > div:nth-child(3) h4", text.footerTowns);
    setText(".footer-grid > div:nth-child(4) h4", text.footerProject);
    setText(".footer-grid > div:nth-child(4) p", text.footerProjectText);
    setText(".footer-bottom p", text.footerCredit);

    setText(".accessibility-panel h2", text.accessibilityTitle);
    setListText(".accessibility-option", text.accessibilityOptions);
    setText(".accessibility-reset", text.accessibilityReset);

    if (languageCode && languageFlag && languageToggle) {
        languageCode.textContent = isSpanish ? "ES" : "EN";
        languageFlag.classList.toggle("flag-colombia", isSpanish);
        languageFlag.classList.toggle("flag-uk", !isSpanish);
        languageToggle.setAttribute("aria-label", text.languageLabel);
    }

    hamburger?.setAttribute("aria-label", text.menuLabel);
    document.getElementById("accessibilityToggle")?.setAttribute("aria-label", text.accessibilityToggleLabel);

    localStorage.setItem("siteLanguage", language);
};

let currentLanguage = localStorage.getItem("siteLanguage") || "es";
applyLanguage(currentLanguage);

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        applyLanguage(currentLanguage);
    });
}

const accessibilityToggle = document.getElementById("accessibilityToggle");
const accessibilityPanel = document.getElementById("accessibilityPanel");
const accessibilityOptions = document.querySelectorAll(".accessibility-option");
const accessibilityReset = document.getElementById("accessibilityReset");

const accessibilityClasses = {
    largeText: "a11y-large-text",
    highContrast: "a11y-high-contrast",
    reduceMotion: "a11y-reduce-motion",
    underlineLinks: "a11y-underline-links"
};

const savedAccessibility = JSON.parse(localStorage.getItem("accessibilityOptions") || "{}");

const updateAccessibilityButtons = () => {
    accessibilityOptions.forEach((button) => {
        const option = button.dataset.accessibility;
        const isActive = document.body.classList.contains(accessibilityClasses[option]);
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
};

Object.entries(accessibilityClasses).forEach(([option, className]) => {
    if (savedAccessibility[option]) {
        document.body.classList.add(className);
    }
});

updateAccessibilityButtons();

if (accessibilityToggle && accessibilityPanel) {
    accessibilityToggle.addEventListener("click", () => {
        const isOpen = accessibilityPanel.classList.toggle("open");
        accessibilityToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

accessibilityOptions.forEach((button) => {
    button.addEventListener("click", () => {
        const option = button.dataset.accessibility;
        const className = accessibilityClasses[option];

        document.body.classList.toggle(className);
        savedAccessibility[option] = document.body.classList.contains(className);
        localStorage.setItem("accessibilityOptions", JSON.stringify(savedAccessibility));

        updateAccessibilityButtons();
    });
});

if (accessibilityReset) {
    accessibilityReset.addEventListener("click", () => {
        Object.values(accessibilityClasses).forEach((className) => {
            document.body.classList.remove(className);
        });

        localStorage.removeItem("accessibilityOptions");
        updateAccessibilityButtons();
    });
}
