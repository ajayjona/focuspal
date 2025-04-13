import React from "react";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";   
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">⏳ FocusPal</h1>
        <Timer />
        <TaskList />
      </div>
    </div>
  );
 
}

export default App;
