//crear un programa que gestione una lista de tareas
//debe permitir:
// 1.agregar una tarea
// 2.eliminar una tarea
// 3.mostrar todas las tareas
// 4.marcar una tarea como completada
// 5.mostrar las tareas incompletas

// lista de tareas
let tareas = [];
        function agregarTarea(tarea="",estado="Incompleto") {
            if(tarea === "") {
     tarea = document.getElementById("tarea").value;
     estado = document.getElementById("tareaSelect").value;
     }
    tareas.push({descripcion: tarea, completada: estado});

}
function eliminarTarea(indice){
    if (indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1);
    
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log("Mostrando lista de tareas:");
    tareas.forEach((tarea, indice) => {
        console.log(`${indice + 1}.[${tarea.completada ? 'x' : 'incompleto '}] 
            ${tarea.descripcion}`);
        });
    
}
//adicionar las tareas
agregarTarea("comprar leche","Completado");
agregarTarea("hacer ejercicios","Completado");
agregarTarea("Estudiar javaScript","Incompletado");
agregarTarea("subir a GitHud","Incompletado");
mostrarTareas();

