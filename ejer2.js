function reporteDePasajeros(estacion){
    let pasajero = 200;
    let reportes = [];
    
    for (let i=0; i <= estacion; i++){
        if (i!=5 && i >0){
            pasajero+=20;
        }else if (i ==5){
            pasajero+=40;
        }
        reportes.push("En la estación " + i + " hay " + pasajero + " pasajeros arriba del tren")
    }
    return reportes;
    console.log(reportes);
}

console.log(reporteDePasajeros(0));
