const { filtrarPorEstado } = require('./tareas');
let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach((tareas, index) => console.log(index, ". Titulo:", tareas.titulo, "- Estado:", tareas.estado));
        console.log()
        break;

        case undefined:
        console.log('Tenés que pasarme una acción');
        break;

        //Nuevo case para la opcion de crear una nueva tarea
        
    case "crear":
        let title = process.argv[3];
        let nuevaTarea = {
            titulo: title,
            estado: "pendiente"
        }
        archivoTareas.guardarJSON(nuevaTarea)
        break;
    case "filtrar":
        console.log("Tareas filtradas: ");
        let estadoABuscar = process.argv[3];
        let arrayAMostrar = archivoTareas.filtrarPorEstado(estadoABuscar);
        arrayAMostrar.forEach((tareas, index) => console.log(index, ". Titulo:", tareas.titulo, "- Estado:", tareas.estado));;
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear (siguiente ingresar el titulo de la tarea), filtrar (siguiente ingresar el valor buscado)');
        break;
}

