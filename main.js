//mudar tema do site
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');

// Ao carregar a página, verifica se o usuário já escolheu um tema antes
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    icon.textContent = '☀'; // Muda o ícone para Lua
}

themeToggle.addEventListener('click', () => {
    // Alterna a classe no body
    body.classList.toggle('light-theme');
    
    // Lógica para trocar ícone e salvar preferência
    if (body.classList.contains('light-theme')) {
        icon.textContent = '☀';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = '☀';
        localStorage.setItem('theme', 'dark');
    }
});

//aviso de torneio ativo
const tournamentDates = { 
    "Counter-Strike 2": { name: "ESL PRO LEAGUE", month: 2 },
    "Valorant": { name: "Masters Santiago", month: 2 },
    "LoL": { name: "CBLOL", month: 2 },
};

function checkEvents() {
    // Pegamos o mês atual (0-11)
    const currentMonth = new Date().getMonth();
    const details = document.querySelectorAll('details');

    details.forEach(detail => {
        // .trim() remove espaços em branco acidentais nas pontas
        const gameTitle = detail.querySelector('h2').textContent.replace(' ✪ ', '').trim();
        const event = tournamentDates[gameTitle];

        // Verificamos se o evento existe e se o mês bate
        if (event && event.month === currentMonth) {
            // Evita duplicar o badge se a função rodar duas vezes
            if (detail.querySelector('.event-badge')) return;

            const badge = document.createElement('span');
            badge.className = 'event-badge';
            badge.innerText = ` ✦ Mês de ${event.name}!`;
            badge.style.color = "#d1b32b";
            badge.style.fontWeight = "bold";
            detail.style.position = "relative";
            badge.style.position = "absolute";
            badge.style.top = "50px";
            badge.style.bottom = "center";
            
            detail.querySelector('summary').appendChild(badge);
        }
    });
}

// Garante que o código rode após o HTML estar pronto
window.onload = checkEvents;