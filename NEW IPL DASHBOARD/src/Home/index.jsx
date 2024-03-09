// HOME.JSX
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from '../TeamCard'; // Importing TeamCard component
import './index.css'


const Home = () => {
  const [teamsList, setTeamsList] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  // GETTING ALL THE TEAMS

  const getTeams = async () => {
    try {
      const response = await axios.get('https://apis.ccbp.in/ipl');
      const data = response.data;
      const updatedData = data.teams.map((eachTeam) => ({
        name: eachTeam.name,
        id: eachTeam.id,
        teamImageURL: eachTeam.team_image_url,
      }));
      setTeamsList(updatedData);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  // RENDERING TEAMS FROM TEAMCARD

  const renderingTeams = () => {
    return (
      <ul className="teams-list">
        {teamsList.map((eachTeam) => (
          <TeamCard teamData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    );
  };

  return (
    <div className="home-route-container">
      <div className="teams-list-container">
        <div className="ipl-dashboard-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        {renderingTeams()}
      </div>
    </div>
  );
};

export default Home;
