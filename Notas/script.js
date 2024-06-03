document.getElementById('boton').addEventListener('click', function() {
    var notaInput = document.getElementById('notaInput');
    var notaTexto = notaInput.value.trim();

    if (notaTexto !== "") {
        var listaNotas = document.getElementById('listaNotas');
        var nuevaNota = document.createElement('li');
        nuevaNota.textContent = notaTexto;

        // Crear botón de eliminar
        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-danger btn-sm ml-2';
        botonEliminar.onclick = function() {
            listaNotas.removeChild(nuevaNota);
        };

        // Agregar botón de eliminar al elemento li
        nuevaNota.appendChild(botonEliminar);

        // Agregar el nuevo elemento li a la lista
        listaNotas.appendChild(nuevaNota);

        notaInput.value = "";
    }
});
