import React from 'react';
import { Link } from 'react-router-dom';
import '../Team/Team.css';


class Team extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/team">Team</Link></li>
                </ul>
            </div>
        );
    }
}

export default Team;
