import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from '../page/home'
import { EdAnterior } from '../page/edanteriores'
import { Page65 } from '../data/pageEdicoes/pageEd65'
import { Page66 } from '../data/pageEdicoes/pageEd66'
import { Page67 } from '../data/pageEdicoes/pageEd67'
import { Page68 } from '../data/pageEdicoes/pageEd68'
export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                 <Route element={ <Home /> } path='/' />
                 <Route element={ <EdAnterior /> } path='/edicoesanteriores' />
                 <Route element={ <Page65 /> } path='/edicao65' />
                 <Route element={ <Page66 /> } path='/edicao66' />
                 <Route element={ <Page67 /> } path='/edicao67' />
                 <Route element={ <Page68 /> } path='/edicao68' />
            </Routes>   
        </BrowserRouter>
    )
}