const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('genre', {
        id: {
            type: DataTypes.INTEGER,
            // autoIncrement: true,
            primaryKey: true,
        },
        name: {
                type: DataTypes.STRING/*([
                    "Action",
                    "Adventure",
                    "Arcade",
                    "Board Games",
                    "Card",
                    "Casual",
                    "Educational",
                    "Family",
                    "Fighting",
                    "Indie",
                    "Massively Multiplayer",
                    "Platformer",
                    "Puzzle ",
                    "Racing",
                    "RPG",
                    "Shooter",
                    "Simulation",
                    "Sports",
                    "Strategy",
                    "Other"
                ])*/,
            allowNull: false,
        },
    },{timestamps : false});
};