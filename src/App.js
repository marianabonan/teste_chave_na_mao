import { useContext, useState } from "react";
import { UserContext } from "./Providers/useSearch";
import { IndicePage } from "./pages/indice";
import { Movie } from "./pages/movie";


function App() {

  const {movie, cardSearch, searchCard, searchMovie} = useContext(UserContext) 
  const {movieId, setMovieId} = useState()
  
  return (
    <>
    <IndicePage searchCard= {searchCard} setMovieId={setMovieId} cardSearch={cardSearch}/>
    <Movie/>
    </>
  );
}

export default App;
