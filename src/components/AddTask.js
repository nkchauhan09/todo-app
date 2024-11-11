// src/components/AddTask.js
import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
