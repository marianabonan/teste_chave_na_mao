import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Providers/useSearch"

export const Cards = () => {
    const {cardSearch} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (id) =>{
        navigate(`${id}`)
    }

    return(
        <div>
            <ul>
                {cardSearch?.map((movie) =>{
                    return(
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={`Poster de ${movie.Title}`}></img>
                            <p>{movie.Title}</p>
                            <p>{movie.Year}</p>
                            <p>{movie.type}</p>
                            <button onClick={() =>{ handleClick(movie.imdbID)}}>Ver mais sobre</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}