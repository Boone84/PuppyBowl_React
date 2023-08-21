// vite-project/src/components/AddPlayer.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./AddPlayer.css";
import { addPlayer } from "../API/index.js";

const AddPlayer = () => {
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    status: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addPlayer(playerData);

      if (response && response.success) {
        console.log("Player added successfully!");
        setAlertMessage("Player added successfully!");
      } else {
        console.error("Failed to add player:", response);
        setAlertMessage("Failed to add player. Please try again.");
      }
    } catch (error) {
      console.error("Error adding player:", error);
      setAlertMessage("Error adding player. Please try again.");
    }
  };
  return (
    <div className="form-container">
      <h2>Add New Player</h2>
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={playerData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="form-label">Breed:</label>
          <input
            className="form-input"
            type="text"
            name="breed"
            value={playerData.breed}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="form-label">Image URL:</label>
          <input
            className="form-input"
            type="url"
            name="imageUrl"
            value={playerData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="form-label">Status:</label>
          <input
            className="form-input"
            type="text"
            name="status"
            value={playerData.status}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="form-button" type="submit">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;
