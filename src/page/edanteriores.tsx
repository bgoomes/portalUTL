import { Edicao } from "../componentes/card-ed";
import { Header } from "../componentes/header";
import { Footer } from "../componentes/footer";
import { edicoes } from "../data/edicoes/data.json"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicoesanteriores') {
        document.title = title;
      }
    }, [location, title]);
  }

export function EdAnterior() {
    updateTitle('Edições anteriores | UTL Líder')

    return (
        <div>
            <Header />
            <div className="relative top-24 sm:w-[1080px] m-auto px-4 font-stihl-display text-2xl">
              <h1>Edições Anteriores</h1>
            </div>
            
            <section className="relative top-24 sm:w-[1080px] min-h-[500px] grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 mb-28 justify-center m-auto">
                {edicoes.map((edicoes) => {
                    return(
                        <Edicao 
                          title={edicoes.title} 
                          description={edicoes.description} 
                          link={edicoes.link} 
                          cover={edicoes.cover}  
                          key={edicoes.id} 
                        />
                     )
                })}
            </section>
            <Footer />
        </div>
        
    )
}