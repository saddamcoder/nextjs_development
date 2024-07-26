import AddTopic from "@/app/topic/addtopic/page";

// @ts-ignore
const idPage = ({params: params}) => {
    return (
        <>
            <div>
                id {params.id}
            </div>
        </>
    )
}

export default idPage