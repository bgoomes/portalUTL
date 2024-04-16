import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from '../page/home'
import { EdAnterior } from '../page/edanteriores'
export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                 <Route element={ <Home /> } path='/' />
                 <Route element={ <EdAnterior /> } path='/edicoesanteriores' />
            </Routes>   
        </BrowserRouter>
    )
}