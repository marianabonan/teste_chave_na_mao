import { useContext, useState } from "react";
import { UserContext } from "./Providers/useSearch";
import { IndicePage } from "./pages/indice";


function App() {

  const {searchCard, searchMovie} = useContext(UserContext) 
  const {movieId, setMovieId} = useState()
  
  return (
    <IndicePage searchCard= {searchCard} setMovieId={setMovieId}/>
    // <div>
    //   <button onClick={() => searchMovie("tt0099012")}>pesquisar</button>
    // </div>
  );
}

export default App;
