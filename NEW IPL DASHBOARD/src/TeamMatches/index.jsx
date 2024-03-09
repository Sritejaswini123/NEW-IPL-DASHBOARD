import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LatestMatch from '../LatestMatch';
import './index.css';

const TeamMatches = () => {
  const { id } = useParams();
  const [recentMatchesData, setRecentMatchesData] = useState([]);

  const getRecentMatches = async () => {
    try {
      const response = await axios.get(`https://apis.ccbp.in/ipl/${id}`);
      const fetchedData = response.data;
      

      const getFormattedObject = data => ({
        umpires: data.umpires,
        result: data.result,
        manOfTheMatch: data.man_of_the_match,
        id: data.id,
        date: data.date,
        venue: data.venue,
        competingTeam: data.competing_team,
        competingTeamLogo: data.competing_team_logo,
        firstInnings: data.first_innings,
        secondInnings: data.second_innings,
        matchStatus: data.match_status,
      })

    

      const formattedData = {
        teamBannerURL: fetchedData.team_banner_url,
        latestMatch: getFormattedObject(fetchedData.latest_match_details), 
      }

      const mainData = formattedData.latestMatch
      console.log(mainData )

      setRecentMatchesData([mainData]);


      
    }
  
    catch (error) {
      console.error('Error fetching data:', error);
     
    }
  };

  useEffect(() => {
    getRecentMatches();
  }, []);


  return (
    <div>
      <h1>Team match details</h1>
      <div>

      {recentMatchesData.map((each) => (
          <LatestMatch matchData={each} key={each.id} />
        ))}
      </div>
      
    </div>
  );
  
 
};

export default TeamMatches;