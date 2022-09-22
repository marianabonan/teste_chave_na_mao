export const Cards = (moviesList) => {

    return(
        <div>
            <ul>
                {moviesList.map((movie) =>{
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