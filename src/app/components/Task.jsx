import './task.style.css';

export default function Task({title, number}){

    return (
        <div className='task'>
            <p># {number}</p>
            <h2>{title}</h2>
        </div>
    )
}