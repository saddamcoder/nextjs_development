import {newTodo} from '@/utils/actions'
import variables from '../styles/variables.module.scss'

const NewTodoForm = ({}) => {
    return (
        <div>
            <form action={newTodo}>
                <button className={`btn border-t-neutral-200 bg-amber-900 text-white bg-clip-padding ${variables.title}`}>
                    data passing
                </button>
                <input name="content" type="text" className="border border-amber-500"/>
                <button className="btn border-t-neutral-200 bg-amber-900 text-white bg-clip-padding" type="submit"> new todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm