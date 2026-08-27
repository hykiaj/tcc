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

// =========================================================================
// Supabase Integration & Dual-Mode Configuration
// =========================================================================

// SUBSTITUTE these keys with your real Supabase Project credentials
const SUPABASE_URL = "https://wenmhmsfhzbidnxpkfry.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_D-yA1kzchqkEpf5WEuV_hA_5z1dLTZr";

let supabaseClient = null;
let isSupabaseConfigured = false;

// Check if CDN is loaded and credentials are set (not equal to placeholder values)
if (typeof window.supabase !== 'undefined' && 
    SUPABASE_URL && SUPABASE_URL.startsWith("https://") && 
    SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.includes("SUA_SUPABASE")) {
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        isSupabaseConfigured = true;
        console.log("Eco Kids: Conectado ao Supabase com sucesso! 🎉");
    } catch (error) {
        console.error("Eco Kids: Erro ao inicializar o Supabase:", error);
    }
} else {
    console.log("Eco Kids: Supabase não configurado ou rodando localmente sem CDN. Modo demonstração ativo (LocalStorage). ℹ️");
}

// Sign up user with metadata
async function signUp(email, password, childName, parentName) {
    if (isSupabaseConfigured && supabaseClient) {
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    child_name: childName,
                    parent_name: parentName,
                    avatar_id: null
                }
            }
        });
        if (error) throw error;
        return data;
    } else {
        // Mock fallback
        localStorage.setItem(STATE_KEYS.CHILD_NAME, childName);
        localStorage.setItem(STATE_KEYS.PARENT_NAME, parentName);
        localStorage.setItem(STATE_KEYS.EMAIL, email);
        localStorage.setItem(STATE_KEYS.IS_LOGGED_IN, "true");
        localStorage.removeItem(STATE_KEYS.AVATAR_ID); // Reset to choose avatar
        return {
            session: { access_token: "mock-token" },
            user: { email, user_metadata: { child_name: childName, parent_name: parentName, avatar_id: null } }
        };
    }
}

// Sign in user and retrieve metadata
async function signIn(email, password) {
    if (isSupabaseConfigured && supabaseClient) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) throw error;
        return data;
    } else {
        // Mock fallback
        const savedEmail = localStorage.getItem(STATE_KEYS.EMAIL);
        let childName = "Gabriel";
        let parentName = "Flávio";
        let avatarId = "4"; // Default
        
        if (savedEmail === email) {
            childName = localStorage.getItem(STATE_KEYS.CHILD_NAME) || childName;
            parentName = localStorage.getItem(STATE_KEYS.PARENT_NAME) || parentName;
            avatarId = localStorage.getItem(STATE_KEYS.AVATAR_ID) || avatarId;
        }

        return {
            session: { access_token: "mock-token" },
            user: {
                email: email,
                user_metadata: {
                    child_name: childName,
                    parent_name: parentName,
                    avatar_id: avatarId
                }
            }
        };
    }
}

// Sign out and clear local state
async function signOut() {
    if (isSupabaseConfigured && supabaseClient) {
        try {
            await supabaseClient.auth.signOut();
        } catch (e) {
            console.error("Erro no signOut do Supabase:", e);
        }
    }
    // Always clear localStorage for clean user experience
    localStorage.removeItem(STATE_KEYS.IS_LOGGED_IN);
    localStorage.removeItem(STATE_KEYS.CHILD_NAME);
    localStorage.removeItem(STATE_KEYS.PARENT_NAME);
    localStorage.removeItem(STATE_KEYS.EMAIL);
    localStorage.removeItem(STATE_KEYS.AVATAR_ID);
}

// Update child selected avatar
async function updateAvatar(avatarId) {
    if (isSupabaseConfigured && supabaseClient) {
        const { data, error } = await supabaseClient.auth.updateUser({
            data: { avatar_id: avatarId.toString() }
        });
        if (error) throw error;
        return data;
    } else {
        // Mock fallback
        localStorage.setItem(STATE_KEYS.AVATAR_ID, avatarId.toString());
        return { user: { user_metadata: { avatar_id: avatarId.toString() } } };
    }
}

// Reset password trigger
async function resetPassword(email) {
    if (isSupabaseConfigured && supabaseClient) {
        if (window.location.protocol === 'file:') {
            throw new Error("O redirecionamento do Supabase para recuperação de senha exige que o site seja executado via servidor web (http/https). O protocolo 'file://' não é suportado pelo Supabase para redirecionamentos.");
        }
        // Redirect back to the index/login page
        const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + window.location.pathname.replace('cadastro.html', 'index.html')
        });
        if (error) throw error;
        return data;
    } else {
        // Mock recovery code alert triggers from caller
        return { message: "Simulação de e-mail enviada." };
    }
}

// Background session verification
async function checkSession() {
    if (isSupabaseConfigured && supabaseClient) {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            console.warn("Eco Kids: Sessão inativa ou expirada. Efetuando logout...");
            await signOut();
            window.location.href = 'index.html';
        }
    }
}

// Listen to auth status changes (useful for email confirmation and password reset redirects)
if (isSupabaseConfigured && supabaseClient) {
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
            console.log("Eco Kids: Usuário autenticado via Supabase Auth! Syncing local state...");
            const metadata = session.user.user_metadata || {};
            const childName = metadata.child_name || "Criança";
            const parentName = metadata.parent_name || "Responsável";
            const avatarId = metadata.avatar_id || null;

            localStorage.setItem(STATE_KEYS.CHILD_NAME, childName);
            localStorage.setItem(STATE_KEYS.PARENT_NAME, parentName);
            localStorage.setItem(STATE_KEYS.EMAIL, session.user.email);
            localStorage.setItem(STATE_KEYS.IS_LOGGED_IN, "true");

            const isLandingPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
            if (isLandingPage) {
                if (avatarId) {
                    localStorage.setItem(STATE_KEYS.AVATAR_ID, avatarId.toString());
                    window.location.href = 'dashboard.html';
                } else {
                    localStorage.removeItem(STATE_KEYS.AVATAR_ID);
                    window.location.href = 'avatar.html';
                }
            }
        }
    });
}
