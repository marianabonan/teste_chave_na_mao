import { useDebounce } from "../useDebounce"
import {BsSearch} from "react-icons/bs"
import { Container } from "./styled"
import { useContext } from "react"
import { UserContext } from "../../Providers/useSearch"

export const Input= ({searchCard}) => {
    const {setValue}=useContext(UserContext)

    const debouncedChange = useDebounce(searchCard, 500)

    function handleChange(e){
        setValue(e.target.value)
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