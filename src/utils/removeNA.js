export const removeNA = (movie) =>{

    const keys = Object.keys(movie)
    const values = Object.values(movie)
    const filter = {}
    for (let i = 0; i < keys.length; i++){
        if(values[i] !== "N/A"){
            filter[keys[i]] = values[i]
        }
    }
    return filter;
}