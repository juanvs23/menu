'use strict'
//captura los elementos con querySelector
var header = document.querySelector( 'header' ),
	wrapper = document.querySelector( '#wrapper' );

	//Funciones
	/*		//aplica las clases con los estilos, 
	recomiendo este metodo para poder editar desde el css 
	las clases a posterior o para los media query*/
	//crea el margen
	function grande() {

		//en jquery .addClass()
		header.classList.add('crecer');
		wrapper.classList.add('margen');
	}
	//quita el margen
	function chico() {
		//en jquery .removeClass()
		header.classList.remove('crecer');
		wrapper.classList.remove('margen');

	}
//importante escucha los eventos y aplica las funciones
//al dar click en el header activara la clase margen y crecer
header.addEventListener('click', ()=>{
	grande();
});
	//al salir del area del  header quitara la clase margen y crecer
header.addEventListener('mouseleave', ()=>{
	chico();
});