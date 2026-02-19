document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const inputDato = document.getElementById('dato');
    const resultado = document.getElementById('res');

    btn.addEventListener('click', () => {
        const val = parseFloat(inputDato.value);

        if (isNaN(val) || val <= 0) {
            alert("⚠️ Por favor, introduce un número de envases válido.");
            resultado.innerText = "";
            return;
        }

        // Simulación: cada envase ahorra 0.5kg de CO2
        const total = (val * 0.5).toFixed(2);
        
        resultado.style.opacity = 0;
        setTimeout(() => {
            resultado.innerHTML = `🌍 ¡Genial! Has ahorrado <span style="color:#2e7d32">${total} kg</span> de CO2`;
            resultado.style.opacity = 1;
        }, 200);
    });
});