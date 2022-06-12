import React from "react";
import { TaskItem } from "../common/models";
import "../index.css";
import Task from "./Task";

export interface TaskListProps {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
