// Shared Auth and LocalStorage State Management
const STATE_KEYS = {
    CHILD_NAME: 'ecokids_child_name',
    PARENT_NAME: 'ecokids_parent_name',
    EMAIL: 'ecokids_email',
    AVATAR_ID: 'ecokids_avatar_id',
    IS_LOGGED_IN: 'ecokids_logged_in'
};

// 8 Beautiful child avatars as PNG files
const AVATARS = [
    {
        id: 1,
        name: "Menina Cachos",
        bgColor: "#F3D8FF",
        path: "avatar/1.png"
    },
    {
        id: 2,
        name: "Menina Loira",
        bgColor: "#FFF4D4",
        path: "avatar/2.png"
    },
    {
        id: 3,
        name: "Menina Castanha",
        bgColor: "#FFE5E5",
        path: "avatar/3.png"
    },
    {
        id: 4,
        name: "Menino Loiro",
        bgColor: "#E3F2FD",
        path: "avatar/4.png"
    },
    {
        id: 5,
        name: "Menino Ruivo",
        bgColor: "#EDE7F6",
        path: "avatar/5.png"
    },
    {
        id: 6,
        name: "Menino Afro",
        bgColor: "#FFF3E0",
        path: "avatar/6.png"
    },
    {
        id: 7,
        name: "Menina Alegre",
        bgColor: "#E0F2FE",
        path: "avatar/7.png"
    },
    {
        id: 8,
        name: "Menino Alegre",
        bgColor: "#DCFCE7",
        path: "avatar/8.png"
    }
];

// Puzzle Piece Decorator SVG definitions
const DECORATIONS = {
    puzzleLeft: `<svg viewBox="0 0 220 180" width="100%" height="100%">
        <!-- Yellow piece (left bottom corner) -->
        <path d="M 0,180 L 0,80 C 15,80 25,90 25,100 C 25,110 15,120 0,120 L 0,120 C 15,120 30,135 30,150 C 30,165 15,180 0,180" fill="#F5D03B" />
        <path d="M 0,180 L 100,180 C 100,165 90,155 80,155 C 70,155 60,165 60,180 L 60,180 C 60,165 45,150 30,150 C 15,150 0,165 0,180" fill="#F5D03B" />
        <!-- Green piece interlocking -->
        <path d="M 0,180 C 15,165 30,150 30,150 C 45,150 60,165 60,180 L 140,180 C 140,165 130,155 120,155 C 110,155 100,165 100,180 L 100,180 L 100,130 C 115,130 125,120 125,110 C 125,100 115,90 100,90 L 100,90 C 115,90 130,75 130,60 C 130,45 115,30 100,30 L 60,30 C 60,45 70,55 80,55 C 90,55 100,45 100,30" fill="#3ED160" opacity="0.9" />
    </svg>`,
    puzzleRight: `<svg viewBox="0 0 220 180" width="100%" height="100%">
        <!-- Blue piece (bottom right corner) -->
        <path d="M 220,180 L 220,80 C 205,80 195,90 195,100 C 195,110 205,120 220,120 C 205,120 190,135 190,150 C 190,165 205,180 220,180" fill="#0084E3" />
        <path d="M 220,180 L 120,180 C 120,165 130,155 140,155 C 150,155 160,165 160,180 L 160,180 C 160,165 175,150 190,150 C 205,150 220,165 220,180" fill="#0084E3" />
        <!-- Red piece interlocking -->
        <path d="M 120,180 C 120,165 130,155 140,155 C 150,155 160,165 160,180 L 80,180 C 80,165 90,155 100,155 C 110,155 120,165 120,180 Z" fill="#E1251B" />
        <path d="M 80,180 L 80,120 C 95,120 105,110 105,100 C 105,90 95,80 80,80 L 80,80 L 140,80 C 140,95 150,105 160,105 C 170,105 180,95 180,80 L 180,80" fill="#E1251B" />
        <!-- Yellow piece in right side -->
        <circle cx="160" cy="120" r="18" fill="#F5D03B" />
        <path d="M 160,120 L 220,120 L 220,180" fill="#F5D03B" opacity="0.3"/>
    </svg>`
};

// Insert puzzle piece decorations dynamically
function injectPuzzleDecorations() {
    const leftDiv = document.createElement('div');
    leftDiv.className = 'puzzle-bg-left';
    leftDiv.innerHTML = DECORATIONS.puzzleLeft;

    const rightDiv = document.createElement('div');
    rightDiv.className = 'puzzle-bg-right';
    rightDiv.innerHTML = DECORATIONS.puzzleRight;

    document.body.appendChild(leftDiv);
    document.body.appendChild(rightDiv);
}

// Redirect if not logged in (used on secure pages)
function checkAuth() {
    const isLoggedIn = localStorage.getItem(STATE_KEYS.IS_LOGGED_IN);
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}

// Global hook to inject background decorations on content load (if matching conditions)
document.addEventListener('DOMContentLoaded', () => {
    // Only inject on outer pages (index, cadastro, recuperar, avatar)
    const isDashboardOrPrancha = window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('prancha.html');
    if (!isDashboardOrPrancha) {
        injectPuzzleDecorations();
    }
});
