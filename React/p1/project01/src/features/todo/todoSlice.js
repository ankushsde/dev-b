import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1, 
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        // properties and functions comes inside reducers
        addTodo : (state,action) => {
            console.log('Adding todo:', action.payload.text);
            const todo = {
                 id: nanoid(),  
                 text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=>
                todo.id != action.payload
            )
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer
