// Category Vocabulary Data with beautiful SVG icons
const VOCABULARY = {
    alimentacao: {
        title: "Alimentação",
        colorClass: "board-alimentacao",
        items: [
            {
                label: "Quero comer",
                phrase: "Quero comer",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#F39C38" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" stroke-width="4"/>
                    <path d="M 35,30 L 35,60" />
                    <path d="M 30,30 L 40,30 M 30,40 L 40,40" />
                    <path d="M 65,30 L 65,70 M 60,30 L 70,30 M 65,30 Q 60,45 65,55" />
                </svg>`
            },
            {
                label: "Maçã",
                phrase: "Maçã",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#E1251B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 50,30 Q 30,25 30,55 Q 30,80 50,80 Q 70,80 70,55 Q 70,25 50,30" fill="#FFE5E5" />
                    <path d="M 50,30 Q 55,15 65,12" stroke="#3ED160" />
                    <path d="M 60,15 Q 68,18 70,25 Q 58,25 60,15" fill="#3ED160" stroke="#3ED160" stroke-width="2" />
                </svg>`
            },
            {
                label: "Pão",
                phrase: "Pão",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#D1863E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 20,50 Q 15,30 50,30 Q 85,30 80,50 Q 85,70 50,70 Q 15,70 20,50 Z" fill="#FFF2E0" />
                    <path d="M 35,38 Q 42,50 40,62" />
                    <path d="M 50,35 Q 57,50 55,65" />
                    <path d="M 65,38 Q 72,50 70,62" />
                </svg>`
            },
            {
                label: "Biscoito",
                phrase: "Biscoito",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#B87A3E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="38" fill="#FFEEDB" />
                    <circle cx="38" cy="38" r="4" fill="#B87A3E" />
                    <circle cx="62" cy="38" r="4" fill="#B87A3E" />
                    <circle cx="34" cy="60" r="4" fill="#B87A3E" />
                    <circle cx="50" cy="50" r="4" fill="#B87A3E" />
                    <circle cx="66" cy="60" r="4" fill="#B87A3E" />
                    <path d="M 80,35 A 8,8 0 0,1 68,48" stroke-dasharray="2,2"/>
                </svg>`
            },
            {
                label: "Banana",
                phrase: "Banana",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#EAA812" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 25,25 Q 65,30 75,70 Q 55,75 25,25" fill="#FFFCE0" />
                    <path d="M 75,70 L 80,78" stroke="#583121" stroke-width="7" />
                    <path d="M 25,25 L 20,18" stroke="#583121" stroke-width="7" />
                    <path d="M 40,38 Q 62,45 68,62" stroke="#EAA812" stroke-width="3" />
                </svg>`
            },
            {
                label: "Sopa",
                phrase: "Sopa",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#E1251B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 15,40 L 85,40 Q 80,75 50,75 Q 20,75 15,40 Z" fill="#FFE5E5" />
                    <path d="M 50,20 Q 55,10 50,5 Q 45,10 50,20 M 35,25 Q 40,15 35,10 Q 30,15 35,25 M 65,25 Q 70,15 65,10" stroke="#EC969C" />
                    <line x1="10" y1="40" x2="90" y2="40" />
                </svg>`
            }
        ]
    },
    bebidas: {
        title: "Bebidas",
        colorClass: "board-bebidas",
        items: [
            {
                label: "Quero beber",
                phrase: "Quero beber",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#0084E3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 25,20 L 35,80 Q 35,85 50,85 Q 65,85 65,80 L 75,20 Z" />
                    <path d="M 30,50 L 70,50" stroke-dasharray="4 2" />
                    <circle cx="50" cy="35" r="4" fill="#0084E3" />
                    <circle cx="42" cy="45" r="3" fill="#0084E3" />
                    <circle cx="58" cy="42" r="3" fill="#0084E3" />
                </svg>`
            },
            {
                label: "Água",
                phrase: "Água",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 50,15 C 50,15 80,45 80,65 C 80,80 66,90 50,90 C 34,90 20,80 20,65 C 20,45 50,15 50,15 Z" fill="#E3F2FD" />
                    <path d="M 40,55 Q 45,45 50,45" stroke="#93C5FD" stroke-width="3" />
                </svg>`
            },
            {
                label: "Suco",
                phrase: "Suco",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#3ED160" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="25" y="30" width="50" height="55" rx="5" fill="#E8F9EC" />
                    <path d="M 60,30 L 65,12 L 50,8" />
                    <circle cx="50" cy="58" r="14" fill="#3ED160" stroke="#3ED160" />
                    <path d="M 45,58 Q 50,53 55,58" stroke="#ffffff" />
                </svg>`
            },
            {
                label: "Leite",
                phrase: "Leite",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#0084E3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 30,25 L 70,25 L 65,85 L 35,85 Z" fill="#ffffff" />
                    <rect x="33" y="45" width="34" height="20" rx="3" fill="#E3F2FD" stroke="#0084E3" />
                    <path d="M 40,55 Q 50,45 60,55" fill="none" />
                </svg>`
            },
            {
                label: "Achocolatado",
                phrase: "Achocolatado",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#583121" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 25,35 L 75,35 L 70,80 Q 70,85 50,85 Q 30,85 30,80 Z" fill="#FFF2E0" />
                    <path d="M 72,45 Q 85,45 85,55 Q 85,65 68,65" />
                    <path d="M 30,55 L 70,55" fill="none" stroke="#583121" stroke-width="8" />
                </svg>`
            },
            {
                label: "Água de Coco",
                phrase: "Água de Coco",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#3ED160" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="55" r="32" fill="#E8F9EC" />
                    <path d="M 42,28 Q 50,20 58,28" stroke-dasharray="3,3" />
                    <path d="M 52,40 L 68,15 L 75,18" stroke="#333" />
                    <circle cx="40" cy="48" r="4" fill="#3ED160" />
                    <circle cx="60" cy="48" r="4" fill="#3ED160" />
                </svg>`
            }
        ]
    },
    diversao: {
        title: "Diversão",
        colorClass: "board-diversao",
        items: [
            {
                label: "Quero brincar",
                phrase: "Quero brincar",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#F5D03B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="45" r="35" fill="#FFFDE0" />
                    <circle cx="38" cy="38" r="4" fill="#F5D03B" />
                    <circle cx="62" cy="38" r="4" fill="#F5D03B" />
                    <path d="M 35,55 Q 50,75 65,55" fill="none" stroke-width="4" />
                    <path d="M 18,22 L 32,28" />
                    <path d="M 82,22 L 68,28" />
                </svg>`
            },
            {
                label: "Parque",
                phrase: "Parque",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#3ED160" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M 20,80 L 30,30 L 70,55 L 80,80" />
                    <path d="M 30,30 L 80,30" stroke="#E1251B" />
                    <path d="M 50,30 L 50,80" stroke="#EAA812" />
                    <path d="M 10,80 L 90,80" stroke-width="6" />
                </svg>`
            },
            {
                label: "Desenhar",
                phrase: "Desenhar",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#0084E3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="20" y="20" width="60" height="60" rx="5" fill="#ffffff" />
                    <path d="M 30,70 L 60,35 Q 65,30 70,35 Q 75,40 70,45 L 45,70 Z" fill="#E3F2FD" />
                    <path d="M 30,70 L 32,60 L 40,68 Z" fill="#0084E3" />
                </svg>`
            },
            {
                label: "Brinquedos",
                phrase: "Brinquedos",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#E1251B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="18" y="50" width="30" height="30" fill="#FFE5E5" />
                    <rect x="52" y="50" width="30" height="30" fill="#E3F2FD" stroke="#0084E3" />
                    <polygon points="50,15 32,45 68,45" fill="#FFFCE0" stroke="#EAA812" />
                </svg>`
            },
            {
                label: "Televisão",
                phrase: "Ver televisão",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="15" y="25" width="70" height="45" rx="5" fill="#f3f4f6" />
                    <line x1="35" y1="70" x2="65" y2="70" />
                    <line x1="50" y1="70" x2="50" y2="80" />
                    <path d="M 38,15 L 50,25 L 62,15" />
                    <circle cx="50" cy="47" r="10" fill="#0084E3" stroke="none" />
                </svg>`
            },
            {
                label: "Música",
                phrase: "Ouvir música",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#9061F9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="35" cy="65" r="12" fill="#F3D8FF" />
                    <circle cx="70" cy="55" r="12" fill="#F3D8FF" />
                    <path d="M 47,65 L 47,25 L 82,15 L 82,55" fill="none" stroke-width="6" />
                    <path d="M 47,35 L 82,25" stroke-width="6" />
                </svg>`
            }
        ]
    },
    emocoes: {
        title: "Emoções",
        colorClass: "board-emocoes",
        items: [
            {
                label: "Estou Feliz",
                phrase: "Estou feliz",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#3ED160" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#E8F9EC" />
                    <circle cx="38" cy="42" r="4" fill="#3ED160" />
                    <circle cx="62" cy="42" r="4" fill="#3ED160" />
                    <path d="M 32,58 Q 50,78 68,58" fill="none" stroke-width="5" />
                </svg>`
            },
            {
                label: "Estou Triste",
                phrase: "Estou triste",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#0084E3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#E3F2FD" />
                    <circle cx="38" cy="42" r="4" fill="#0084E3" />
                    <circle cx="62" cy="42" r="4" fill="#0084E3" />
                    <path d="M 32,68 Q 50,48 68,68" fill="none" stroke-width="5" />
                    <path d="M 36,52 L 36,60" stroke-width="3" />
                </svg>`
            },
            {
                label: "Com Raiva",
                phrase: "Estou com raiva",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#E1251B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#FFE5E5" />
                    <circle cx="38" cy="45" r="4" fill="#E1251B" />
                    <circle cx="62" cy="45" r="4" fill="#E1251B" />
                    <path d="M 30,35 L 42,40" stroke-width="4" />
                    <path d="M 70,35 L 58,40" stroke-width="4" />
                    <path d="M 34,65 Q 50,55 66,65" fill="none" stroke-width="5" />
                </svg>`
            },
            {
                label: "Assustado",
                phrase: "Estou assustado",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#9061F9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#EDE7F6" />
                    <circle cx="36" cy="40" r="5" fill="#9061F9" />
                    <circle cx="64" cy="40" r="5" fill="#9061F9" />
                    <circle cx="50" cy="62" r="10" fill="#9061F9" />
                    <path d="M 32,32 L 42,35" stroke-width="3" />
                    <path d="M 68,32 L 58,35" stroke-width="3" />
                </svg>`
            },
            {
                label: "Com Dor",
                phrase: "Estou com dor",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#EAA812" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#FFFCE0" />
                    <path d="M 34,45 L 42,41 M 34,41 L 42,45" />
                    <path d="M 58,45 L 66,41 M 58,41 L 66,45" />
                    <path d="M 35,62 L 65,62" />
                    <path d="M 50,15 L 50,22 Q 55,25 45,28" stroke="#E1251B" />
                </svg>`
            },
            {
                label: "Com Sono",
                phrase: "Estou com sono",
                svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#F39C38" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="50" cy="50" r="40" fill="#FFF2E0" />
                    <path d="M 30,45 Q 38,48 42,45" />
                    <path d="M 58,45 Q 62,48 70,45" />
                    <circle cx="50" cy="60" r="6" fill="#F39C38" />
                    <path d="M 70,20 L 78,20 L 70,28 L 78,28" stroke-width="3" />
                    <path d="M 78,12 L 84,12 L 78,18 L 84,18" stroke-width="2" />
                </svg>`
            }
        ]
    }
};

// Main Text-to-Speech playback function
function speakWord(text, element) {
    if (!('speechSynthesis' in window)) {
        console.warn("Speech Synthesis is not supported in this browser.");
        return;
    }

    // Add visual feedback
    if (element) {
        element.classList.add('speaking');
    }

    // Cancel current speech if any is speaking
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    utterance.pitch = 1.2; // Slightly higher pitch for child-friendly tone

    utterance.onend = () => {
        if (element) {
            element.classList.remove('speaking');
        }
    };

    utterance.onerror = () => {
        if (element) {
            element.classList.remove('speaking');
        }
    };

    window.speechSynthesis.speak(utterance);
}

// Function to read query params and render the active board
function initBoard() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat');

    if (!category || !VOCABULARY[category]) {
        window.location.href = 'dashboard.html';
        return;
    }

    const data = VOCABULARY[category];
    
    // Set Page Title and Page Style
    document.title = `Eco Kids - ${data.title}`;
    const container = document.getElementById('boardContainer');
    if (!container) return;

    container.className = `board-container ${data.colorClass}`;

    // Update Title text
    const titleEl = document.getElementById('boardTitle');
    if (titleEl) titleEl.textContent = data.title;

    // Render Tiles
    const gridEl = document.getElementById('boardGrid');
    if (gridEl) {
        gridEl.innerHTML = '';
        data.items.forEach(item => {
            const tile = document.createElement('div');
            tile.className = 'board-item';
            tile.innerHTML = `
                <div class="board-item-icon">${item.svg}</div>
                <div class="board-item-label">${item.label}</div>
            `;
            tile.addEventListener('click', () => {
                speakWord(item.phrase, tile);
            });
            gridEl.appendChild(tile);
        });
    }
}
