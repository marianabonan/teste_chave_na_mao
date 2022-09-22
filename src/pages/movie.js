import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Providers/useSearch";
import { removeNA } from "../utils/removeNA";
import { AsideInfo, Box, BoxAbout, BoxAside, BoxGenre, BoxInfo, Container, Page, Ratings } from "./styled";

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { searchMovie, movie: rawMovie } = useContext(UserContext);

  const [movie, setMovie] = useState()

  useEffect(() => {
    if (!rawMovie) {
      searchMovie(id);
    }else{
        setMovie(removeNA(rawMovie)) 
    }
  }, [searchMovie, id]);

  if(rawMovie?.Response === "False"){
    return navigate("*")
  }
  

  
  return (
    <Page>
      {!rawMovie ? (
        "carregando... :D"
      ) : (
        <Container>
            <img src={movie?.Poster} alt={`Poster de ${movie?.Title}`} />
          <Box>
            <h1>{movie?.Title}</h1>
            <BoxInfo>
              <span>{movie?.Year}</span>
              <span>{movie?.Director}</span>
              <span>{movie?.Runtime}</span>
            </BoxInfo>
            <p>{movie?.Plot}</p>
            <BoxAbout>
              <p>{movie?.Actors}</p>
              <p>{movie?.Awards}</p>
            </BoxAbout>
          </Box>
          <BoxAside>
            <BoxGenre>
              {movie?.Genre?.split(", ").map((genre, index) => (
                <p key={genre+index}>{genre}</p>
              ))}
            </BoxGenre>
            <div>
                <p> Metascore:{movie?.Metascore}</p>
                <p>imdbRating:{movie?.imdbRating}</p>
                {movie?.Ratings?.map((ratings,index) =>
                    <Ratings key={ratings+index}>
                        <p>{ratings.Source}: </p>
                        <p>{ratings.Value}</p>
                    </Ratings> 
                )}
            </div>
            <AsideInfo>
              <span>{movie?.BoxOffice}</span>
              <span>{movie?.DVD}</span>
              <span>
                {movie?.Language} / {movie?.Country}
              </span>
            </AsideInfo>
          </BoxAside>
        </Container>
      )}
    </Page>
  );
};
