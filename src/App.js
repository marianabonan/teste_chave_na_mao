import { useContext } from "react";
import { UserContext } from "./Providers/useSearch";
import { Heather } from "./components/Heather";


function App() {
  const {searchCard, searchMovie} = useContext(UserContext) 
  
  return (
    <Heather searchCard={searchCard}/>
    // <div>
    //   <button onClick={() => searchMovie("tt0099012")}>pesquisar</button>
    // </div>
  );
}

export default App;
