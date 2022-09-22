import { useDebounce } from "../useDebounce"
import {BsSearch} from "react-icons/bs"
import { Container } from "./styled"
export const Input= ({searchCard}) => {

    const debouncedChange = useDebounce(searchCard , 500)

    function handleChange(e){
        // setDisplayValue(e.target.value)
        debouncedChange(e.target.value)
    }

    return(
        <Container>
        <input
        type="text"
        onChange={handleChange}
        placeholder="Digite o nome do filme aqui"
        />
        <BsSearch color={"#936262"}/>
        </Container>
    )

}