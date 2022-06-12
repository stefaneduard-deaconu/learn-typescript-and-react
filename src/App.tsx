import React, { useState } from "react";
import AddTask from "./components/AddTask";
import { TaskItem } from "./common/models";
import TaskList from "./components/TaskList";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: (task: TaskItem) => !task.isCompleted,
  Completed: (task: TaskItem) => task.isCompleted
};

//returns array of objects
const FILTER_NAMES = Object.keys(FILTER_MAP);

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          task,
          isCompleted: false
        }
      ]);
    }
    setTask("");
  };

  return (
      <div className="App">
        <span className="task-header">Task Tracker</span>
        <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
        {FILTER_NAMES.map((task) => (
            <FilterButton
                key={task}
                task={task}
                isPressed={task === filter}
                setFilter={setFilter}
            />
        ))}

        {/*tasks.filter(FILTER_MAP[filter]).map((task) => (
        <TaskList tasks={tasks} setTasks={setTasks} key={task.id} />
      ))*/}
        { <TaskList tasks={tasks} setTasks={setTasks} />}
      </div>
  );
};

export default App;
