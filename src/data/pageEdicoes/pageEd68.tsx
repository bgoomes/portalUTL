import { useLocation } from "react-router-dom";
import { Footer } from "../../componentes/footer";
import { Header } from "../../componentes/header";
import { useEffect } from "react";

import { FooterEd } from "../../data/pageEdicoes/componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao68') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page68(){
    updateTitle('#68 | UTL Líder')
    return(
        <div className="">
            <Header />
            <section className="relative shadow-slate-400 shadow-xl top-24 w-[700px] flex flex-col items-center m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-capa.png" alt="UTL Lider edição 68" />
                </div>
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-partiu2028.png" alt="#partiu 2028" />
                </div>
                <div className="w-full flex flex-row gap-6 px-9 pt-4 bg-white">
                    <div className="w-1/2 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/icone_01.png" alt="" className="w-[80px]"/>
                            <h1 className=" text-laranjaStihl font-bold">ORIENTAÇÃO ESTRATÉGICA</h1>
                            <p>Atingir o faturamento mínimo de R$ 5 bilhões até 2028, garantindo a alta qualidade dos produtos e serviços com pessoas engajadas, motivadas e em conformidade com a cultura corporativa e o SIG - Sistema Integrado de Gestão, visando à satisfação do cliente.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/icone_02.png" alt="" className="w-[80px]"/>
                            <h1 className="text-laranjaStihl font-bold">OBJETIVOS:</h1>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-objetivos.png" alt="" />
                        </div> 
                    </div>
                    
                    <div className="w-1/2 text-right">
                       <p>
                            “Em 2023 a STIHL enfrentou grandes desafios que trouxeram muitos aprendizados e também conquistas. 
                            Apesar do cenário, reforçamos o nosso pioneirismo em boas práticas e nos consolidamos como referência em vários aspectos, 
                            fruto do trabalho e da dedicação de um time incansável e sempre atento. Para 2024-2028, a orientação estratégica traz premissas importantes, 
                            como a qualidade de todos os produtos e processos, comprometimento das pessoas e satisfação máxima dos clientes. 
                            Contamos novamente com o empenho de vocês para conduzir esse período da melhor forma junto às suas equipes, perseguindo o atingimento dos nossos objetivos todos os dias. Afinal, 
                            é o que fazemos hoje que determina o nosso futuro.
                       </p>
                       <span className="flex my-4">Vamos construir uma STIHL ainda melhor.</span>
                       <p className="font-bold">CLÁUDIO GUENTHER</p>
                       <span>PRESIDENTE</span>
                    </div>
                </div>

                <div className="w-full h-48 flex flex-col items-center justify-center bg-laranjaStihl mt-4 text-white">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-bold">PESSOAS NO CENTRO</h1>
                        <p className=" underline">Entre os objetivos de sustentação, destaca-se o pilar Pessoas:</p>
                    </div>
                    <ul className="flex p-5 list-disc text-sm gap-4 mx-auto">
                        <li>Reforçar a cultura de gestão</li>
                        <li>Expandir competências digitais</li>
                        <li>Garantir condições de trabalho seguras</li>
                    </ul>
                </div>

                <div className="w-full bg-gray flex flex-col gap-4 ">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-motivacao.png" alt="" />
                    <p className="px-9 font-bold">Decolando juntos em 2024! As lideranças STIHL estão focadas em fazer acontecer nos próximos meses.</p>

                    <div className="px-9 flex flex-col gap-4 mb-8">
                       <a href="https://www.utilissimolider.com.br/UTL/utl-68/Oquemotivavoce.mp4" target="_blank"><img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-video.png" alt="" /></a>
                       <p>Aperte o play e confira a principal motivação de Antonio Marcos de Oliveira, Cesar Amaral, Cristiane Mobus, Flávia Bortolucci e Sidnei Baronio.</p>
                       <span className="text-laranjaStihl font-bold">E você? Deixe a sua frase nos comentários.</span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-4">
                        <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-10dicas.png" alt="" />
                        <h1 className="px-9 font-bold">Confira orientações para um encontro online organizado e eficiente para todos os participantes.</h1>
                    </div>
                    <div className="flex flex-row gap-6 px-9 mt-8">
                        <div className="w-1/2 flex flex-col gap-4">
                           
                            <p><span className="text-laranjaStihl">1. </span>Avalie a necessidade da agenda. Quem sabe não possa ser resolvido pelo bate-papo do Webex.</p>
                            <p><span className="text-laranjaStihl">2. </span>Não marque reuniões de última hora.</p>
                            <p><span className="text-laranjaStihl">3. </span>Roteirize a sua reunião com tópicos que precisam ser abordados.</p>
                            <p><span className="text-laranjaStihl">4. </span>Evite falar simultaneamente com outra pessoa. Quando uma voz se sobrepõe à outra, ninguém se entende.</p>
                            <p><span className="text-laranjaStihl">5. </span>Levante a mão para falar e aguarde a sua vez..</p>
                            <p><span className="text-laranjaStihl">6. </span>Se não estiver falando, ponha o microfone no mudo. Mesmo que o ambiente pareça estar silencioso, os ruídos captados pelo microfone prejudicam o áudio de quem está com a palavra.</p>
                            <p><span className="text-laranjaStihl">7. </span>Se estiver com outras pessoas no mesmo espaço, use fones de ouvido e fale mais baixo.</p>
                            <p><span className="text-laranjaStihl">8. </span>Se possível, habilite sua câmera. Olhar para outra pessoa, além de gerar mais empatia, facilita o processo de comunicação. Só feche quando a qualidade da conexão exigir.</p>
                            <p><span className="text-laranjaStihl">9. </span>Vai fazer uma reunião com colegas presenciais e remotos? Cada um entra no Webex pelo seu computador, dando igual oportunidade de fala a quem não está presencial.</p>
                            <p><span className="text-laranjaStihl">10. </span>Não exceda o horário agendado.</p>
                            
                        </div>
                        <div className="w-1/2 flex flex-col gap-10">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/Meme1.png" alt="" />
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/Meme2.png" alt="" />
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/Meme3.png" alt="" />
                        </div>
                    </div>
                    <div>
                       <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-lider.png" alt="" />
                    </div>

                    <div className="w-full">
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-ficadica.png" alt="" />
                        </div>
                        <div className="flex gap-4 px-9">
                            <div className="w-1/2 flex flex-col gap-4">
                                <h2 className="font-bold">Douglas de Oliveira, Gerente de Engenharia e Tecnologia de Manufatura, sugere o livro Sapiens - Uma breve história da humanidade, de Yuval Noah Harari.</h2>
                                <p>“Para mim, buscar conhecer mais o ser humano na sua individualidade é um caminho sem volta e de extrema relevância para o nosso desenvolvimento e o das pessoas à nossa volta. Independentemente de estarmos ou não em uma posição de liderança, não podemos perder a oportunidade de influenciar no desenvolvimento de todos com quem convivemos. Estar preparado é o primeiro passo, e este livro me trouxe muita reflexão sobre a essência do ser humano, nosso modus operandi.”</p>
                                <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68-livro.PNG" className="w-52" alt="" />
                            </div>
                            <div className="w-1/2 flex flex-col gap-4">
                                <img src="https://www.utilissimolider.com.br/UTL/utl-68/assets-68/utl-68Douglas-Oliveira.jpg" alt="" />
                                <p className=" text-laranjaStihl font-semibold text-right">» Independentemente de estarmos ou não em uma posição de liderança, não podemos perder a oportunidade de influenciar no desenvolvimento de todos. «</p>
                                <p className="text-right"><span className="font-bold">DOUGLAS DE OLIVEIRA</span>, GERENTE DE ENGENHARIA E TECNOLOGIA DE MANUFATURA</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Emojis />
                <FooterEd />
            </section>
            <Footer />
        </div>
    )
}