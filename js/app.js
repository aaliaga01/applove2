/*
 * Archivo principal de funcionalidad de JS
 */

 const galeria = ["assets/images/img-1.jpg", "assets/images/img-2.jpg", "assets/images/img-3.jpg",
 "assets/images/img-4.jpg","assets/images/img-5.jpg","assets/images/img-6.jpg",
 "assets/images/img-7.jpg","assets/images/img-8.jpg","assets/images/img-9.jpg"]
 
 galeria.forEach(function(val){
	
	var boxWork = document.createElement("div");
	boxWork.setAttribute("class","box-work");
	document.querySelector("#work .container").appendChild(boxWork);

	var imagen = document.createElement("img");
	imagen.setAttribute("src", val);
	imagen.setAttribute("width", "300");
	boxWork.appendChild(imagen);

	var titulo = document.createElement("h5");
	var proyecto = document.createTextNode("Nombre del proyecto");
	boxWork.appendChild(titulo);
	titulo.appendChild(proyecto);

	const mostrar = document.querySelector("#work .box-work img");
	mostrar.addEventListener("click", function(){
		alert("hola mundo")
	});
});



