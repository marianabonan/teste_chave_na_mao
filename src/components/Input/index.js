import {useState} from "react"
import { useDebounce } from "../useDebounce"

export const Input= ({searchCard}) => {

    const {displayValue, setDisplayValue} = useState("text")

    const debouncedChange = useDebounce(searchCard,500)

    function handleChange(e){
        // setDisplayValue(e.target.value)
        debouncedChange(e.target.value)
    }

    return(
        <input
        type="search"
        value={displayValue}
        onChange={handleChange}
        />
        
    )

}