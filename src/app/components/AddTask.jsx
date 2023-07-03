'use client';
import Task from './Task';
import './addtask.style.css';
import { useState, useRef } from 'react';

export default function AddTask(){
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();


    let listTasks = tasks.map(task =>
        <Task title={task.title} number={task.id}/>
    );

    function createTask(){
        setTasks(tasks.concat({title: inputRef.current.value, id: tasks.length + 1}))
    }

    return(
        <main className='main-page'>
            <div className='addTask'>
                <input className='addTask-input' ref={inputRef} type="text" id="task" name="task"/>
                <button className='addTask-button' onClick={createTask}>Añadir tarea</button>
            </div>
            <div className='task-grid'>
                {listTasks}
            </div>
        </main>
    )
}