
import './styles.css';
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';


// Instanciar clases
export const todoList = new TodoList();
// Obtengo los datos guardados en localstorage
// console.log(todoList.todos); 

// Mantengo los cambios del localstorage
// todoList.todos.forEach(todo => crearTodoHtml(todo));
   todoList.todos.forEach( crearTodoHtml); // si regresa un argumento funciona este metodo caso contrario utilizar la forma de la linia anterior

// const tarea = new Todo('Aprender Javascrip);
// todoList.nuevoTodo(tarea);
// tarea.completado = false;
// crearTodoHtml(tarea);
// console.log(todoList);

// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo(newTodo);

//  todoList.todos[0].imprimirClase();

console.log('todo : ', todoList.todos )


