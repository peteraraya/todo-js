export class Todo{

    static fromJson( {id, tarea, completado, creado} ){
        // recibo un objeto

        const tempTodo = new Todo( tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        // regreso instancia , que me permitirá recuperar mis metodos
        return tempTodo;
    }


    constructor( tarea ){
        
        this.tarea = tarea;

        this.id = new Date().getTime(); // representación de la hora actual
        
        this.completado = false;
        
        this.creado = new Date();
    }


    imprimirClase(){
        console.log(`${this.tarea} - ${ this.id}`);
    }
}