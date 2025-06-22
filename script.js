function updateClock() {
    const now = new Date(); // Hora Actual
    const clock = document.getElementById('clock');
    const date = document.getElementById('date');

    const hora = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    clock.textContent = `${hora}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month:'long', day: 'numeric' }
    date.textContent = now.toLocaleDateString('es-Es', options);
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById('theme-toggle').addEventListener('click', ()=>{
    document.body.classList.toggle('light-theme');
});