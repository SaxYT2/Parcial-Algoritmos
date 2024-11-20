// Programada diseñado por la analista Laura Perez para el usuario lider Carlos Martinez segun la problematica
let descripcionTarea1 = "";
let fechaLimiteTarea1 = "";
let estadoTarea1 = "";

let descripcionTarea2 = "";
let fechaLimiteTarea2 = "";
let estadoTarea2 = "";

let descripcionTarea3 = "";
let fechaLimiteTarea3 = "";
let estadoTarea3 = "";


function ingresarTareas() {
  descripcionTarea1 = prompt("Ingrese la descripción de la tarea 1:");
  fechaLimiteTarea1 = prompt("Ingrese la fecha límite de la tarea 1 (formato: AAAA-MM-DD):");
  estadoTarea1 = prompt("Ingrese el estado de la tarea 1 (pendiente, en progreso, completada, atrasada):");

  descripcionTarea2 = prompt("Ingrese la descripción de la tarea 2:");
  fechaLimiteTarea2 = prompt("Ingrese la fecha límite de la tarea 2 (formato: AAAA-MM-DD):");
  estadoTarea2 = prompt("Ingrese el estado de la tarea 2 (pendiente, en progreso, completada, atrasada):");

  descripcionTarea3 = prompt("Ingrese la descripción de la tarea 3:");
  fechaLimiteTarea3 = prompt("Ingrese la fecha límite de la tarea 3 (formato: AAAA-MM-DD):");
  estadoTarea3 = prompt("Ingrese el estado de la tarea 3 (pendiente, en progreso, completada, atrasada):");

  console.log("Tareas ingresadas exitosamente.");
}


function mostrarTareas() {
  console.log("Tarea 1: " + descripcionTarea1);
  console.log("Fecha límite: " + fechaLimiteTarea1);
  console.log("Estado: " + estadoTarea1);
  console.log("-------------------------");

  console.log("Tarea 2: " + descripcionTarea2);
  console.log("Fecha límite: " + fechaLimiteTarea2);
  console.log("Estado: " + estadoTarea2);
  console.log("-------------------------");

  console.log("Tarea 3: " + descripcionTarea3);
  console.log("Fecha límite: " + fechaLimiteTarea3);
  console.log("Estado: " + estadoTarea3);
  console.log("-------------------------");
}

// Actualizar el estado de una tarea
function actualizarEstadoTarea(tarea, nuevoEstado) {
  if (tarea === 1) {
    estadoTarea1 = nuevoEstado;
  } else if (tarea === 2) {
    estadoTarea2 = nuevoEstado;
  } else if (tarea === 3) {
    estadoTarea3 = nuevoEstado;
  }
  console.log("El estado de la tarea " + tarea + " se ha actualizado a: " + nuevoEstado);
}


function verificarPlazos() {
  let hoy = new Date();


  let fechaLimite1 = new Date(fechaLimiteTarea1);
  let diferencia1 = fechaLimite1 - hoy;
  if (diferencia1 < 3 * 24 * 60 * 60 * 1000) {
    console.log("¡Alerta! La tarea 1 ('" + descripcionTarea1 + "') está cerca de su fecha límite.");
  }


  let fechaLimite2 = new Date(fechaLimiteTarea2);
  let diferencia2 = fechaLimite2 - hoy;
  if (diferencia2 < 3 * 24 * 60 * 60 * 1000) {
    console.log("¡Alerta! La tarea 2 ('" + descripcionTarea2 + "') está cerca de su fecha límite.");
  }


  let fechaLimite3 = new Date(fechaLimiteTarea3);
  let diferencia3 = fechaLimite3 - hoy;
  if (diferencia3 < 3 * 24 * 60 * 60 * 1000) {
    console.log("¡Alerta! La tarea 3 ('" + descripcionTarea3 + "') está cerca de su fecha límite.");
  }
}


function ejecutarSistema() {
  ingresarTareas();
  console.log("Tareas actuales:");
  mostrarTareas();
  

  let tareaParaActualizar = prompt("¿Qué tarea deseas actualizar? (1, 2 o 3):");
  let nuevoEstado = prompt("¿Cuál es el nuevo estado de la tarea? (pendiente, en progreso, completada, atrasada):");
  actualizarEstadoTarea(Number(tareaParaActualizar), nuevoEstado);

  verificarPlazos();
}


ejecutarSistema();

//samuel mejia arcos, jeison herney villamil caicedo