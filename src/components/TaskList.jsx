import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("focuspal_tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("focuspal_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">📝 Focus Tasks</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border rounded ${
              t.done ? "bg-green-100 line-through" : ""
            }`}
          >
            <span onClick={() => toggleDone(index)} className="cursor-pointer">
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)} className="text-red-500">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
