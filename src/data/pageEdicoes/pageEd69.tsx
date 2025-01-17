import { useLocation } from "react-router-dom";
import { Footer } from "../../componentes/footer";
import { Header } from "../../componentes/header";
import { useEffect } from "react";

import { FooterEd } from "./componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao69') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page69(){
    updateTitle('#69 - JUNHO 2024 | UTL Líder')
    return(
        <div>
            <Header />
            <section className="relative shadow-slate-400 shadow-xl top-24 sm:w-[700px] flex flex-col items-center m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-capa.png" alt="UTL Lider edição 68" />
                </div>
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-lideranca.png" alt="#partiu 2028" />
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-6 px-9 pt-4 bg-white">
                    <div className="sm:w-1/2 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p>
                            Diante do contexto desafiador pelo qual ainda passa o Rio Grande do Sul, é fundamental seguir apoiando os membros da equipe, terceiros e suas famílias que estão enfrentando mais dificuldades na retomada. Somente na STIHL foram cerca de 400 colaboradores diretamente atingidos pela enchente. E como fica o papel das lideranças neste momento? Pensando nisso, a STIHL promoveu no final de maio workshops com a psicóloga Rose Russowski, Diretora Regional da LHH Sul, consultoria parceira na área de Recursos Humanos. Foram encontros muito produtivos e que renderam ensinamentos que podem ser aplicados não só atualmente, mas também em outras situações de crise.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-laranjaStihl font-bold">COMO A LIDERANÇA DEMONSTRA QUE ESTÁ À DISPOSIÇÃO PARA AJUDAR? E ATÉ ONDE IR?</h1>
                            <p>
                                A palavra-chave é comunicação. Pergunte se o colaborador precisa de ajuda e, em caso afirmativo, como gostaria de ser auxiliado. Não saia fazendo, tomando providências, sem antes consultá-lo. Mesmo com ótima intenção, pode ser invasivo. Afinal, estamos tratando de questões bem particulares, como a casa, a família, as próprias lembranças. Também é essencial acolher e ouvir com atenção. 
                            </p>   
                        </div> 
                    </div>
                    
                    <div className="sm:w-1/2 flex flex-col text-left gap-2">
                       <p>
                       “O simples ato de escuta já pode significar bastante”, destaca Rose, lembrando que nem todos podem estar dispostos a falar, cada um reage de uma maneira e em fases. “Tristeza, desorientação, assimilação da realidade, quem sofre um trauma transita por diferentes etapas, e é importante respeitar. Ninguém pode julgar a dor do outro. Reforce, no dia a dia, que está ali para quando o colaborador quiser compartilhar seu sentimento. Mesmo para lideranças com equipes grandes, é recomendado um olhar individual. “O líder deve estar atento, identificar quando tem alguém muito triste ou com pouca energia no grupo. Nesses casos, combinar mudanças nas atividades, oferecer apoio e orientá-lo para que consiga voltar para a rotina habitual.”
                       </p>
                       <h1 className=" text-laranjaStihl font-bold">SEM FÓRMULA MÁGICA</h1>
                       <p>A psicóloga Rose pondera que não existe nenhum “ranking” para identificar qual liderança ajudou mais, até porque muitas também podem ter sido impactadas, em maior ou menor grau. Cada um faz o que está ao seu alcance, conforme as suas características e limitações. É vital não se autojulgar e não esquecer do autocuidado. Não dá para se colocar no papel de salvador ou super-herói.</p>  
                    </div>
                </div>
                <div className="p-5">
                  <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-top5.png" alt="" />
                </div>


                <div className="w-full bg-gray pb-6">
                        <div className="mb-10">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-saude.png" alt="" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 px-9">
                            <div className="sm:w-1/2 flex flex-col gap-4">
                                <h2 className="font-bold mb-10">Como a liderança pode reconhecer sinais de estresse pós-traumático ou depressão?</h2>
                                <p className=" text-laranjaStihl font-bold">» As lideranças precisam ficar atentas aos sinais, como agressividade, irritabilidade, maior sensibilidade e mudanças de comportamento. «</p>
                                <div className=" text-sm">
                                    <span className="font-bold">DRA. ADRIANE RODRIGUES,</span>
                                    <p>MÉDICA DO TRABALHO</p>
                                </div>
                                <p>Líderes desempenham um papel crucial no bem-estar de seus colaboradores. Reconhecer sinais de estresse pós -traumático e depressão é fundamental para apoiar a equipe. Alguns pontos a serem observados podem incluir mudanças de comportamento, agressividade, irritabilidade, maior sensibilidade, entre outros. </p>
                                <p>
                                Dra. Adriane Rodrigues, Médica do Trabalho da STIHL, comenta que no Rio Grande do Sul a população foi toda atingida, pois não há ninguém que não esteja sobrecarregado emocionalmente. “Em alguns o efeito será mais paralisante, para outros pode gerar produtividade exacerbada, ou seja, querer mergulhar no trabalho. São formas que o cérebro encontra para se proteger do sofrimento”, explica.
                                </p>
                                <p>
                                Segundo ela, estar aberto a conversar é o primeiro passo para ajudar. “A liderança pode utilizar um assunto ‘quebra-gelo’ para iniciar o diálogo com o colaborador e ir acompanhando qualquer situação que fuja à rotina, e se persistirem os sintomas, encaminhar para auxílio profissional”, diz
                                </p>
                                <p>
                                O Núcleo de Qualidade de Vida (NQV) conta com uma gama de especialistas para apoiar a saúde mental, como psicólogos e psiquiatras, além de outras terapias. Caso o colaborador não queira se consultar, a liderança pode procurar a equipe do Ambulatório para juntos desenvolverem uma estratégia de abordagem personalizada a esse colega.
                                </p>
                                
                            </div>
                            <div className="sm:w-1/2 flex flex-col gap-4">
                                <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-Adriane.png" alt="" />
                                <h1 className="text-laranjaStihl font-bold">RETORNO COM CAUTELA</h1>
                                <p>
                                Quando alguém chega a um estado de
esgotamento mental, sua cognição estará
comprometida, além de faltar motivação.
Por isso, as lideranças devem evitar que os
impactados executem atividades de risco
na operação. “É um cenário favorável para
a ocorrência de pequenos acidentes, em
razão de o pensamento estar difuso nesta
hora. O retorno a tarefas que exigem maior
foco deve ser gradual”, orienta Dra. Adriane. 
                                </p>
                                <p>
                                Pelo mesmo motivo, existe a possibilidade
de baixa performance. “É importante as
lideranças estarem cientes de que alguns
levam mais tempo para se recuperarem, já
para outros a situação se normaliza mais
rápido”, complementa. 
                                </p>
                                <div className="w-full p-4 border-2 border-laranjaStihl text-sm">
                                    <div className="flex flex-col gap-2 items-center">
                                        <h1 className="font-bold text-laranjaStihl">CANAL DIRETO</h1>
                                        <div className="flex items-start gap-2">
                                            <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/email.png" alt="" className="w-6" />
                                            <p>Para contatos e agendamentos: <a href="mailto:nqv@stihl.com.br" className="font-semibold underline">nqv@stihl.com.br</a></p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/whatsapp.png" alt="" className="w-8" />
                                            <p>Whatsapp Programa Cuidar (escrever ou falar): <a href="http://wa.me/+555198011-9396" className="font-semibold underline">98011-9396</a></p>
                                        </div>
                                        <span className="text-sm tracking-tight">Em caso de dúvida ou necessidade de orientação, a liderança pode contatar diretamente a Dra. Adriane Rodrigues. Celular: 99313-0848</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                <div>
                    <div className="w-full">
                        <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-oquedizer.png" alt="" />
                    </div>

                    <div className="px-9 flex flex-col gap-4">
                        <p>Tudo que for dito negando ou minimizando o que a pessoa está sentindo acaba provocando o efeito contrário, causando mal-estar e parecendo que aquela perda não importa ou não tem valor.</p>
                        <p>
                            Também tome cuidado para não utilizar frases que remetam à religião, pois cada um possui a sua crença.
                        </p>
                        <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-podenpode.png" alt="" />
                    </div>
                    
                </div>



                <div className="w-full bg-white flex flex-col gap-4 ">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllidder69-aperteoplay.png" alt="" />
                    <div>
                        <p className="px-9 font-bold">Fotos e vídeos vêm gerando muita sensibilização nas redes sociais.</p>
                        <p className="px-9 font-bold">A STIHL publicou nos seus perfis algumas cenas de apoio à comunidade. </p>
                    </div>
                    
                    <div className="px-9 flex flex-col gap-4 mb-8">
                       <a href="https://www.youtube.com/watch?v=3V0T15tRAxM" target="_blank"><img src="https://www.utilissimolider.com.br/UTL/utl-69/assets/utllider69-video.png" alt="" /></a>
                    
                       <span className="text-laranjaStihl font-bold">Juntos somos mais fortes e com resiliência seguiremos reconstruindo e criando novas histórias.</span>
                    </div>
                </div>
                <Emojis />
                <FooterEd />
            </section>
            <Footer />
        </div>
    )
}