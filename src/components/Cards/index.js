import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Providers/useSearch"
import { Box, Container } from "./styled"
import Gatinho from "../../assets/Gatinho.gif"

export const Cards = () => {
    const {cardSearch, nextPage} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (id) =>{
        navigate(`${id}`)
    }
    console.log(cardSearch, !cardSearch?.lenght )
    return(
        <Container>
            {!cardSearch || cardSearch.lenght < 1? ( <Box>
                    <p> Opss.... Ainda não temos nada por aqui, pesquise sobre seus filmes. </p>
                    <img src={Gatinho} alt="gatinho"/>

            </Box>):(
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
            )}
        </Container>
    )
}