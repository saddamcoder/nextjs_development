
// @ts-ignore
import NewTodoForm from "@/components/NewTodoForm";

// @ts-ignore
const DashboardLayout = ({ children }) => {
    return(
        <div>
            <h1>dashboard</h1>
            <div> <NewTodoForm /> </div>
            <h2 className="font-bold">Todo list</h2>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout