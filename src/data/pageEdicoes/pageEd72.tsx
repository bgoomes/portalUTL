import { useLocation } from "react-router-dom";
import { Footer } from "../../componentes/footer";
import { Header } from "../../componentes/header";
import { useEffect } from "react";

import { FooterEd } from "./componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao72') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page72(){
    updateTitle('#72 - JANEIRO 2025 | UTL Líder')
    return(
        <div>
            <Header />
            <section className="relative shadow-slate-400 shadow-xl top-24 sm:w-[700px] flex flex-col items-center gap-5 m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-72/utl72-capaedicao.png" alt="UTL Lider edição 72" />
                </div>


                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl-72/72_UtlLider_1.png" alt="Sthil trail 2030" />
                </div>
                <div className="w-full flex flex-col gap-6 px-9 pt-4 bg-white">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold mb-5">
                            Nossa jornada em direção ao futuro começa agora, e o papel das lideranças é
                            fundamental para posicionar a STIHL rumo ao sucesso a longo prazo.
                        </h2>
                        <div className="w-full flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-1/2">
                                <p>
                                <strong>O sucesso depende de mais do que apenas fabricar ótimos produtos</strong>.<br /> Hoje, os clientes exigem cada vez mais uma experiência completa: serviços digitais
                                perfeitos, suporte excepcional e uma
                                parceria verdadeira, que vá além da simples
                                transação de venda. O alerta foi feito pelo
                                Sr. Michael Traub, Presidente do Conselho
                                de Administração do Grupo STIHL, no vídeo
                                divulgado em novembro para compartilhar
                                a nova estratégia 2030 com todos os
                                colaboradores. <br />“Vivemos em um mundo que
                                está mudando em um ritmo incrível - do ponto
                                de vista econômico, tecnológico e ambiental.
                                Essas mudanças representam desafios e
                                oportunidades, e está claro que o nosso
                                sucesso depende de muito mais do que
                                apenas fabricar ótimos produtos”, destacou.<br />
                                A nova estratégia - STIHL Trail 2030 - foi
                                desenvolvida após extensa análise, reflexão
                                e discussão.
                                </p>
                            </div>
                            <div className="sm:w-1/2">
                                <p>
                                O nome - trilha, em português
                                - simboliza a jornada transformadora que a
                                Empresa deve empreender para permanecer
                                como líder nos anos que antecedem 2030.<br />
                                O objetivo não é sobreviver em um cenário de
                                mudanças, mas, sim, prosperar. Quem somos
                                hoje e quem precisamos nos tornar? <br />Iniciativas
                                como Battery First, MOVE e ONE STIHL
                                continuam sendo muito importantes, mas o
                                foco principal agora é nos principais clientes da
                                marca e em como atendê-los melhor.
                                </p>
                                <h3 className="text-laranjaStihl mt-4 font-semibold">
                                    LIDERANÇAS NA CONDUÇÃO DOS MOVIMENTOS
                                </h3>
                                <p>
                                    Nesse contexto de transformação, as
                                    lideranças desempenham um papel crucial
                                    no sucesso da mudança.<br /> Precisam ser
                                    capazes de entender as complexidades do
                                    novo cenário e guiar suas equipes para o
                                    atingimento da estratégia.
                                </p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                
                    <div className="border-2 border-laranjaStihl w-full p-9 flex flex-col gap-5">
                        <h3 className="uppercase font-bold font-stihl-display text-lg">COMO TER O ENGAJAMENTO DAS PESSOAS?</h3>
                        <div className="flex sm:flex-row flex-col gap-8 items-center">
                            <div>
                                <img src="/72_UtlLider_2.png" alt="ícone" />
                            </div>
                            <div>
                                <h3 className="text-laranjaStihl">
                                    <strong>LEMBRE O PROPÓSITO DA STIHL:</strong><br />
                                    FACILITAR O TRABALHO DAS PESSOAS
                                    NA E COM A NATUREZA.
                                </h3>
                                <p>
                                    As palavras de nosso fundador, Sr. Andreas Stihl, continuam
                                    sendo inspiração. Explique a razão de existência da STIHL,
                                    o nosso propósito.
                                </p>
                            </div>
                            
                        </div>

                        <div className="flex sm:flex-row flex-col gap-6 items-center">
                            <div>
                                <img src="/72_UtlLider_3.png" alt="ícone" />
                            </div>
                            <div>
                                <h3 className="text-laranjaStihl">
                                    <strong>REFORCE A VISÃO DA EMPRESA:</strong><br />
                                    EMPODERAR OS ESPECIALISTAS DA NATUREZA EM TODO O MUNDO.
                                </h3>
                                <p>
                                    A visão fornece pontos de orientação. Poder, Natureza
                                    e Especialistas são palavras-chave para a STIHL.
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </div>

                <section className="bg-gray pb-6">
                    <div className="w-full pl-8 mt-10">
                        <img src="/72_UtlLider_4.png" alt="" />
                    </div>
                    <div className="w-full pl-9 pr-9">
                        <h3 className="font-bold mb-8">
                            Três princípios norteadores estão no centro da estratégia STIHL Trail 2030.
                            Utilize estas orientações no dia a dia com seu time.
                        </h3>
                        <p>
                            Para nos guiar nesta jornada transformadora, foram definidos três norteadores,
                            garantindo que todos os profissionais da STIHL permaneçam focados, colaborativos
                            e voltados para os resultados.
                        </p>
                    </div>

                    <div className="w-full p-8 flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6">
                            <img src="/72_UtlLider_5.png" alt="" className="w-[120px] h-[100px]"/>
                            <div>
                                <h3 className="text-laranjaStihl font-semibold">FOCO</h3>
                                <p>Foco significa simplificar o trabalho, evitar distrações, executar as tarefas
                                    com precisão e levar adiante as principais iniciativas que causarão mais
                                    impacto. É preciso entender as tarefas: quais são os objetivos e quais
                                    não são. As ações devem priorizar as metas estratégicas da Empresa,
                                    em detrimento dos próprios gostos ou desgostos.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 flex-col sm:flex-row sm:items-start items-center">
                            <img src="/72_UtlLider_6.png" alt="" className="w-[100px] h-[100px]"/>
                            <div>
                                <h3 className="text-laranjaStihl font-semibold">COLABORAÇÃO</h3>
                                <p>A colaboração é essencial para trabalharmos juntos. Somente
                                    se abraçarmos o grande valor que traz uma perspectiva diferente
                                    conseguiremos uma mentalidade colaborativa em toda a Empresa.
                                    É responsabilidade de todos dar um exemplo positivo, quebrar as
                                    barreiras entre equipes, departamentos e regiões.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 flex-col sm:flex-row sm:items-start items-center">
                            <img src="/72_UtlLider_7.png" alt="" className="w-[100px] h-[100px]"/>
                            <div>
                                <h3 className="text-laranjaStihl font-semibold">ENTREGA</h3>
                                <p>A entrega é, talvez, o mais importante dos três princípios, pois, no final,
                                    o que realmente importa são os resultados. O desafio não é saber o que
                                    fazer, mas sim conseguir fazê-lo. Entregar significa concluir as tarefas,
                                    parar de perseguir a perfeição se isso colocar em risco o cronograma.</p>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <div className="w-full flex flex-col gap-4 ">
                    <img src="/72_UtlLider_8.png" alt="" />

                    <h3 className="pl-9 pr-9 font-bold">
                        A força da STIHL Brasil, nos seus mais de 50 anos de atuação, certamente dará
                        enorme contribuição na estratégia 2030. Veja o recado da Alta Administração:
                    </h3>

                    <div className="sm:p-9 flex flex-col sm:flex-row gap-6 items-center">
                        <div className="w-1/2">
                            <p className="text-laranjaStihl font-bold text-lg">
                                » O alto envolvimento de
                                nossas equipes com a
                                estratégia, bem como a
                                inovação, a sustentabilidade
                                e a ética, são fundamentais
                                para o progresso da STIHL.
                                Somente assim poderemos
                                superar a concorrência. «
                            </p>
                            <span><strong className="font-stihl-display">CLÁUDIO GUENTHER</strong>, PRESIDENTE</span>
                        </div>
                        <div className="w-1/2">
                            <img src="/72_UtlLider_9.png" alt="" className="w-[1100px]" />
                        </div>
                    </div>
                    <div className="sm:p-9 flex gap-6 flex-col sm:flex-row items-center">
                        <div className="w-1/2">
                             <img src="/72_UtlLider_10.png" alt="" className="w-[1100px]" />  
                        </div>
                        <div className="w-1/2">
                            <p className="text-laranjaStihl font-bold text-lg">
                            » Inovação é a junção
                            do novo com a ação.
                            Sem atitude não
                            inovamos. Precisamos
                            transformar nossas
                            ideias em resultado. «
                            </p>
                            <span><strong className="font-stihl-display">ARNO TOMASINI,</strong><br /> VICE-PRESIDENTE
                            DE OPERAÇÕES</span>
                        </div>
                    </div>

                    <div className="sm:p-9 flex gap-6 flex-col sm:flex-row items-center">
                        <div className="w-1/2">
                            <p className="text-laranjaStihl font-bold text-lg">
                            » Nosso time não
                            precisa apenas
                            compreender a mudança,
                            tem que ser também
                            parte ativa dela. «
                            </p>
                            <span><strong className="font-stihl-display">CLEOMAR PRUNZEL,</strong><br /> VICE-PRESIDENTE
                            DE ADMINISTRAÇÃO E FINANÇAS</span>
                        </div>
                        <div className="w-1/2">
                            <img src="/72_UtlLider_11.png" alt="" className="w-[1100px]" />
                        </div>
                    </div>

                    <div className="sm:p-9 flex gap-6 flex-col sm:flex-row items-center">
                        <div className="w-1/2">
                             <img src="/72_UtlLider_12.png" alt="" className="w-[1100px]" />  
                        </div>
                        <div className="w-1/2">
                            <p className="text-laranjaStihl font-bold text-lg">
                                 » Produtos e soluções
                                centrados no cliente
                                garantem a nossa dupla
                                liderança: tecnológica
                                e de alta satisfação dos
                                usuários. «
                                </p>
                            <span><strong className="font-stihl-display">ROMÁRIO BRITTO,</strong><br />VICE-PRESIDENTE
                            DE MARKETING E VENDAS</span>
                        </div>
                    </div>
                    
                </div>

                <div className="w-full">
                   <a href="https://www.utilissimolider.com.br/UTL/utl-72/videoStihl.mp4" target="_blank"> <img src="72_UtlLider_14.png" alt="" className="p-9"/></a>
                    <div className="p-9 flex sm:flex-row flex-col gap-4">
                        <div className="w-full flex flex-col gap-6">
                            <p>
                            Neste vídeo, o Presidente do Conselho de Administração do Grupo STIHL, Sr. Michael
                            Traub, fala sobre o cenário da Empresa e a nova estratégia 2030. Foi publicado no
                            Aplicativo de Comunicação Interna, mas você pode rever aqui e recomendar aos
                            integrantes do seu time que também assistam.
                            </p>
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