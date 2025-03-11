import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import { Page73 } from "../data/pageEdicoes/pageEd73"
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";


function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/') {
        document.title = title;
      }
    }, [location, title]);
  }
export function Home(){
    updateTitle('#73 MARÇO 25 | UTL Líder')
   
    return (
      <>
        <Header />
        <Page73 />
        <Footer />
      </>
    )
}