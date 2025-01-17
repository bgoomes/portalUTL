import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import { Page72 } from "../data/pageEdicoes/pageEd72"


function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/') {
        document.title = title;
      }
    }, [location, title]);
  }
export function Home(){
    updateTitle('#72 JANEIRO 2025 | UTL Líder')
   
    return (
        <Page72 />
    )
}