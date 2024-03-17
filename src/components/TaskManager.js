import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // using timestamp for simplicity
      title,
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          {task.title} - {task.completed ? 'Completed' : 'Pending'}
          <button onClick={() => toggleTaskCompletion(task.id)}>Toggle Completion</button>
        </div>
      ))}
      <button onClick={() => addTask("New Task")}>Add Task</button>
    </div>
  );
}

export default TaskManager;
