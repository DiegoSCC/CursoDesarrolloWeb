const fs = require('fs');
const { stringify } = require('querystring');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (arrayTarea) {
        let tareaConver = JSON.stringify(arrayTarea);
        return fs.writeFileSync(this.archivo, tareaConver)
    },

    guardarJSON: function (tareaObjeto){
        let arrayTareas = this.leerJSON();
        arrayTareas.push(tareaObjeto);
        this.escribirJSON(arrayTareas)
    },

    filtrarPorEstado: function (estadoAFiltrar){
        let arrayTareas1 = this.leerJSON();
        let arrayFiltrado = arrayTareas1.filter((item)=>{return item.estado == estadoAFiltrar})
        return arrayFiltrado;
    }

}

module.exports = archivoTareas;