import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

const Movie = (props) => {
    return (
        <div className="Movie"> 
            <div className="Movie_Columns">
                <MoviePoster poster={props.poster} alt={props.title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{props.title}</h1>
                <div className="Movie__Genres">
                    {props.genres.map((genre, idx) => <MovieGenre genre={genre} key={idx} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis 
                        text={props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        baseOn='words'
                    />
                </div>
            </div>
        </div>
    )
};


const MoviePoster = (props) => {
    return (
        <img src={props.poster} alt={props.alt} title={props.alt} className="Movie__Poster"/>
    )
};

const MovieGenre = (props) => {
    return (
        <span className="Movie__Genre">{props.genre}</span>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}


export default Movie;

//smart component에서는 propTypes를 render() 위에 아래와 같이 쓴다.
//static propTypes = {
//    title: PropTypes.string.isRequired,
//    poster: PropTypes.string
//}

