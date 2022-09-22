import { useState} from "react";
import { Cards } from "../components/Cards";
import { Heather } from "../components/Heather";

export const IndicePage = (searchCard, setMovieId ) => {
    const {moviesList, setMoviesList} = useState()

    return (
        <>
        <Heather searchCard={searchCard} setMovieList={setMoviesList}/>
        <Cards moviesList={moviesList}/>
        </>
    )

}