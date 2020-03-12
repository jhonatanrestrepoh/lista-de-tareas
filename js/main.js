(function() {

    //variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    //funciones
    var eliminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    var eventoEliminarTarea = function() {
        for (let i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", eliminarTarea);
        }
    };

    var comprobarTareaInputNotNull = function(tarea) {
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }
    };

    var añadirTareaLista = function(lista, nuevaTarea, enlace, contenido) {
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);
    };

    var agregarTarea = function() {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        if (comprobarTareaInputNotNull(tarea) == false) return false;
        añadirTareaLista(lista, nuevaTarea, enlace, contenido);
        tareaInput.value = "";
        eventoEliminarTarea();
    };

    var comprobarTareaInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };


    //eventos
    btnNuevaTarea.addEventListener("click", agregarTarea);
    tareaInput.addEventListener("click", comprobarTareaInput);
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }

}());