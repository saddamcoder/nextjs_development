"use client"
import { useTransition } from "react";
import {completeTodo} from "@/utils/actions";


// @ts-ignore
const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition()
    return (
        <div onClick={() => startTransition(() => completeTodo(todo.id))}>{todo.content}</div>
    )
}

export default Todo