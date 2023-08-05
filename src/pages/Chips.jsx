import '../css/Chips.css';
import React, {useState} from 'react';

const Chips = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const addTask = () => {
        const random = Math.floor(Math.random() * 1000);
        const updatedTasks = [...tasks, {id: random, task: newTask, done: false}];
        setTasks(updatedTasks);
        setNewTask('');
    };
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((item) => item.id !== id);
        setTasks(updatedTasks);
    };
    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };
    const color = [
        'red', 'violet', 'blue', 'brown', 'green'
    ]
    return (
        <div>
            <div className='chips'>
                <div className='chips-block'>
                    {tasks.map((item) => (
                        <div className={`chips-item ${color[Math.floor(Math.random()*color.length)]}`} key={item.id}>
                            {item.task}
                            <button onClick={() => deleteTask(item.id)}>X</button>
                        </div>
                    ))}
                </div>
                <input type="text" onKeyDown={keyPress} onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
            </div>
        </div>
    );
};

export default Chips;
