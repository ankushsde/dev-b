import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddToDo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo({ text: input })); // Dispatch the action if input is not empty
            setInput(''); // Clear the input field
        } else {
            alert('Please enter a valid todo'); // Show an alert if input is empty
        }
    };

    return (
        <form onSubmit={addTodoHandler} style={styles.form}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
                style={styles.input}
            />
            <button type="submit" style={styles.button}>
                Add Todo
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        margin: '20px auto',
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default AddToDo;