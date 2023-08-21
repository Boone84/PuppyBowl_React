// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../API/index.js";
import { Link } from "react-router-dom";
import "./AllPlayers.css";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await fetchPlayers();
      if (response.success && Array.isArray(response.data.players)) {
        setPlayers(response.data.players);
      } else {
        console.error("API data is not in the expected format:", response);
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      <div className="player-list-container">
        {players.map((player) => (
          <div key={player.id} className="player-item">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />
            <span className="player-name">{player.name}</span>
            <Link to={`/players/${player.id}`} className="player-details">
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;
