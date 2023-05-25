import { SIRADAKI_MOVIE,ONCEKI_MOVIE,LISTE_EKLE,BASA_DON,FAVFILM_CIKAR,FILM_ONER } from '../actions/moviesActions';
import  {movies}  from '../../movies';

const initialState = {
  movies : movies,
  sira : 0,
  favmovies :[],
}

export const moviesReducers = (state = initialState, action ) => {
  switch (action.type) {
    case SIRADAKI_MOVIE :
    return {
      ...state,
      sira : Number(state.sira)+1,
    }
    case ONCEKI_MOVIE:
    return {
      ...state,
      sira : Number(state.sira)-1,
    }
    case LISTE_EKLE:
    return {
      ...state,
      favmovies :state.favmovies.filter(item => item.id===action.payload.id).length>0 ? [...state.favmovies] :[...state.favmovies,action.payload],
      movies : state.movies.filter(item =>item.id!==action.payload.id),
      sira : state.sira === state.movies.length-1 ? state.sira-1 :state.sira,
    }
    case BASA_DON :
      return {
        ...state,
        sira :0,
      }
    case FILM_ONER :
    return {
      ...state,
      sira :Math.round(Math.random()*state.movies.length),
    }

    case FAVFILM_CIKAR :
      return{
        ...state,
        movies : [...state.movies,state.favmovies.find(item => item.id === action.payload)],
        favmovies: state.favmovies.filter(item =>item.id!==action.payload),
      }
    
    default:
      return state;
  }
}