import { MOVIE_ADD,MOVIE_REMOVE, MOVIE_EDIT,FIND_BYNAME,FIND_BYRATING } from './action-type.js'

export const addNewMovie=(newMovie)=>(
    { type:MOVIE_ADD,payload:newMovie
}

)
export const deleteMovie=(id)=>(
    { type:MOVIE_REMOVE, payload:id

    }
)
export const editMovie=(id,title,year,image,rate)=>(
    { type:MOVIE_EDIT, payload:{id,title,year,image,rate}

    }
)
export const filterByName=(filmSearch) =>(
    {type:FIND_BYNAME, payload:filmSearch}
)
export const filterByRating=(rateSearch) =>(
    {type: FIND_BYRATING, payload:rateSearch}
)