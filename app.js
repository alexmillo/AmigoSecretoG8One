// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde guardaremos los nombres de los amigos
const listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de entrada de texto
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y final
    
    // Validar que el usuario haya escrito algo
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    // Expresión regular para permitir solo letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombre)) {
        alert("Solo se permiten letras y espacios. No se permiten números ni caracteres especiales.");
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    actualizarLista(); // Actualizar la lista en pantalla
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

// Función para mostrar la lista de amigos en la pantalla
function actualizarLista() {
    const ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    // Recorrer la lista y agregar cada nombre como un elemento de lista
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ulLista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Verificar que haya al menos un nombre en la lista
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    
    // Generar un índice aleatorio dentro del tamaño de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado en pantalla
    mostrarResultado(nombreSorteado);
}

// Función para mostrar el nombre sorteado en la pantalla
function mostrarResultado(nombre) {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = ""; // Limpiar el resultado anterior
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${nombre}`;
    resultadoUl.appendChild(li);
}
