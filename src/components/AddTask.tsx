import React, { useRef } from "react";
import { IoIosAdd } from "react-icons/io";

export interface SearchProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const AddTask = ({ task, setTask, handleAddTask }: SearchProps) => {
  const form = useRef<HTMLInputElement>(null);
  return (
    <form
      className="search"
      onSubmit={(e) => {
        handleAddTask(e);
      }}
    >
      <input
        ref={form}
        className="search-input"
        type="input"
        placeholder="Add task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button className="submit" type="submit">
        <IoIosAdd title="Add" />
      </button>
    </form>
  );
};

export default AddTask;
