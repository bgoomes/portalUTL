import { Outlet } from "react-router-dom";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";

export function AppLayout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}