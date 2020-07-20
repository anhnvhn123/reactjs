import React, { useState } from 'react';

function TodoList() {

    // const initTodoLit = ['angular','react','vue']

    // const [todoList, setTodoList] = useState( () => {
    //     const initTodoLit = getData();
    //     return initTodoLit;
    // })
    const initTodoLit = getData()
    const [todoList, setTodoList] = useState(initTodoLit )
    console.log(todoList);

    function removeTodo(index){
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function getData() {
        return ['angular','react','vue'];
    }

    return (
        <ul>
            { todoList.map( (todo, index) => (
                <li 
                    key={index}
                    onClick={ () => removeTodo(index)}
                >
                {todo}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;