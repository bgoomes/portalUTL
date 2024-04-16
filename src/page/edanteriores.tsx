import { Edicao } from "../componentes/card-ed";
import { Header } from "../componentes/header";
import img from "../assets/natureza.avif"
import { Footer } from "../componentes/footer";

export function EdAnterior() {
    return (
        <div>
            <Header />
            <section className="relative top-24 w-[1080px] grid grid-cols-3 gap-8 p-4 mb-28 justify-center m-auto">
                {Array.from({ length: 7}).map((_, i) => {
                    return(
                       <Edicao title="edição 90" description="isso e um texto sem nenhum sentido porque estou com preguiça de escrever." link="#" cover={img}  key={i} />
                    )
                })}
                 
            </section>
            <Footer />
        </div>
        
    )
}