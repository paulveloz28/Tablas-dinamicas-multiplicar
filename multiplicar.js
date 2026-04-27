function generarTablas(){
    let contenedor=document.getElementById("contenedor-tabla");

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        
        contenido = contenido + `
            <tr>
                <td>5 x ${i}</td>
                <td class="glow-cell">${5 * i}</td>
            </tr>`;    
    }
    contenedor.innerHTML=contenido;
}