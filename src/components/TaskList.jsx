// src/components/TaskList.jsx
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
    setNewTask(""); // Clear input
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.taskListContainer}>
      <h2 style={styles.heading}>Your Tasks</h2>
      <div style={styles.inputWrapper}>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={handleAddTask} style={styles.addButton}>
          Add Task
        </Button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
              style={styles.checkbox}
            />
            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <Button
              onClick={() => handleDeleteTask(index)}
              style={styles.deleteButton}
            >
              🗑
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  taskListContainer: {
    marginTop: "1rem",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "1rem",
    textAlign: "center",
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  addButton: {
    marginLeft: "0.5rem",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  taskItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
  },
  checkbox: {
    marginRight: "0.5rem",
  },
  taskText: {
    flexGrow: 1,
  },
  deleteButton: {
    padding: "0.25rem 0.5rem",
    backgroundColor: "red",
    color: "white",
    fontSize: "0.75rem",
  },
};

export default TaskList;
