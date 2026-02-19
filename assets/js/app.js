const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const val = document.getElementById('dato').value;
    const total = (val * 0.5).toFixed(2);
    document.getElementById('res').innerText = `Has ahorrado ${total} kg de CO2`;
});