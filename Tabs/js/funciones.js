const panel = document.querySelector(".panel");
const paneles = document.querySelector(".paneles");
const tabs = document.querySelector("ul");
const enlaces = document.querySelectorAll("a");


let listaTabs = tabs.children;
let listaPanels = paneles.children;

// Convierto el listado de nodos a un array

let elements = Array.from(listaTabs);
let panelslist = Array.from(listaPanels);


// Qué tab estoy pulsando? 

for(var i = 0; i < listaTabs.length; i++){
    (function(indice){
        
        listaTabs[indice].onclick = function(){

        // Añado la clase al hacer click sobre un tab
        
        tabs.addEventListener("click",function(){
            enlaces[indice].classList.add("activo");
            panelslist[indice].classList.add("activo");
           
    
    // Quito la clase al hacer click tab

            tabs.addEventListener("click",function(){
                enlaces[indice].classList.remove("activo");
                panelslist[indice].classList.remove("activo");
            });    
            
        });
      
    }

    })(i);

}




