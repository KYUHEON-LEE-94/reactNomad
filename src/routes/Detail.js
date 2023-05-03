
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Detail(){
    const [loading, setLoding] = useState(true);
    const [movie, setMovies] = useState(true);
    const {id} = useParams()

    const getMovice = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
        setMovies(json.data.movie);
        setLoding(false);
    }

    useEffect(()=>{
        getMovice()
    },[])

    return <div>
    {loading? <h1>Loding..</h1>:
        <div>
            <div>
                <img  src={movie.medium_cover_image} alt={movie.title}/>
                <h2>{movie.title} <span style={{fontSize:'20px'}}>/({movie.rating})</span></h2>
                    
                <div>{movie.description_full}</div>
            </div>
        </div>} 
  </div>;
}
export default Detail;