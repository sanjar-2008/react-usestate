import { useState } from 'react';
import '../css/secondTodo.css';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        const random = Math.floor(Math.random() * 1000);
        const updatedTasks = [...tasks, { id: random, task: newTask, done: false }];
        setTasks(updatedTasks);
        setNewTask('');
    };

    const markTask = (id) => {
        const updatedTasks = tasks.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            }
            return item;
        });

        setTasks(updatedTasks);
    };

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className='head'>
            <div className="todo-block-item">
                <input
                    type="text"
                    value={newTask}
                    onKeyDown={keyPress}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>
            <div>
                {tasks.some((item) => !item.done) && <h1>ToDo</h1>}
                <ul>
                    {tasks.filter((item) => !item.done).map((item) => (
                        <li key={item.id}>
                            <div>
                                <input type="checkbox" onClick={() => markTask(item.id)} checked={item.done} />
                                <span>{item.task}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {tasks.some((item) => item.done) && <h1>Done</h1>}
                <ul>
                    {tasks.filter((item) => item.done).map((item) => (
                        <li key={item.id}>
                            <div>
                                <input type="checkbox" onClick={() => markTask(item.id)} checked={item.done} />
                                <span>{item.task}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
