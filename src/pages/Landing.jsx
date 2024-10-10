import React, { useEffect, useState } from "react";

import './landing.css'
import NavBar from "../components/NavBar";
import GameTile from "../components/GameTile";

const Landing = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // FIX ME: should be getting all games?
        fetch('http://localhost:3001/games')
            .then(data => data.json())
            .then (results => {
                console.log(results);
                setGames(results);
            })
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