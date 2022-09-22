import { useContext } from "react";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { UserContext } from "../Providers/useSearch";

export const Movies = () => {
    const {movie, cardSearch, searchCard, searchMovie} = useContext(UserContext) 

    return (
        <>
        <Header searchCard={searchCard} />
        <Cards/>
        </>
    )
}