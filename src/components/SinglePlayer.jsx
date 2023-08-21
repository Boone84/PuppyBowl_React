// vite-project/src/components/SinglePlayer.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayer } from "../API/index.js";
import "./SinglePlayer.css";

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetchPlayer(id);
        if (response.success && response.data.player) {
          setPlayer(response.data.player);
        } else {
          console.error("API data is not in the expected format:", response);
        }
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };

    getPlayer();
  }, [id]);

  const API_URL = "https://your-api-url-here";
  
  const handleDeletePlayer = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirmation) return;
  
    try {
      const response = await fetch(`${API_URL}/players/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        console.log("Player deleted successfully!");
        
      } else {
        console.error("Failed to delete player:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };
  

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-player-container">
      <h1 id="player-name">{player.name}</h1>
      <img src={player.imageUrl} alt={player.name} className="player-image" />
      <p className="playerdetails">Breed: {player.breed}</p>
      <p className="playerdetails">Status: {player.status}</p>
      <button onClick={handleDeletePlayer} className="delete-button">
        Delete Player
      </button>
    </div>
  );
};

export default SinglePlayer;
