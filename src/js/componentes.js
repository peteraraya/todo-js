import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias en el Html
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrarTodo = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = todo => {

  const htmlTodo = `
                <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked':''} >
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
                    </li> 
    `;

    // Crear elemeto html
    const div = document.createElement('div'); // necesito crear un elemento que contenga la lista ordenada
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild ); // necesario para evitar dejar div vacios (Buena practica)

    return div.firstElementChild;

}


// Eventos

txtInput.addEventListener('keyup', (event) => {
    // console.log(event);

    // Cuando presiona enter y no este vacío
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo( txtInput.value);
        // Agrego al arreglo
        todoList.nuevoTodo( nuevoTodo );
        // console.log( todoList );
        //Agregar elemento html
        crearTodoHtml( nuevoTodo);
        // Limpiar caja de texto luego de presionar enter
        txtInput.value = '';
    }
});


divTodoList.addEventListener('click', (event)=>{
    // console.log('click');
    // console.log(event.target.localName);

    const nombreElemento = event.target.localName; // input, label
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    

   // console.log(nombreElemento);
    // Procedimiento
    if ( nombreElemento.includes('input') )  { // Hizo click en el check

        todoList.marcarCompletado( todoId );

        todoElemento.classList.toggle('completed');
        
    }else if( nombreElemento.includes('button')){
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );// eliminar elemento html
    }

    // console.log(todoList)
});

btnBorrarTodo.addEventListener('click', () => {

    todoList.eliminarCompletado();

  for (let i = divTodoList.children.length - 1; i >= 0; i-- ) { // necesito decrentar los resultados
      
    // si el elemento actual está completado o no y si esta completado borrarlo
    const elemento = divTodoList.children[i]; 

    // Borrar elemento que tenga la clase completed

    if ( elemento.classList.contains('completed')) {
        divTodoList.removeChild(elemento);
    }

    // console.log(elemento)
  }
});


ulFiltros.addEventListener('click', (event)=>{
    //console.log( event.target.text );
    // almacenamos este filtro en una variable
    const filtro = event.target.text;

    // validación
    if (!filtro) {
        return;
    }

    // barrer cada uno de los filtros y removemos la clase selected
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    // utiizaremos hidden
    for (const elemento of divTodoList.children ) {
        // console.log(elemento);

        // quitar la clase hidden ( limpiandola)
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed'); // preguntamos si este registro esta completado

        // ver si quiero mostrar los completados o no
        switch (filtro) {

            case  'Pendientes':
                    if (completado) {
                        elemento.classList.add('hidden')
                    }
                    break;

            case 'Completados':
                    if ( !completado) {
                        elemento.classList.add('hidden')
                    }
                    break;
                 
          
        }

    }
});



