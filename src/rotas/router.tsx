import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/home";
import { EdAnterior } from "../page/edanteriores";
import { Page68 } from "../data/pageEdicoes/pageEd68";
import { Page69 } from "../data/pageEdicoes/pageEd69";
import { Page70 } from "../data/pageEdicoes/pageEd70";
import { Page71 } from "../data/pageEdicoes/pageEd71";
import { Page72 } from "../data/pageEdicoes/pageEd72";

export const router = createBrowserRouter([

    {path: "/", element: <Home />},
    {path: "/edicoesanteriores", element: <EdAnterior />},
    {path: "/edicao68", element: <Page68 />},
    {path: "/edicao69", element: <Page69 />},
    {path: "/edicao70", element: <Page70 />},
    {path: "/edicao71", element: <Page71 />},
    {path: "/edicao72", element: <Page72 />}
])