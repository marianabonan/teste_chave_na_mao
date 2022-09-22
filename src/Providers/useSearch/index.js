import { createContext, useState} from "react";
import api from "../../services/api";

export const UserContext = createContext()

export const SearchProvider = ({ children }) => {
 const [cardSearch, setCardSearch] = useState()
 const [movie, setMovie] = useState()
 const [page, setPage] = useState(1)
 const [value,setValue] = useState()

 console.log(page)
 
 const searchCard= (input) => {
    if(!input)return 
    if(input !== value){
        setPage(1)
    }
    console.log('oi',page)
    api.get(`&s=${input}&page=${page}`)
     .then(res =>{
         if(page===1){
           setCardSearch(res.data.Search)  
         }else{
            setCardSearch([...cardSearch,...res.data.Search])
         }
         
     })
 }
 const searchMovie= (movieId) => {
     api.get(`&i=${movieId}`)
     .then(res=>{
         setMovie(res.data)
        //  console.log(res.data)
     })
 }

 const nextPage= () =>{
     setPage(page + 1)
 }

 return(
     <UserContext.Provider value={{movie, cardSearch, searchCard, searchMovie, nextPage, setValue, page}}>{children}</UserContext.Provider>
 )
}
