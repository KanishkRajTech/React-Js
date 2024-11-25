import { useState } from "react";

function Todo({todoData, isFinished , chageFinished,onDelete,onEdit}){
    const [finished, setFinished] = useState(isFinished)
    const [isEditting, setEditting] = useState(false)
    const [editText, setEditText] = useState(todoData)
    return(
        <div>
            <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked);
                chageFinished(e.target.checked)
            }}/>

            {(isEditting) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span>}

            <button onClick={() =>{
                setEditting(!isEditting)
                onEdit(editText)
            }}>{(!isEditting)?'Edit':'Save'}</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo;