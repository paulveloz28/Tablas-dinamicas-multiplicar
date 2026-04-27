function generarTablas() {
    let contenedor = document.getElementById("contenedor-tabla");
    
    let factor = document.getElementById("numero-tabla").value;

    if (factor === "") {
        alert("Por favor, ingresa un número primero.");
        return;
    }

    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        contenido = contenido + `
            <tr>
                <td>${factor} x ${i}</td>
                <td class="glow-cell">${factor * i}</td>
            </tr>`;
    }

    contenedor.innerHTML = contenido;
}