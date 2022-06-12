import React, { useEffect, useRef, useState } from "react";
import { TaskItem } from "../common/models";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";

export interface TaskProps {
  task: TaskItem;
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}

const Task = ({ task, tasks, setTasks }: TaskProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const taskDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  // the focus is now on the inside box on edit task
  const form = useRef<HTMLInputElement>(null);
  useEffect(() => {
    form.current?.focus();
  }, [edit]);

  return (
    <form className="task-item" onSubmit={(e) => taskEdit(e, task.id)}>
      {edit ? (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          ref={form}
        />
      ) : task.isCompleted ? (
        <s className="task-item-text">{task.task}</s>
      ) : (
        <span className="task-item-text">{task.task}</span>
      )}

      <div>
        <span
          className="icons"
          onClick={() => {
            if (!edit && !task.isCompleted) setEdit(!edit);
          }}
        >
          <FiEdit title="Edit" />
        </span>
        <span className="icons" onClick={() => deleteTask(task.id)}>
          <MdDelete title="Delete" />
        </span>
        <span className="icons" onClick={() => taskDone(task.id)}>
          <FcCheckmark title="Done" />
        </span>
      </div>
    </form>
  );
};

export default Task;
