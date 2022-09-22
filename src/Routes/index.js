import {Switch, Route} from 'react-router-dom'
import { IndicePage } from '../pages/indice'

const Routers = () =>{
    return(
        <Switch>
            <Route path="/">
                <IndicePage/>
            </Route>
        </Switch>
    )
}