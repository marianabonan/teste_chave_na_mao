import { useContext } from "react";
import { UserContext } from "./Providers/useSearch";


function App() {
  const {searchCard, searchMovie} = useContext(UserContext) 
  console.log(searchCard)
  return (
    <div>
      <button onClick={() => searchMovie("tt0099012")}>pesquisar</button>
    </div>
  );
}

export default App;
