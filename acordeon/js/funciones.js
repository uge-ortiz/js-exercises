const botones = document.querySelectorAll("button");
const contenidos = document.querySelectorAll("ul");
let alturas = [];

botones.forEach((boton,indice) => {
    alturas.push(contenidos[indice].clientHeight);
    contenidos[indice].style.height = 0;
    boton.addEventListener("click", function(){
        if(contenidos[indice].classList.contains("desplegado")){
            // está abierto
            contenidos[indice].style.height =0;
            contenidos[indice].classList.remove("desplegado");
        } else {
            // está cerrado
            contenidos.forEach(contenido => {
                contenido.style.height =0;
                contenido.classList.remove("desplegado");
            });
            contenidos[indice].style.height = `${alturas[indice]}px`;
            contenidos[indice].classList.add("desplegado"); 
        }
    
        });

});


