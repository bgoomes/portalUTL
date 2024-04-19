import { useLocation } from "react-router-dom";
import { Page68 } from "../data/pageEdicoes/pageEd68";
import { useEffect } from "react";


function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/') {
        document.title = title;
      }
    }, [location, title]);
  }
export function Home(){
    updateTitle('#68 | UTL Líder')
   
    return (
        <Page68 />
    )
}