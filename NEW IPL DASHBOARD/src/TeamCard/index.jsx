import  {Link } from 'react-router-dom'
import './index.css'
const TeamCard = (props) =>{
const {teamData} = props;
const {name , teamImageURL ,id} = teamData;

return(
    <Link to = {`/team-matches/${id}`} className='lnk-item'>
        <li className='team-card'>
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
    
        </li>
    </Link>
)
}
export default TeamCard