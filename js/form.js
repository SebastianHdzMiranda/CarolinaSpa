const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const fecha = document.querySelector('#fecha').value;
    const hora = document.querySelector('#hora').value;

    const datos = {
        nombre,
        email,
        fecha,
        hora
    };

    enviarDatos(datos)
        .then( data => console.log(data));

    formulario.reset();
}

function enviarDatos({nombre,email,fecha,hora}) {

    return fetch('https://sheetdb.io/api/v1/zhc69tu88sjp5', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'Nombre': nombre,
                    'Email': email,
                    'Fecha': fecha,
                    'Hora': hora
                }
            ]
        })
    })
        .then( respuesta => respuesta.json());
}