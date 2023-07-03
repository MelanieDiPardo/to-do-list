'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react'
import Header from './components/Header';
import Task from './components/Task';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  // Formato de tarea: Id (número), titulo (string), y estado (boolean).
  // {id: 1, title: 'string', completed: false}

  const inputRef = useRef();

  let pendingTasks = tasks.filter(task => task.completed == false).length

  function createTask(){
    setTasks(tasks.concat({id: tasks.length + 1, title: inputRef.current.value, completed: false}))
  }

  function completeTask(taskId){
    setTasks(tasks.map(task =>
      task.id == taskId ? { ...task, completed: true} : task))
  }

  let taskList = tasks.map(task =>
    <div className='col-3 mt-4'>
      <Task title={task.title} number={task.id} completed={task.completed} onClick={() => completeTask(task.id)}/>
    </div>
  );

  return (
    <>
      <Header pendingTasks={pendingTasks}/>
      <main className='row justify-content-center gap-2'>
        <input className='col-6' type='text' ref={inputRef}></input>
        <Button className='col-1' variant="primary" onClick={createTask}>Crear tarea</Button>{' '}
      </main>
      <div className='row row-cols-4 p-4'>
        {taskList}
      </div>
    </>
  )
}