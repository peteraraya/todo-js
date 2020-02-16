import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    // Metodos a utilizar 

    
    nuevoTodo(todo){
        this.todos.push( todo );
        this.guardarLocalStorage(); // grabamos cambios en localstorage
    }

    eliminarTodo( id ){
       // sobrescribe los valores 
       this.todos = this.todos.filter( todo => todo.id != id); // regresa el arreglo excluyendo el id que coincida con el id

       this.guardarLocalStorage(); // grabamos cambios en localstorage
    
    }

    marcarCompletado( id ){
        for (const todo of this.todos) {
            // console.log(id, todo.id);
            
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage(); // grabamos cambios en localstorage
                break;
            }
            
        }
    }
    
    eliminarCompletado(){
        // sobrescribe los valores 
        this.todos = this.todos.filter(todo => !todo.completado); // necesito todos los que no estan completados 
        this.guardarLocalStorage(); // grabamos cambios en localstorage
    }

    guardarLocalStorage(){
        // guardamos en localstorage el json
        localStorage.setItem('todo', JSON.stringify(this.todos)); // Convierta arreglo de todo a JSON Perfecto 

    }

    cargarLocalStorage(){
        // cargaremos el json caputurado

        // verificación
        // if ( localStorage.getItem('todo') ) {
           
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // }else{
        //     // si no existe
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo')) 
                     ? JSON.parse(localStorage.getItem('todo')) 
                     : []; 
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        this.todos = this.todos.map(Todo.fromJson);
    }

}