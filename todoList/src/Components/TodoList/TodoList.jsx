import Todo from "../Todo/Todo"
import TodoContex from "../../Contex/TodoContex";
import { useContext } from "react";
function TodoList(){

    const {list, setList} = useContext(TodoContex);
    //Todo Checked Function
    function onFinshed(todo,isFinished){
        const updateList = list.map(t => {
            if(t.id == todo.id){
                todo.finished = isFinished;
            }
            return t;
        });
        setList(updateList);
    }
    // Todo Delete Function
    function onDelete(todo){
        const updateList = list.filter(t => t.id != todo.id)
        setList(updateList);
    }
    // Todo Edit Function
    function onEdit(todo, todoText){
        const updateList = list.map(t => {
            if(t.id == todo.id){
                todo.finished = todoText;
            }
            return t;
        });
        setList(updateList);
    }
    // Todo UI
    return(
        <div>
            {list.length > 0 && 
            list.map(todo => 
                <Todo 
                    key={todo.id}
                    id={todo.id} 
                    isFinished={todo.finished} 
                    todoData={todo.todoData}
                    chageFinished={(isFinished)=>onFinshed(todo, isFinished)}
                    onDelete={() =>onDelete(todo)}
                    onEdit={(todoText) => onEdit(todo,todoText)}
                />)}
        </div>
        
    )
}

export default TodoList;