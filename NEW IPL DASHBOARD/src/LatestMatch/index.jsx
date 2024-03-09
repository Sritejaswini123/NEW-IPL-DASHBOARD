import React from 'react';
import './index.css';

const LatestMatch = (props) => {
    const { matchData } = props;
    const { competingTeam, competingTeamLogo, matchStatus , umpires,firstInnings, secondInnings, manOfTheMatch, date, venue} = matchData;

    return (
        <div className="latest-match-container">
            <img alt='competingTeamLogo' src={competingTeamLogo} />
            <p>{competingTeam}</p>
            <p>{ matchStatus}</p>
            <p> date{ date}</p>
            <p>venue{venue}</p>
            <div>
                <p>umpires: { umpires}</p>
                <p> firstInnings{firstInnings}</p>
                <p> secondInnings{ secondInnings}</p>
                <p>  manOfTheMatch{ manOfTheMatch}</p>
            </div>
            </div>

    );
};

export default LatestMatch;