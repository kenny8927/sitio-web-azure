
const personajes = [
    {
        nombre: "Hello Kitty",
        emoji: "🎀",
        mensaje: "¡Eres dulce, amable y haces feliz a todo el mundo!"
    },
    {
        nombre: "Kuromi",
        emoji: "💜",
        mensaje: "¡Tienes una personalidad fuerte, divertida y rebelde!"
    },
    {
        nombre: "My Melody",
        emoji: "🌸",
        mensaje: "¡Tu corazón es bonito y siempre transmites ternura!"
    },
    {
        nombre: "Cinnamoroll",
        emoji: "☁️",
        mensaje: "¡Eres una personita soñadora, tranquila y adorable!"
    }
];

// Seleccionar personaje
function selectCharacter(nombre) {
    const mensaje = document.getElementById("selectionMessage");

    mensaje.innerHTML = `
        ¡Elegiste a ${nombre}! 💖
        <br>
        Excelente elección, tienes muy buen gusto ✨
    `;

    mensaje.style.transform = "scale(1.05)";

    setTimeout(() => {
        mensaje.style.transform = "scale(1)";
    }, 300);
}

// Quiz de personalidad
function discoverCharacter() {
    const resultado = document.getElementById("quizResult");

    const personaje = personajes[
        Math.floor(Math.random() * personajes.length)
    ];

    resultado.innerHTML = `
        ${personaje.emoji}
        <br>
        ¡Hoy eres ${personaje.nombre}!
        <br>
        <span style="font-size:16px">
            ${personaje.mensaje}
        </span>
    `;
}

// Mensajes aleatorios
const mensajes = [
    "Eres más bonita que mil estrellas ✨",
    "Nunca dejes de brillar, personita preciosa 💖",
    "Hoy es un buen día para ser feliz 🌸",
    "Tu existencia hace el mundo más bonito 🎀",
    "Mereces todo el amor del universo 💌",
    "Incluso Kuromi tiene su lado tierno 💜",
    "Cinnamoroll te manda un abrazo de nube ☁️"
];

function newMessage() {
    const elemento = document.getElementById("loveMessage");

    const mensaje = mensajes[
        Math.floor(Math.random() * mensajes.length)
    ];

    elemento.textContent = mensaje;
}

// Modo oscuro
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Modo kawaii";
    } else {
        themeButton.textContent = "🌙 Dark mode";
    }
});
