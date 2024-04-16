import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";

export function Home(){
    return (
        <div>
            <Header />
            <section className="relative top-24 border-4 w-[1080px] flex justify-center m-auto">
                <h1 className=" font-stihl-display">home</h1>
            </section>
            <Footer />
        </div>
    )
}