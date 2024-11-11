// src/components/TodoApp.js
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filter from './Filter';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasks = () => {
    switch (filter) {
      case 'Completed':
        return tasks.filter(task => task.completed);
      case 'Pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TaskList 
        tasks={filterTasks()} 
        toggleTask={toggleTask} 
        editTask={editTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default TodoApp;
