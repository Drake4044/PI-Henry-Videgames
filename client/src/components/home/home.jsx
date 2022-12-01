import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import CardGames from "../cardGame/cardGame";
import NavBar from "../navBar/navBar.jsx";
import { Link } from "react-router-dom";


const Home = () => {
    
    const games = useSelector(state => state.games)

    return(
        <div className="home">
            <NavBar/>
            <Link to="/create" >
                <button>Create Game</button>
            </Link>
            <h1>Juegos</h1>
            <div>
                {games?.map( g => (
                    <CardGames
                    id={g.id}
                    key={g.id}
                    image={g.image}
                    name={g.name}
                    genres={g.genres}
                    platforms={g.platforms}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home