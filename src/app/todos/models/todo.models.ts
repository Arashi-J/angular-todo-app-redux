export class Todo {
    
    constructor(
        public texto: string,
        public completado: boolean = false,
        public id: number = Math.random(),
        ){}
}

