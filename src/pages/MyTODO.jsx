import { useState } from 'react';
import '../css/Todo.css';

const MyTODO = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
            const updatedTasks = [...tasks, { task: newTask, done: false }];
            setTasks(updatedTasks);
            setNewTask('');
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const markTask = (index) => {
        const updatedTasks = tasks.map((item, i) => {
            if (i === index) {
                return { ...item, done: !item.done };
            }
            return item;
        });

        setTasks(updatedTasks);
    };

    return (
        <div className="todo">
            <div className="todo-block">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add" onClick={addTask}>
                    Add #{tasks.length}
                </button>
            </div>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        <div>
                            <input
                                onClick={() => markTask(index)}
                                type="checkbox"
                                checked={item.done}
                            />
                            <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                {item.task}
                            </span>
                        </div>
                        <button id="delete" onClick={() => deleteTask(index)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyTODO;
