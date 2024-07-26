import Todo from "./Todo";
import { Key } from "react";

// @ts-ignore
const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo: { id: Key | null | undefined; }) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList