import React from "react";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";   
import DarkModeToggle from "./components/DarkModeToggle";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-xl shadow-lg w-[400px]">
        <DarkModeToggle />
        <h1 className="text-3xl font-bold text-center mb-6">⏳ FocusPal</h1>
        <Timer />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
