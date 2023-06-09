import propTypes from "prop-types";
import {
Link
} from "react-router-dom";

function Movie({mediumCoverImg, title, summary, genres, id}){
    return  (
        <div>
        <img  src={mediumCoverImg} alt={title}/>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
          {genres.map(g =>(
            <li key={g}>{g}</li>
          ))}
        </ul>
        </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    mediumCoverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;