import React from "react";

export interface FilterButtonInterface {
  task: string;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButton = ({
  task,
  isPressed,
  setFilter
}: FilterButtonInterface) => {
  return (
    <div>
      <button
        type="button"
        className="buttons"
        aria-pressed={isPressed}
        onClick={() => setFilter(task)}
      >
        <span>{task}</span>
      </button>
    </div>
  );
};

export default FilterButton;
