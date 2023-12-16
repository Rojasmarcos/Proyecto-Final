document.getElementById("fecha").valueAsDate = new Date();
const tabla = document.getElementById("tabla")
const tratamiento = document.getElementById("tratamiento");
const nombre = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const costo = document.getElementById("costo");
function agendar() {
    tabla.innerHTML += "<tr class=\"fila\"><td>" + tratamiento.value + "</td><td>" + nombre.value + "</td><td>" + fecha.value + "</td><td>" + costo.value + "</td></tr>"
    tratamiento.value = "";
    fecha.valueAsDate = new Date();
    costo.value = "";
    nombre.value = "";
};

