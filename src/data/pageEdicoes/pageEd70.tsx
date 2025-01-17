import { useLocation } from "react-router-dom";
import { Footer } from "../../componentes/footer";
import { Header } from "../../componentes/header";
import { useEffect } from "react";

import { FooterEd } from "./componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao70') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page70(){
    updateTitle('#70 - JULHO 2024 | UTL Líder')
    return(
        <div>
            <Header />
            <section className="relative shadow-slate-400 shadow-xl top-24 sm:w-[700px] flex flex-col items-center gap-5 m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/utllider70-capa.png" alt="UTL Lider edição 70" />
                </div>
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/utllider70-Bruno.png" alt="" />
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-6 px-9 pt-4 bg-white">
                    <div className="sm:w-1/2 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p>
                                Modificação, inovação, progresso, transição, evolução, renovação, metamorfose – seja qual for o nome, não há dúvida de que o mundo está se transformando muito rápido. Na STIHL, a mudança também não para e pode ser vista não só em grandes movimentos do Grupo como em pequenas ações do dia a dia.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">  
                            <p>
                            “A Empresa está passando por uma <br/> forte gestão da mudança (change management). Uma organização centenária que sempre cresceu praticamente sem concorrentes agora vive um momento diferente, com outros desafios no mercado, a entrada de novas tecnologias e o avanço da atenção com a sustentabilidade. Diante desse cenário, o papel do gestor é muito importante. Ele é quem vai conduzir essa gestão da mudança, motivando, engajando e ajudando as pessoas para que compreendam o seu papel daqui para a frente”, explica Bruno Pitzer, Diretor de Recursos Humanos, Saúde, Segurança e Meio Ambiente.
                            </p>   
                        </div> 
                        <div className="flex flex-col gap-2">  
                            <p>
                            Em Fevereiro ele participou de um workshop global de Recursos Humanos na Matriz, em que foi reforçado o que a Empresa espera das suas lideranças. “Temos projetos importantíssimos acontecendo, com transformação em todas as áreas, e os líderes precisam ser exemplos, começar com eles, observando o seu dia a dia, a forma como trabalham, preparando as pessoas para abraçarem as mudanças tão necessárias para o nosso futuro”, destaca.
                            </p> 
                            
                        </div> 
                    </div>
                    
                    <div className="sm:w-1/2 flex flex-col text-left gap-8 px-4 py-6 border-2 border-laranjaStihl">
                        <h1 className="text-xl font-stihl-display font-bold">
                            LIDERAR PARA FAZER ACONTECER
                        </h1>
                    
                       <div>
                            <h2 className=" text-laranjaStihl font-bold text-lg">Informe-se</h2>
                            <p>
                                A compreensão do cenário é fundamental. Busque estar atualizado sobre os movimentos do mundo, do mercado e da Empresa. Traga sugestões e compartilhe internamente.
                            </p>  
                       </div>

                       <div>
                            <h2 className=" text-laranjaStihl font-bold text-lg">Comece pelo porquê:</h2>
                            <p>
                            As pessoas precisam “comprar” novas ideias, e para isso é fundamental entender o porquê delas. O engajamento só acontece quando as pessoas compreendem os motivos.
                            </p>  
                       </div>

                       <div>
                            <h2 className=" text-laranjaStihl font-bold text-lg">Seja transparente:</h2>
                            <p>
                            Faça reuniões com suas equipes, explique a mudança pela qual a Empresa está passando, o que irá impactar o seu dia a dia. Dê feedbacks e utilize as ferramentas de avaliação da STIHL.
                            </p>  
                       </div>
                       <div>
                            <h2 className=" text-laranjaStihl font-bold text-lg">Crie espaços seguros:</h2>
                            <p>
                            As pessoas podem aprender com os erros, sem medo de ousar ou questionar por que não fazer diferente. Todas as ideias são bem-vindas, e essa abertura é imprescindível para a transformação.
                            </p>  
                       </div>

                    </div>
                </div>

                <div className="bg-laranjaStihl w-full py-10 px-8 flex flex-col items-center justify-center gap-5">
                    <h2 className=" font-stihl-display text-white text-xl">
                        STIHL EM TRANSFORMAÇÃO
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/1.png" alt="" />
                        </div>
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/3.png" alt="" />
                        </div>
                        <div>
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/4.png" alt="" />
                        </div>
                        
                    </div>
                </div>
                
                <div className="w-full pb-6">
                        <div className="mb-10">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/utllider70-pessoas.png" alt="" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 px-9">
                            <div className="sm:w-1/2 flex flex-col gap-4">
                                <p>
                                    Somente as pessoas mudam resultados. Isso é o que defende a Prosci, empresa especializada em certificação em gestão de mudanças parceira da STIHL.  
                                </p>
                                <p>
                                “São elas que fazem acontecer e podem ser agentes ativos de uma transformação”, diz Fabiano Guimarães Nascimento, diretor da Prosci.
                                </p>
                                <p>
                                Ele explica que todos em uma empresa têm as suas responsabilidades diante de atualizações relevantes, mas especialmente as lideranças ganham ainda mais importância nesse contexto. “Cabe aos gestores a ligação entre seus times e as mudanças, defendendo as novidades, gerindo resistências e sendo coachs”, afirma. 
                                </p>
                                <p>
                                Mas como isso acontece na prática? Para Fabiano, primeiro é preciso criar consciência da necessidade da mudança, ajudando a encontrar pontos de desejo: “o que eu ganho com isso?”, trazendo conhecimento e reforçando o novo até que se torne um comportamento e <span className="italic">mindset</span> naturais. 
                                </p>
                                <p>
                                Veja mais dicas nos boxes abaixo e acima (liderar para fazer acontecer).
                                </p>
                                <div className="border-2 border-laranjaStihl py-6 px-4 w-full space-y-4">
                                    <h2 className="text-laranjaStihl text-lg font-stihl-regular">
                                        SOU LÍDER E <br/ > <span className="font-stihl-display text-laranjaStihl underline">É CLARO</span> QUE VOU:
                                    </h2>
                                    <div className="space-y-2">
                                        <div className="flex gap-4 items-start">
                                            <span className="text-xs text-laranjaStihl">»</span>
                                            <div>
                                             <p>
                                               Explicar os papéis e responsabilidades de cada integrante do meu time;
                                             </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <span className="text-xs text-laranjaStihl">»</span>
                                            <div>
                                            <p>
                                            Compartilhar as mudanças que estão acontecendo na empresa;
                                            </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <span className="text-xs text-laranjaStihl">»</span>
                                            <div>
                                            <p>
                                        Ter conversas ADKAR com as pessoas. “ADKAR” é um acrônimo para os cinco resultados que um indivíduo precisa alcançar para que uma mudança seja bem-sucedida: <span className="italic">Awareness</span> (Consciência),<span className="italic"> Desire</span> (Desejo),<span className="italic"> Knowledge</span> (Conhecimento), <span className="italic">Ability</span> (Habilidade) e <span className="italic">Reinforcement</span> (Reforço).
                                        </p>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 flex flex-col gap-20">
                                <div className="w-full bg-laranjaStihl">
                                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/meme1.png" alt="" />
                                </div>
                                <div className="w-full bg-laranjaStihl ">
                                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/meme2.png" alt="" />
                                </div>
                                <div className="w-full bg-laranjaStihl">
                                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/meme3.png" alt="" />
                                </div>
                               
                            </div>
                        </div>
                </div>

                <div className="w-full bg-gray flex flex-col gap-4 ">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/utllider70-clima.png" alt="" />
                    
                    <div className="px-9 flex flex-col gap-4 mb-8">
                       <a href="https://www.utilissimolider.com.br/UTL/utl-70/assets/[STIHL]Climalánoalto.mp4" target="_blank"><img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/video.png" alt="" /></a>
                    
                        <p>
                        Um estudo feito pela Gallup – empresa global de análises e consultoria – mostrou que profissionais com altos níveis de motivação e engajamento são 17% mais produtivos. O mesmo estudo aponta que colaboradores motivados e engajados têm até 81% de chances de se tornarem embaixadores da marca.
                        </p>
                        <p>
                        Convidamos cinco lideranças - <span className="font-bold">Alexandra Schuh, Cristiano Bohrer, Filipe Silva, Jadir Silva e Ricardo Melnick</span> – para contarem o que é mais importante para motivar e engajar os integrantes de seus times. Aperte o play e se inspire!
                        </p>
                       <span className="text-laranjaStihl font-bold">Como é na sua área? Conta pra gente nos comentários.</span>
                    </div>
                </div>

                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/utllider70-sonhe.png" alt="" />
                    <div className="p-9 flex sm:flex-row flex-col gap-4">
                        <div className="sm:w-1/2 w-full space-y-6">
                            <h2 className="text-lg font-bold">
                            Frederico Müller, Supervisor do R&D, sugere o livro O Estilo Disney, de Bill Capodagli e Lynn Jackson.
                            </h2>
                            <p>
                            “Decidi lê-lo após visitar a Disney, em Orlando, há dois anos. Fiquei impressionado com o tratamento dado pelos funcionários, que foi simplesmente impecável! Esse livro explora os princípios e práticas que fizeram da Disney uma marca tão icônica e bem-sucedida. Destaca a importância da atenção aos detalhes, da criatividade, da inovação e do foco no cliente, entre outros aspectos. Ao ler essa obra, somos convidados a aplicar esses mesmos princípios em nossos negócios para melhorar o atendimento ao cliente, a cultura organizacional e a liderança.”
                            </p>
                        </div>
                        <div className="flex-1">
                            <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/FredericoMuller.png" alt="" />
                        </div>
                    </div>
                    <div className="p-9">
                        <img src="https://www.utilissimolider.com.br/UTL/utl-70/assets/disney_.png" alt="" />
                    </div>
                </div>
                <Emojis />
                <FooterEd />
            </section>
            <Footer />
        </div>
    )
}