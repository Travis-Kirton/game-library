import React from "react";
import { Link } from 'react-router-dom'
import './gameTile.css';

const GameTile = (props) => {
    return (
        <div className="wrapper">
            <Link to={`/game/${props.gameInfo.id}`}>
            <div>
                <img className="boxArt" src={props.gameInfo.image_url} alt={props.gameInfo.title}/>
            </div>
          </Link>
          <p>FIX ME: show title</p>
        </div>
    );
}

export default GameTile;