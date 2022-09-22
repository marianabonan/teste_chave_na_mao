import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Providers/useSearch";

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { searchMovie, movie } = useContext(UserContext);

  useEffect(() => {
    if (!movie) {
      searchMovie(id);
    }
  }, [searchMovie, id]);

  if(movie?.Response === "False"){
    return navigate("*")
  }
  return (
    <div>
      {!movie ? (
        "carregando... :D"
      ) : (
        <div>
          <div>
            <img src={movie.Poster} alt={`Poster de ${movie.Title}`} />
          </div>
          <div>
            <h1>{movie.Title}</h1>
            <div>
              <span>{movie.Year}</span>
              <span>{movie.Director}</span>
              <span>{movie.Runtime}</span>
            </div>
            <div>
              <p>{movie.Plot}</p>
              <p>{movie.Actors}</p>
              <p>{movie.Awards}</p>
            </div>
          </div>
          <div>
            <div>
              {movie.Genre?.split(", ").map((genre, index) => (
                <p key={genre+index}>{genre}</p>
              ))}
            </div>
            <div>
                <p> Metascore {movie.Metascore}</p>
                <p>imdbRating {movie.imdbRating}</p>
                {movie.Ratings?.map((ratings,index) =>
                    <div key={ratings+index}>
                        <p>{ratings.Source}</p>
                        <p>{ratings.Value}</p>
                    </div> 
                )}
            </div>
            <div>
              <span>{movie.BoxOffice}</span>
              <span>{movie.DVD}</span>
              <span>
                {movie.Language} / {movie.Country}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
