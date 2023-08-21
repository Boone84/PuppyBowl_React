// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from '../API/index.js';
import './SinglePlayer.css';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  const getPlayer = async () => {
    try {
      const response = await fetchPlayer(id);
      if (response.success && response.data.player) {
        setPlayer(response.data.player);
      } else {
        console.error('API data is not in the expected format:', response);
      }
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  };

  const handleDeletePlayer = async () => {
    try {
      // Here, add the code to delete the player data in your API.
      // For example, using the fetch API to send a DELETE request.
      const response = await fetch(`your_api_url_here/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Player deleted successfully!');
        // Handle navigation or state change here after successful deletion.
      } else {
        console.error('Failed to delete player:', await response.json());
      }
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  useEffect(() => {
    getPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-player-container">
      <h1>{player.name}</h1>
      <img src={player.imageUrl} alt={player.name} className="player-image" />
      <p className="player-details">Breed: {player.breed}</p>
      <p className="player-details">Status: {player.status}</p>
      <button onClick={handleDeletePlayer} className="delete-button">Delete Player</button>
    </div>
  );
};

export default SinglePlayer;
