import { useState } from "react";
//import "./createTodo.css"

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const json = await response.json();
      alert("Todo Added!");
      // Optionally, you can reset the form after adding a todo
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    }
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />

      <label htmlFor="desc">Description:</label>
      <input
        id="desc"
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
