const input = document.getElementById("agregar-tarea");
console.log(input);
const mas = document.getElementById("agregar");
const lista = document.getElementById("lista1");
const agregarTarea = (tarea) => {
const elemento = `<li>
                    <i class="fas fa-circle co check" id="check" data-="check"></i>
                    <p class="tareaok tachado" id="tareaok">${tarea}</p>
                    <i class="fas fa-trash de borrar" id="borrar" data-="borrar"></i>
                
                </li>`
                lista.insertAdjacentHTML("beforeend", elemento);
};

//LLAMO FUNCIÓN

mas.addEventListener("click", () =>{
    const tarea = input.value 
    if(tarea){
        agregarTarea(tarea)
    }
    input.value = "";
})