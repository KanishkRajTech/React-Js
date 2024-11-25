function todoReduser(state, action){
    if(action.type == 'add_todo'){
        let todoText = action.payload.todoText;
        return [
            ...state,{id: state.length +1, todoData:todoText, finished:false}
        ]
    }else if(action.type == 'edit_todo'){
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        const updateList = state.map(t => {
            if(t.id == todo.id){
                todo.finished = todoText;
            }
            return t;
        });
        return updateList;
    }else if(action.type == 'delete_todo'){
        let todo = action.payload.todo
        const updateList = state.filter(t => t.id != todo.id)
        setList(updateList);
        return updateList;
    }
}
export default todoReduser;