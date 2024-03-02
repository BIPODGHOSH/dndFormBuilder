import React, { useState } from "react";
import ShowData from "./ShowData";

const FormBuilder = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [obj, setObj] = useState(null);

  const handleDragStart = (e) => {
    setDraggedItem(e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = draggedItem;

    if (droppedItems.includes(data)) {
      if (e.target.id === "trashCan") {
        setDroppedItems(droppedItems.filter((item) => item !== data));
      }
      return;
    }

    if (e.target.id === "trashCan") {
      setDroppedItems(droppedItems.filter((item) => item !== data));
    } else {
      setDroppedItems([...droppedItems, data]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleButtonClick = () => {
    // Show the typed input in another box
    console.log(formData);

    if (formData.name || formData.email || formData.password) {
      setObj(formData);
      setFormData(
        {
          name: "",
          email: "",
          password: "",
        },
        () => {
          // Log the state after the update
          console.log("Form Data Reset:", formData);
        }
      );
    } else {
      // Log the state when there are no changes
      console.log("Form Data Reset:", formData);
    }

    setIsOpen(true);
  };

  return (
    <div className="flex justify-around gap-4 w-full p-5">
      <div className="flex w-2/5 flex-col gap-10">
        <div className="flex gap-2 flex-col text-white">
          <div
            id="input-name"
            draggable
            onDragStart={handleDragStart}
            className="border p-4 cursor-move rounded-lg"
          >
            Name
          </div>
          <div
            id="input-email"
            draggable
            onDragStart={handleDragStart}
            className="border p-4 cursor-move rounded-lg"
          >
            Email
          </div>
          <div
            id="input-password"
            draggable
            onDragStart={handleDragStart}
            className="border p-4 cursor-move rounded-lg"
          >
            Password
          </div>
          <div
            id="button"
            draggable
            onDragStart={handleDragStart}
            className="border p-4 cursor-move rounded-lg"
          >
            Button
          </div>
          <div
            id="trashCan"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border border-dashed p-4 text-center text-white bg-red-500 rounded-lg"
          >
            Trash Can
          </div>
        </div>
        {isOpen && <ShowData formData={obj} />}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col justify-center items-center gap-2 border border-dashed p-4 min-w-40 w-2/5"
      >
        <h1 className="text-white text-3xl">Drop Here</h1>
        {droppedItems.map((item, index) => (
          <div
            key={index}
            id={item}
            onDragStart={handleDragStart}
            className={`${
              item !== "button" && "border cursor-move rounded-md"
            }`}
          >
            {item === "input-name" ? (
              <input
                className="w-full h-full p-2 border-none outline-none select-none"
                draggable
                value={formData.name}
                type="text"
                placeholder="Enter name"
                onChange={(e) => handleInputChange(e, "name")}
              />
            ) : item === "input-email" ? (
              <input
                className="w-full h-full p-2  border-none outline-none select-none"
                draggable
                value={formData.email}
                type="email"
                placeholder="Enter email"
                onChange={(e) => handleInputChange(e, "email")}
                onDragStart={handleDragStart}
              />
            ) : item === "input-password" ? (
              <input
                type="password"
                value={formData.password}
                className="w-full p-2 h-full pl-2 border-none outline-none select-none"
                placeholder="Enter password"
                onChange={(e) => handleInputChange(e, "password")}
                draggable
              />
            ) : null}
          </div>
        ))}
        {droppedItems.includes("button") && (
          <div
            id="button"
            onDragStart={handleDragStart}
            className="border cursor-move rounded-md"
          >
            <button
              onClick={handleButtonClick}
              draggable
              className="w-full p-2 h-10 rounded-lg text-white font-bold bg-blue-500"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormBuilder;
