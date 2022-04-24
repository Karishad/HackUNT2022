import React, { useState } from 'react'
import MovieList from "./movieList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./movie.css";

const Movies = () => {
    const [movie, setMovie] = useState([
        {
            "Title": "Space Jam",
            "Poster": "../MovieImages/SpaceJam.jpg",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Space Jam - A New Legacy",
            "Poster": "../MovieImages/SpaceJamANewLegacy.webp",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Space Balls",
            "Poster": "../MovieImages/SpaceBalls.webp",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Space Odyssey",
            "Poster": "../MovieImages/2001ASpaceOdyssey.jpg",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Mars Attack!",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "The Martian",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Interstellar",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Planet 51",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Gravity",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Guardians of the Galaxy",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        },
        {
            "Title": "Alien",
            "Poster": "",
            "Times": "",
            "Seats Avalaible": ""
        }
    ]);

    const renderForm = {

    };

    return (<div className="container-fluid rows">
        <div className="row"><MovieList movie={movie} /></div>

    </div>
    );
};

export default Movies;
