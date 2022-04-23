import React from 'react';

const MovieList = (props) => {
    return(
        <>
            {props.movie.map((movie, index) => <div className="d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="Movie picture not found"></img>
                <h1>{movie.Title}</h1>                
            </div>)}
        </>
    )
}