const fs = require("fs");
let tareas= JSON.parse(fs.readFileSync ("jsonuno.json", "utf-8",));

for(let i=0 ; i< tareas.length; i++){
  console.log(tareas[i].nombre)
}
