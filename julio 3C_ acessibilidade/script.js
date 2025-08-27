function toggleAccessibility() {
    document.body.classList.toggle('high-contrast');
}

// Função para aplicar o tema de alto contraste
document.body.classList.add('high-contrast');

// Adicionando estilo para o modo de alto contraste
const highContrastStyles = `
    body.high-contrast {
        background-color: #000;
        color: #fff;
    }
    body.high-contrast .game {
        background-color: #222;
        border-color: #fff;
    }
    body.high-contrast .game h2 {
        color: #ffeb3b;
    }
    body.high-contrast .game p {
        color: #fff;
    }
    body.high-contrast #accessibility-btn {
        background-color: #ffeb3b;
        color: #000;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = highContrastStyles;
document.head.appendChild(styleSheet);
