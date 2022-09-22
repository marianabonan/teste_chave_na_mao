// import { Cards } from "../components/Cards";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";

export const IndicePage = ({searchCard, setMovieId, cardSearch }) => {

    return (
        <>
        <Header searchCard={searchCard} />
        <Cards/>
        </>
    )
}