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

// LLAMAR A LA FUNCIÓN CON TECLA ENTER

document.addEventListener( "keyup", (e)=> {
    if (e.key == 'Enter')  {
        const tarea = input.value 
    if(tarea){
        agregarTarea(tarea)
    }
    input.value = "";
    }
})

// LLAMAR A LA FUCIÓN CAMBIO DE ESTILO

const cambiarEtilos = () => {
    const link = document.getElementById("estilo");
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";
};