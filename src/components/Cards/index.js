import { useContext } from "react"
import { UserContext } from "../../Providers/useSearch"

export const Cards = () => {
    const {cardSearch} = useContext(UserContext)

    console.log(cardSearch)

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
                            <button>Ver mais sobre</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}