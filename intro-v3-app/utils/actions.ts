'use server'

import db from './db'
import {revalidatePath} from "next/cache";

export const newTodo = async (formData: any) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content'),
        }
    })

    revalidatePath('/todos')
}

export const completeTodo = async (id: any) => {
    await db.todo.update({
        where: {id},
        data: {
            completed: true
        }
    })

    revalidatePath('/todos')
}