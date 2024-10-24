export type Todo = {
    id:string;
    title:string;
}

export type SubTodo = Todo & {
    todoId:string;
}


export type TodoWithSubTodos = Todo & {
    subtodos: SubTodo[]
}


export type TodoDto = {
    title: string;
}

export type SubTodoDto = TodoDto & {
    todoId:string
}