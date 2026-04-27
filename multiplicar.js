function generarTablas() {
    let contenedor = document.getElementById("contenedor-tabla");
    let titulo = document.getElementById("titulo-tabla");
    let factor = document.getElementById("numero-tabla").value;

    if (factor === "") {
        alert("Por favor, ingresa un número.");
        return;
    }

    titulo.innerText = `TABLA DEL ${factor}`;

    let contenido = "";

    // El bucle avanza de 2 en 2 (i = 1, 3, 5, 7, 9)
    for (let i = 1; i <= 9; i += 2) {
        let impar = i;
        let par = i + 1;

        contenido += `
            <div class="result-row">
                <div class="capsule">${factor} x ${impar} = ${factor * impar}</div>
                <div class="capsule">${factor} x ${par} = ${factor * par}</div>
            </div>`;
    }

    contenedor.innerHTML = contenido;
}