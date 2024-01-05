export function Todos({todos}){
    console.log(todos);
    return <div>
       {todos.map(function(todo){
        return <div>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <button>
                    {todo.completed == true ? "Completed" : "Mark as Complete"}
                </button>
        </div>
       })}
    </div>
}