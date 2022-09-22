import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Providers/useSearch"
import { Container } from "./styled"

export const Cards = () => {
    const {cardSearch} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (id) =>{
        navigate(`${id}`)
    }

    return(
        <Container>
            <ul>
                {cardSearch?.map((movie) =>{
                    return(
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={`Poster de ${movie.Title}`}></img>
                            <p>{movie.Title}</p>
                            <div> <p>{movie.Year}</p>
                            <p>{movie.type}</p>
                            <button onClick={() =>{ handleClick(movie.imdbID)}}>Ver mais sobre</button></div>
                           
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}