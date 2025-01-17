import { useLocation } from "react-router-dom";
import { Footer } from "../../componentes/footer";
import { Header } from "../../componentes/header";
import { useEffect } from "react";

import { FooterEd } from "./componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao71') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page71(){
    updateTitle('#71 - NOVEMBRO 2024 | UTL Líder')
    return(
        <div>
            <Header />
            <section className="relative shadow-slate-400 shadow-xl top-24 sm:w-[700px] flex flex-col items-center gap-5 m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-capa.png" alt="UTL Lider edição 71" />
                </div>


                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-lider.png" alt="Lideres da edição 71" />
                </div>
                <div className="w-full flex flex-col gap-6 px-9 pt-4 bg-white">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold mb-5">
                            A transformação na STIHL exige muito da liderança, que mais do que nunca
                            deve cumprir seus papéis de <span className="text-laranjaStihl">C</span>omunicador, Agente de <span className="text-laranjaStihl">L</span>igação, <span className="text-laranjaStihl">A</span>dvogado,
                            Gestor da <span className="text-laranjaStihl">R</span>esistência e <span className="text-laranjaStihl">C</span>oach.
                        </h2>
                        <p>
                            Muito mais do que uma troca de sistema, o ONE STIHL faz parte do rol de mudanças pelo
                            qual a Empresa está passando, com uma série de alterações na forma de trabalho e que
                            demandam uma sinergia ainda maior entre líderes e liderados.
                        </p>
                        <p>
                            Para apoiar seus subordinados diretos nessa jornada de transição, gerentes e supervisores
                            devem desempenhar cinco funções fundamentais, resumidas na sigla CLARC.
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/comunicador.png" className="w-32" alt="comunicador" />
                            <div className="flex flex-col">
                                <h3 className="text-laranjaStihl font-bold font-stihl uppercase">comunicador</h3>
                                <p className="text-sm">
                                    Reforce os motivos por trás de novas práticas, novo sistema ou mesmo
                                    mudança de procedimento, explicando os impactos. Importante também
                                    traduzir as diretrizes organizacionais nas ações que eles precisam executar.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/agente.png" className="w-32" alt="Agente de ligação" />
                            <div className="flex flex-col">
                                <h3 className="text-laranjaStihl font-stihl uppercase">AGENTE DE <span className="font-bold">LIGAÇÃO</span></h3>
                                <p className="text-sm">
                                    Você é a ligação entre sua equipe e a alta liderança. Embora deva ajudar a
                                    resolver problemas individuais, acompanhe aqueles que são comuns a todos
                                    para relatar o que está afetando o time de forma geral e encontrar uma solução
                                    completa.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/advogado.png" className="w-32" alt="Advogado" />
                            <div className="flex flex-col">
                                <h3 className="text-laranjaStihl font-bold font-stihl uppercase">advogado</h3>
                                <p className="text-sm">
                                     Você desempenha um papel na defesa dos valores e da estratégia da
                                    organização. Ajude a manter sua equipe calma e focada em levar os negócios
                                    adiante, mesmo em momentos difíceis. Eles precisam ouvir de você que as
                                    mudanças que irão acontecer serão positivas.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/gestor.png" className="w-32" alt="Gestor da resistência" />
                            <div className="flex flex-col">
                                <h3 className="text-laranjaStihl font-stihl uppercase">gestor da  <span className="font-bold">resistência</span></h3>
                                <p className="text-sm">
                                    Quando encontrar resistência, demonstre empatia e faça perguntas para
                                    encontrar a causa-raiz e ajudar seus colaboradores a superarem as barreiras.
                                    Garanta que eles saibam como resolver problemas técnicos rapidamente, para
                                    limitar a frustração causada por novas tecnologias.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/coach.png" className="w-32" alt="COACH" />
                            <div className="flex flex-col">
                                <h3 className="text-laranjaStihl font-bold font-stihl uppercase">COACH</h3>
                                <p className="text-sm">
                                    A capacidade de orientar as pessoas em suas próprias jornadas de mudanças é
                                    fundamental. Ajude cada colaborador a identificar novas habilidades, hábitos ou
                                    práticas necessários e tenha um plano para desenvolvê-las. Todos enfrentarão a
                                    situação de maneira diferente e alguns levarão menos tempo do que outros.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-laranjaStihl sm:p-10 pt-6 pb-6 flex sm:flex-row flex-col items-center justify-center gap-10">
                        <div className="w-[30%]">
                            <h3 className="text-white text-center font-stihl font-bold text-2xl">
                                »<br/>
                                Seja a
                                mudança que
                                você quer ver
                                no mundo<br/>
                                «
                            </h3>
                        </div>
                        <div className="w-[70%]">
                            <p className="text-white  font-stihl">
                                A frase, atribuída ao líder indiano <span className="font-bold">Mahatma Gandhi</span>,
                                lembra que a transformação que queremos inicia
                                em nós mesmos. O pensamento também vale para
                                as lideranças em relação ao ONE STIHL. Adote
                                uma postura positiva e proativa sobre o projeto,
                                inspirando todos os integrantes do seu time,
                                inclusive quem está alocado diretamente.
                            </p>
                        </div>
                    </div>
                    <div className="border-2 border-laranjaStihl w-full p-9 flex flex-col gap-5">
                        <h3 className="uppercase font-bold font-stihl-display text-lg">lpo e as lideranças</h3>
                        <p>
                            Dentro do projeto de implementação do ONE STIHL, a função do LPO – sigla
                            em inglês para Local Process Owner; em português, Dono Local de Processo –
                            é tão importante quanto as lideranças em si, pois ele é considerado o guardião
                            do modelo (template) global, sendo o representante local dos requisitos de negócio
                            de cada uma das workstreams.
                        </p>
                        <p className="font-bold">
                            É fundamental que as lideranças trabalhem em total colaboração
                            com os LPOs para fazer o ONE STIHL acontecer!
                        </p>
                    </div>
                </div>

                  <div className="bg-gray w-full py-10 px-8 flex flex-col items-center justify-center gap-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/1.png" alt="" />
                        </div>
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/2.png" alt="" />
                        </div>
                        <div >
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/3.png" alt="" />
                        </div>
                        <div className="sm:-mt-10">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/4.png" alt="" />
                        </div>
                        
                    </div>
                </div>


                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-Ricardo.png" alt="" />
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-6 px-9 pt-4 bg-white">
                    <div className="sm:w-1/2 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p>
                            O maior projeto global de todos os
                            tempos avança a passos largos. A fase
                            de desenvolvimento vai até a metade
                            do próximo ano, quando inicia finalmente
                            a etapa de implantação, com os
                            preparativos para a grande virada
                            em 5 de janeiro de 2026.<br/>
                            “Estamos contentes com o empenho de
                            cada colaborador neste que é o maior
                            desafio dos últimos tempos para a
                            nossa Empresa. Muito mais do que uma
                            atualização de sistema, estamos dando
                            um passo importante para posicionar a
                            STIHL em outro patamar no processo de
                            transformação digital”, afirma Ricardo
                            Nizoli, Diretor de TI.<br/>
                            Ele ressalta, no entanto, que esse
                            movimento não é da sua área, mas de
                            toda a organização. “É muito importante
                            que tenhamos o entendimento das
                            lideranças nesse sentido.
                             </p>
                        </div>
                    </div>
                    
                    <div className="sm:w-1/2 flex flex-col text-left gap-8 px-4">
                        <p>
                        Falem com seus times, reforcem a grandiosidade
                        do trabalho, peçam a sua atenção e
                        dedicação”, destaca.<br/>
                        A quantidade de processos e o fato de
                        estar sendo realizado em paralelo com
                        a Matriz aumentam bastante o nível de
                        complexidade. “Precisamos de foco e
                        determinação. A união de forças será vital
                        para o sucesso deste projeto”.
                        </p>
                        <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-template.png" alt="" />
                    </div>
                    
                </div>


                <div className="h-1 bg-gray w-[90%] rounded-sm " />

                <div className="w-full  flex flex-col gap-4 ">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-suporte.png" alt="" className="px-6" />
                    
                    <div className="px-9 flex flex-col gap-4 mb-8">
                       <a href="https://www.utilissimolider.com.br/UTL/utl-71/assets/Video_SuporteONESTIHL.mp4" target="_blank"><img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-video.png" alt="" /></a>
                    
                        <p>
                             Quando se fala em liderança, o apoio aos colaboradores é fundamental. Em desafios de grande magnitude como o ONE STIHL, 
                             esse amparo ganha ainda mais importância. No vídeo, duas lideranças muito engajadas – Michael Umezu, Diretor de Compras, e Ranieri Karkow, 
                             Diretor de Operações – contam como prestam suporte aos integrantes dos seus times que estão no projeto. <strong>Aperte o play e se inspire!</strong>
                        </p>
    
                       <span className="text-laranjaStihl font-bold">Como é na sua área? Escreva aqui nos comentários.</span>
                    </div>
                </div>

                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-batepapo.png" alt="" />
                    <div className="p-9 flex sm:flex-row flex-col gap-4">
                        <div className="w-full flex flex-col gap-6">
                            <h2 className="text-lg font-bold">
                            O tamanho do ONE STIHL e o seu impacto na rotina das pessoas exigem um olhar constante sobre as mudanças.
                            </h2>
                            <p>
                            A ITS é parceira da STIHL na implementação do ONE STIHL no Brasil e tem um podcast
                            chamado ITS Cast. Neste episódio, o bate-papo foi com Ricardo Nizoli, Diretor de TI.
                            Além de como começou a transformação digital na Empresa, ele também contou sobre
                            sua carreira e desafios.
                            </p>
                            <span className="text-laranjaStihl font-bold">Confira no YouTube:</span>
                            <a href="https://www.youtube.com/watch?v=-ighJHtL9lM" target="_blank"><img src="https://www.utilissimolider.com.br/UTL/utl-71/assets/utllider71-video2.png" alt="" /></a>
                        </div>   
                    </div>
                    
                </div>

                <div className="h-1 bg-gray w-[90%] rounded-sm " />
                <Emojis />
                <FooterEd />
            </section>
            <Footer />
        </div>
    )
}