import db from '@/utils/db'
import TodoList from "@/components/TodoList";

const getData = async () => {
    await new Promise((resolve) => setTimeout( resolve, 1000));
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
    const todos = await getData()
    return (
        <>
            <div>
                <TodoList todos={todos} />
            </div>
        </>
    )
}

export default TodosPage