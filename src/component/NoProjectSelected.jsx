import React from "react";
import noProjectImage from "../assets//no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p>Select a project or get startted with a new one</p>
      <p>
        <Button onClick={onStartAddProject}>create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
