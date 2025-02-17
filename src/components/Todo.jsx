import { useState, useEffect } from "react";
import "./Todo.css"; // Importing CSS

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((taskItem, i) =>
      i === index ? { ...taskItem, completed: !taskItem.completed } : taskItem
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const allCompleted =
    tasks.length > 0 && tasks.every((taskItem) => taskItem.completed);

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button onClick={addTask} className="add-button">
        Add
      </button>

      <ul className="task-list">
        {tasks.map((taskItem, index) => (
          <li key={index} className="task-item">
            <input
              type="checkbox"
              checked={taskItem.completed}
              onChange={() => toggleTask(index)}
            />
            <label className={taskItem.completed ? "completed-task" : ""}>
              {taskItem.text}
            </label>
            <button onClick={() => deleteTask(index)} className="delete-button">
              ❌
            </button>
          </li>
        ))}
      </ul>

      {allCompleted && (
        <p className="congrats-message">
          🎉 Congratulations! All tasks completed! 🎉
        </p>
      )}
    </div>
  );
}
