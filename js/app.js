/*
 * Archivo principal de funcionalidad de JS
 */

//Para agregar fotografias y nombre de proyecto
//guardé las rutas de las imagenes en un array
 const galeria = ["assets/images/img-1.jpg", "assets/images/img-2.jpg", "assets/images/img-3.jpg",
 "assets/images/img-4.jpg","assets/images/img-5.jpg","assets/images/img-6.jpg",
 "assets/images/img-7.jpg","assets/images/img-8.jpg","assets/images/img-9.jpg"]
 
//con forEach se recorre el array
 galeria.forEach(function(val){
	
	var boxWork = document.createElement("div");//crea div principal que contendra foto y titulo
	boxWork.setAttribute("class","box-work");//se asigna clase y nombre
	document.querySelector("#work .container").appendChild(boxWork);//le asigna elemento padre

	var imagen = document.createElement("img");//se crea etiqueta img
	imagen.setAttribute("src", val);//se le asigna ruta dinámica, tomada del array galeria
	imagen.setAttribute("width", "300");//tamaño de la imagen
	boxWork.appendChild(imagen);//se le asigna como padre el div clase box-work

	var titulo = document.createElement("h5");//se crea etiqueta h5
	var proyecto = document.createTextNode("Nombre del proyecto");//se crea nodo de texto, donde va el texto que se mostrara
	titulo.appendChild(proyecto);//se le asigna al nodo de texto la etiqueta h5 como padre
	boxWork.appendChild(titulo);//a la etiqueta h5 se le asigna como padre el div clase box-work

});

//efecto ventana modal
function modal (){
	var proyectos = Array.from(document.getElementsByClassName("box-work"));//se llaman todas las clases que contienen foto y titulo
    var modalWork = document.getElementById("box-work-modal");//se llama al div principal que contiene el modal oculto
    var modalMostrar, cerrar, equis;/*variables a usar para el evento - modalMostrar mostrara el div oculto con la imagen
    a pantalla completa - cerrar contiene la clase que oculta el modal - equis es la imagen con el evento que oculta*/

    proyectos.forEach(function(img){//se recorre cada elemento de clase box-work en el html, o sea cada imagen y su texto

    	img.addEventListener("click", function(){//a cada clase encontrada le va a agregar el evento click

    	modalWork.innerHTML="";//indica que el id esta vacio

    	modalMostrar= document.createElement("div");//crea un div nuevo
    	modalMostrar.classList.add("modal-work");//se agrega la clase modal-work
    	modalMostrar.innerHTML= img.innerHTML;//el contenido de cada clase box-work se imprime dentro del nuevo div

    	modalWork.appendChild(modalMostrar);//se coloca nuevo div dentro de box-work-modal 
    	modalWork.classList.remove("hide");//se le quita la clase que lo oculta 
    	document.querySelector("#box-work-modal h5").classList.add("hide");//se oculta el titulo h5 para que se vea solo la imagen

    	cerrar = document.createElement("span");//crea un span
    	cerrar.setAttribute("class", "cerrarX");//se le asigna una clase
    	crearX = document.createTextNode("X");//se crea nodo de texto que tendra la X
    	cerrar.appendChild(crearX);//se coloca la X dentro del span
    	modalMostrar.appendChild(cerrar);//se coloca el span junto con la foto


    	cerrar.addEventListener("click",function(){
    			modalWork.classList.add("hide");
    		});
    	});

    });
}
modal();

