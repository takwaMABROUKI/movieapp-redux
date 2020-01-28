import { MOVIE_ADD,MOVIE_REMOVE, MOVIE_EDIT,FIND_BYNAME,FIND_BYRATING, MOVIE_FETCH } from './action-type.js'
import axios from 'axios'

export const addNewMovie=(newMovie)=>(
    { type:MOVIE_ADD,payload:newMovie
}

)
export const deleteMovie=(_id)=>(
    { type:MOVIE_REMOVE, payload:_id

    }
)
export const editMovie=(id, newMovie)=>(
    { type:MOVIE_EDIT, payload:{id,newMovie}

    }
)
export const filterByName=(filmSearch) =>(
    {type:FIND_BYNAME, payload:filmSearch}
)
export const filterByRating=(rateSearch) =>(
    {type: FIND_BYRATING, payload:rateSearch}
)


export const fetchMovies=()=>dispatch=>{
    axios({ method:'get', url:'https://tv-v2.api-fetch.website/movies/1'})
    .then(res=>res.data)
    .then(data=>{
        console.log(data);
        dispatch({

            type:MOVIE_FETCH,
            payload: data  
        });
    }
        )
}
   