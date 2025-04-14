// src/App.jsx
import React from "react";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import Toggle from "./components/Toggle";

import { Card, CardContent } from "./components/ui/card";

const App = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🧘‍♂️ FocusPal</h1>

      <Card style={{ marginBottom: "2rem" }}>
        <CardContent>
          <Toggle />
          <Timer />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: "2rem" }}>
        <CardContent>
          <TaskList />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stats />
        </CardContent>
      </Card>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
};

export default App;
