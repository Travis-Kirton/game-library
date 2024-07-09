import React, { useEffect, useState } from "react";

import './landing.css'
import NavBar from "../components/NavBar";
import GameTile from "../components/GameTile";

const Landing = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/games')
            .then(data => data.json())
            .then(data => {
                setGames(data);
            });
    }, []);

    return (
        <div className="screen">
            <NavBar />
            <div className="wrap">
                <h1 className="title">
                        Games in Library
                </h1>
                <hr className="gradientHr"/>
                <div className="games">
                    {games.map(game => (
                        <GameTile gameInfo={game} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Landing;