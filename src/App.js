import React from "react";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";   
// import DarkModeToggle from "./components/DarkModeToggle";
function App() {
  return (
    <div >
      <div >
        {/* <DarkModeToggle /> */}
        <h1 className="text-3xl font-bold text-center mb-6">⏳ FocusPal</h1>
        <Timer />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
