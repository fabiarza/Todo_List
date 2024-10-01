(function(){
	/*VARIABLES*/
	var lista = document.getElementById("lista");
		tareaInput = document.getElementById("tareaInput");
		btnNuevaTarea = document.getElementById("btn-agregar");
		
		
		
	/*FUNCIONES*/
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		nuevaTarea = document.createElement("li");
		enlace = document.createElement("a");
		contenido = document.createTextNode(tarea);
		
		if(tarea === ""){
			tareaInput.setAttribute("placeholder" , "Agregue una tarea valida");
			tareaInput.className = "error";
			return false;			
		}
		/*Agregamos el contenido del input recibido al enlace*/
		enlace.appendChild(contenido);
		/*Le establecemos un atributo href*/
		enlace.setAttribute("href", "#");
		/*Agregamos el enlace <a> a la nueva <li>*/
		nuevaTarea.appendChild(enlace);
		/*Agregamos la nueva tarea a la lista */
		lista.appendChild(nuevaTarea);
		
		tareaInput.value = "";//esta linea sirve para ir limpiando nuetro input
		for(var i=0 ; i <= lista.children.length-1 ; i++){//sirve para agregar evento a la nueva tarea agregada en este caso el evento click para borrar el elemeento clickclado
			lista.children[i].addEventListener("click", function(){//esto es una function anonima
				this.parentNode.removeChild(this);
			});
			
		}
		
	};
	btnNuevaTarea.addEventListener("click" , agregarTarea);
	/*FIN DE LA FUNCION AGREGAR TAREA*/
	
	
	
	var comprobarInput = function(){//funcion que devuelve el atributo (placeholder)al input
		tareaInput.className = "";
		tareaInput.setAtribute("placeholder" , "Agrega tu tarea");
	};
	
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};
	
	/*EVENTOS*/
	
	/*AGREGAR TAREA*/
       // btnNuevaTarea.addEventListener("click" , agregarTarea);
		
	
	/*COMPROBAR INPUT*/
		tareaInput.addEventListener("click" , comprobarInput);
	
	/*BORRAR ELEMENTOS DE LA LISTA*/
		for(var i=0 ; i <= lista.children.length -1 ; i++){
			lista.children[i].addEventListener("click" , eliminarTarea);
		}
	
	
	
}());