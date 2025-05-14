import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function ToDo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Todos</h2>
            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id} style={styles.listItem}>
                        <span style={styles.todoText}>{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            style={styles.button}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        margin: '20px auto',
        padding: '20px',
        width: '400px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
    },
    todoText: {
        fontSize: '16px',
        color: '#333',
    },
    button: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#FF4D4D',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
    },
};

export default ToDo;