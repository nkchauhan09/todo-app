// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleTask(task.id)} 
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => editTask(task.id, prompt('Edit task:', task.text))}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
