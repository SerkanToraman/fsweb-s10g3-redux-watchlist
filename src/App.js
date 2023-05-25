import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { oncekiMovie,siradakiMovie,listemeEkle,basaDon, filmOner } from './store/actions/moviesActions';
import { useSelector, useDispatch, } from "react-redux";

function App() {

  const dispatch = useDispatch();
  // const [sira, setSira] = useState(0); redux ile gonderildi
  const favMovies = useSelector((store)=>store.moviesReducers.favmovies);
  const movies =useSelector((store) => store.moviesReducers.movies);
  const sira =useSelector((store) => store.moviesReducers.sira);
   console.log("favmovie",favMovies);
  
  // const movies =useSelector((store) => store.yonReducer.movies);
  // const sira =useSelector((store) => store.yonReducer.sira);
  // const movie = movies[sira];

  
  //useSelector((store) => store.listemReducers.favmovies);

  // function sonrakiFilm() {
  //   setSira(sira + 1);
  // } redux ile gonderildi

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
         { movies.length >0 ?(
          <>
            <Movie  /> 
            {/* sira={sira}  redux action olarak gonderdigimden kaldirmdim*/}
            <div className="flex gap-3 justify-end py-3">
            <button
                onClick={()=>{dispatch(basaDon())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 }`}
              >
                Başa Dön
            </button>
            <button
              onClick={()=>{dispatch(filmOner())}}
              className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 }`}
            >
              Film Öner
            </button>
            <button disabled={sira<=0}
                onClick={()=>{dispatch(oncekiMovie())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 ${sira<=0 && 'bg-red-200'}`}
              >
                Önceki
              </button>
              <button
                disabled={sira===movies.length-1}
                onClick={()=>{dispatch(siradakiMovie())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 ${sira===movies.length-1 && 'bg-red-200'}`}
              >
                Sıradaki
              </button>
              <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" onClick={()=>(dispatch(listemeEkle(movies[sira])))} >
                Listeme ekle
              </button>
            </div>
          </>) :
          <div>Tüm filmler eklediniz</div>}
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
