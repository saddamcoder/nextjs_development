import {HiOutlineTrash} from "react-icons/hi"

interface RemoveBtnProps {
    id?: string
}

const RemoveBtn = ({id}: RemoveBtnProps) => {
    return (
        <button className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
    )
}

export default RemoveBtn