import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Movie } from '../pages/movie'
import { Movies} from '../pages/movies'

export const Routers = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/filmes/:id" element={<Movie/>}/>
            </Routes>
        </BrowserRouter>
    )
}