function todos() {
    return {
        todos: [{
            id: 1,
            title: 'Sample Task',
            isComplete: false
        }],
        todoTitle:' ',
        todoId: 2,
        todoDate: " ",
        addTodo(){
            if(this.todoTitle === " "){
                return;
            }
            this.todos.push({
                    id:this.todoId,
                    title: this.todoTitle.substr(0 ,2).toUpperCase() + this.todoTitle.substring(2),
                    isComplete: false,
                });
            this.todoId++;
            this.todoTitle = " ";
        },
        deleteTodo(id){
            this.todos = this.todos.filter(todo => id!== todo.id);
        },
    }
}