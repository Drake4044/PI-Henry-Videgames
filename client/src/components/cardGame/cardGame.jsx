import "./cardGame.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteGame } from "../../redux/actions";


class CardGames extends React.Component  {
    
    render() {

    const onClick = () =>{
        this.props.deleteGame(this.props.id)
    }

    return (
        <div className="card">
            <button onClick={onClick} >X</button>
            <Link to={`/videogames/${this.props.id}`}>
                <img src={this.props.image} alt="imagen del juego" />
                <h1>{this.props.name}</h1>
                <h3>{this.props.genres}</h3>
                <h2>{this.props.platforms}</h2>
            </Link>
        </div>  
    )}
}


export const mapDispatchToProps = { deleteGame }


export default connect(null, mapDispatchToProps)(CardGames)