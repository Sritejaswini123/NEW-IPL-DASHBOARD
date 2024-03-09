import React from 'react';
import './index.css';

const LatestMatch = (props) => {
    const { matchData } = props;
    const { competingTeam, competingTeamLogo } = matchData;

    return (
        <div className="latest-match-container">
            <img alt='competingTeamLogo' src={competingTeamLogo} />
            <p>{competingTeam}</p>
        </div>
    );
};

export default LatestMatch;