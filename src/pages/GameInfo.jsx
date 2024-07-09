import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import NavBar from "../components/NavBar";

import './gameInfo.css';

const GameInfo = (props) => {
    const [game, setGame] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`FIX ME`)
            .then(data => data.json())
            .then(data => {
                setGame(data);
            });
    }, []);

    const formatDate = (date) => {
        return date; // FIX ME
    }

    return game && (
        <div className="screen">
            <NavBar />
            <div className="wrap">
                <div className="infoContainer">
                    <div className="details">
                        <div className="title">{game.title}</div>
                    
                        <div className="gameInfo">
                            Platform
                            <p>{game.platform}</p>
                        </div>
                        <div className="gameInfo">
                            Genre
                            <p>{game.genre}</p>
                        </div>
                        <div className="gameInfo">
                            Release Date
                            <p>{formatDate(game.release_date)}</p>
                        </div>
                        <div className="gameInfo">
                            #No of Players
                            <p>{game.num_players}</p>
                        </div>
                        <div className="gameInfo">
                            Publisher
                            <p>{game.publisher}</p>
                        </div>
                    </div>
                    <div className="image">
                        <img className="gameImage" src={game.image_url} alt={game.title} />
                    </div>
                    <div className="gameDescription">
                        <h1>About the Game</h1>
                        <hr className="gradientHr"/>
                        <p>{game.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameInfo;