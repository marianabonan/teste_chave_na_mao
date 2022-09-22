import { createContext, useState} from "react";
import api from "../../services/api";

export const UserContext = createContext()

export const SearchProvider = ({ children }) => {
 const [cardSearch, setCardSearch] = useState()
 const [movie, setMovie] = useState()
 
 const searchCard= (input) => {
    if(!input)return 
    
    api.get(`&s=${input}`)
     .then(res =>{
         setCardSearch(res.data.Search)
     })
 }
 const searchMovie= (movieId) => {
     api.get(`&i=${movieId}`)
     .then(res=>{
         setMovie(res.data)
        //  console.log(res.data)
     })
 }

 return(
     <UserContext.Provider value={{movie, cardSearch, searchCard, searchMovie}}>{children}</UserContext.Provider>
 )
}
