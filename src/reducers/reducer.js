import { MOVIE_ADD,MOVIE_REMOVE, MOVIE_EDIT,FIND_BYNAME,FIND_BYRATING } from '../actions/action-type.js'
import {Movies}from '../data'
const initState={
    Movies,
    filmSearch:"",
    rateSearch:0
}
  
  
 
export const reducerList=(state=initState,action)=>{
    switch(action.type){
        case MOVIE_ADD:
            // return (state.Movies.concat(action.payload));
            return{...state,Movies:[...state.Movies,action.payload]}

        case MOVIE_REMOVE:
            // return state.Movies.filter((el,i)=> el.id!==(action.payload));
            return{...state,Movies:state.Movies.filter((el,i)=>(el.id!==action.payload))}
                    
         case MOVIE_EDIT:
            //   return state.map(el=> el.id==action.payload.id?
            //      {...el,
            //         title:action.payload.title,
            //         year:action.payload.year,
            //         image:action.payload.image,
            //         rate:action.payload.rate}
            //      :el); 
            return{...state,Movies:state.Movies.map(el=> el.id==action.payload.id?
                     {...el,
                        title:action.payload.title,
                        year:action.payload.year,
                        image:action.payload.image,
                        rate:action.payload.rate}
                     :el)}

           case FIND_BYNAME:
           // return (action.payload);
           return {...state,filmSearch:action.payload}

        case FIND_BYRATING:
            return {...state,rateSearch:action.payload}
            
        
         default: return state
    }}
