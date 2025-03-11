import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { FooterEd } from "./componetesEdicoes/footerEd"
import { Emojis } from "./componetesEdicoes/emojis";

import seta from "../../assets/setas.png"
import dicas from "../../assets/dicas.png"
import mudanca from "../../assets/mudanca.png"
import jeferson from "../../assets/jeferson.png"
import livro from "../../assets/livro.png"

function updateTitle(title: string) {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/edicao73') {
        document.title = title;
      }
    }, [location, title]);
  }

export function Page73(){
    updateTitle('#73 - MARÇO 25 | UTL Líder')
    return(
        <div>
            <section className="relative shadow-slate-400 shadow-xl top-24 sm:w-[700px] flex flex-col items-center gap-5 m-auto">
                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl73/utllide_73-capa.png" alt="UTL Lider edição 73" />
                </div>


                <div className="w-full">
                    <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-viva.png" alt="Sthil trail 2030" />
                </div>
                <div className="w-full flex flex-col gap-6 px-9 pt-4 bg-white">
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex flex-col sm:flex-row gap-4"> 
                            <div className="sm:w-1/2 space-y-4">
                                <p>
                                   <i>
                                        A diversidade e a igualdade de oportunidades
                                        contribuem para uma política de RH
                                        sustentável e ajudam a garantir o sucesso do
                                        Grupo STIHL. Nosso objetivo é capacitar os
                                        funcionários a trazerem seus pontos fortes,
                                        experiências e potencial, independentemente
                                        de gênero, origem, idade ou outras
                                        características.
                                    </i>
                                </p>

                                <p>
                                A afirmação está no mais recente relatório do
                                Grupo STIHL e merece ser lembrada neste
                                momento em que a fábrica brasileira vem
                                contratando muitos novos colaboradores
                                jovens ao mesmo tempo que cresce o
                                número de profissionais acima de 50 anos (veja box).
                                </p>
                                <br />
                                <div className="bg-laranjaStihl w-full h-[450px] py-6 pl-10 space-y-6">
                                    <h3 className="text-white font-stihl-display text-xl">
                                        Idade dos colaboradores no grupo sthil
                                    </h3>
                                    <div className="flex gap-4 text-white text-sm ">
                                        <span>
                                            <img src={seta} alt="" />
                                        </span>
                                        <div>
                                            <span>21% (19%)</span>
                                            <p>Acima de 50 anos</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-white text-sm">
                                        <span>
                                            <img src={seta} alt="" />
                                        </span>
                                        <div>
                                            <span>21% (25%)</span>
                                            <p>Menos de 30 anos</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-white">
                                        <span>
                                            <img src={seta} alt="" />
                                        </span>
                                        <div>
                                            <span>58% (56%)</span>
                                            <p>30 a 40. anos</p>
                                        </div>
                                    </div>
                                    <div className="text-[12px] text-white">
                                    Fonte: Relatório anual 2023 – Dados
                                    arredondados até 31 de dezembro de 2023,
                                    não incluem temporários. Entre parênteses
                                    está o número do ano anterior.
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 space-y-4">
                                <p>
                                Essas diferenças de idade podem
                                        gerar conflitos no dia a dia, como estilos
                                        variados de comunicação, formas distintas
                                        de resolver problemas e expectativas
                                        contrastantes em relação ao trabalho. No
                                        entanto, quando bem geridas, as divergências
                                        podem se transformar em oportunidades,
                                        promovendo um ambiente mais diverso,
                                        criativo e inovador.
                                </p>
                                <p>
                                “Historicamente, as organizações
                                buscam harmonia interna apostando em
                                processos padronizados e profissionais
                                com pensamentos semelhantes. Mas a
                                coexistência de gerações, com visões
                                diferentes, traz uma série de possibilidades
                                criativas e novos caminhos”, diz o consultor
                                Rafael Souto, colunista da revista Você RH.
                                </p>

                                <p>
                                Nesse contexto, torna-se ainda mais
                                importante o papel da liderança. “O
                                líder precisa aproveitar as vantagens da
                                diversidade geracional, criando espaços
                                que incentivem o diálogo e enxerguem as
                                singularidades como ativos valiosos. Essa
                                abordagem pode desbloquear soluções
                                inéditas para problemas complexos – e novos
                                caminhos de negócio”, afirma.
                                </p>

                                <p>
                                Para ele, é necessário compreender os
                                modelos mentais de cada geração, evitar
                                julgamentos e generalizações. “Realmente
                                conhecer as competências e os limites de
                                cada um e incentivar a cooperação.”
                                </p>

                                <p className="font-bold">
                                    Veja mais no box abaixo
                                </p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                
                    <div className="border-2 border-laranjaStihl w-full p-9 flex flex-col gap-5">
                        <h3 className="uppercase font-bold font-stihl-display text-lg">PARA UM MATCH PERFEITO</h3>
                        <div className="flex sm:flex-row flex-col gap-8 items-center">
                            <div>
                                <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-evite.png" alt="ícone" className="w-[550px]"/>
                            </div>
                            <div>
                                <h3 className="text-laranjaStihl font-bold">
                                EVITE GENERALIZAÇÕES
                                </h3>
                                <p>
                                A ideia de que os profissionais mais velhos têm dificuldade
com a tecnologia e que os mais jovens são necessariamente
imediatistas, por exemplo, não é verdadeira. É o que revelou a
Pesquisa de Diversidade Geracional 2024, da PwC Brasil em
parceria com a FGV.
                                </p>
                            </div>
                            
                        </div>

                        <div className="flex sm:flex-row flex-col gap-8 items-center">
                            <div>
                                <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-rompa.png" alt="ícone" className="w-[550px]"/>
                            </div>
                            <div>
                                <h3 className="text-laranjaStihl font-bold">
                                ROMPA PARADIGMAS
                                </h3>
                                <p>
                                Atrelar promoções ao "tempo de casa" ou achar que jovens
                                não podem ser líderes são pensamentos ultrapassados. Uma
                                série de estudos mostra que valorizar a diversidade geracional
                                aumenta o engajamento, fomenta a inovação e contribui para
                                uma cultura mais inclusiva.
                                </p>
                            </div>
                        </div>

                        <div className="flex sm:flex-row flex-col gap-8 items-center">
                            <div>
                                <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-transforme.png" alt="ícone" className="w-[550px]"/>
                            </div>
                            <div>
                                <h3 className="text-laranjaStihl font-bold">
                                TRANSFORME DESAFIOS EM OPORTUNIDADES
                                </h3>
                                <p>
                                Como liderança, o seu papel é garantir que a riqueza geracional
                                não seja desperdiçada, mas sim integrada de forma estratégica e
                                eficiente junto à equipe. Faça a mediação de conflitos e promova
                                o entendimento mútuo facilitando a integração e garantindo que
                                todos se sintam ouvidos e valorizados.
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </div>

                <section className="bg-gray pb-6">
                    <div className="w-full mb-5">
                        <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-colaboracao.png" alt="imagem da equipe com as mãos dadas." />
                    </div>
                    <div className="w-full pl-9 pr-9">
                        <h3 className="font-bold mb-8">
                        Um dos princípios norteadores da estratégia STIHL 2030, a Colaboração é
                        fundamental para que a Empresa siga a sua jornada de transformação.
                        </h3>
                        <div className="w-full flex gap-4">
                            <div className="sm:w-1/2 space-y-4">
                                <p>A colaboração é a base de qualquer trabalho
                                    em equipe. Em uma organização global como
                                    o Grupo STIHL, com unidades espalhadas
                                    pelo mundo, colocá-la literalmente em ação
                                    é ainda mais importante e será fundamental
                                    para a jornada transformadora até 2030.</p>
                                    <p>
                                    “Hoje, fala-se muito sobre liderança
                                        humanizada, cultura de aprendizagem
                                        e gestão horizontal em palestras e
                                        workshops. À primeira vista, pode parecer
                                        que as empresas estão incorporando
                                        conceitos já debatidos, mas não é bem
                                        assim. Colaboração é algo muito positivo
                                        e totalmente atual, pois favorece a
                                        produtividade, o diálogo e também o clima
                                        organizacional”, defende Vivian Rio Stella,
                                        pesquisadora e colunista da revista Você RH.
                                    </p>
                                    <p>
                                    André Bersano, executivo do Great Place To
                                    Work (GPTW), destaca que a colaboração
                                    também é uma das principais características
                                    das melhores empresas para se trabalhar.
                                    “É quando o ‘nós’ se sobrepõe ao ‘eu’, ou
                                    seja, todos estão em prol de um mesmo
                                    objetivo”, esclarece.
                                    </p>
                            </div>
                            <div className="sm:w-1/2 space-y-10">
                                <p>
                                O conceito colaboração também nunca esteve
                                tão em voga com a quantidade de empresas
                                de tecnologia, como Spotify e Waze,
                                que têm na sua essência a colaboração.
                                Diferentes usuários, em tempo real, fornecem
                                informações, mesmo que involuntariamente,
                                para um uso comum.
                                </p>

                                <div className="bg-laranjaStihl p-10 text-white space-y-4">
                                    <h3 className="font-stihl-display">
                                    VOCÊ JÁ UTILIZA
                                    TODOS OS RECURSOS
                                    MICROSOFT? ELES
                                    PODEM AJUDAR
                                    A FOMENTAR A
                                    COLABORAÇÃO!
                                    </h3>
                                    <p className="text-sm">
                                    O Planner, por exemplo, facilita
                                    o acesso a outros programas,
                                    como SharePoint, Teams, etc.
                                    Isso permite que todos os
                                    documentos e informações
                                    relevantes estejam centralizados
                                    e facilmente acessíveis para os
                                    demais membros de uma equipe.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="p-9">
                        <img src={dicas} alt="5 dicas" />
                    </div>
                </section>

                <div className="w-full flex flex-col gap-4 ">

                    <div className="pl-9 mb-10">
                        <img src={mudanca} alt="" />
                    </div>
                    <div className="w-full pl-9 pr-9">
                        <div className="w-full flex gap-4">
                            <div className="sm:w-1/2 space-y-4">
                                <p>Ao longo dos seus quase 100 anos de
história, a STIHL teve uma trajetória
marcada por mudanças e evoluções
constantes, mas dificilmente em uma
velocidade tão rápida como a que estamos
vivendo hoje. Novidades tecnológicas,
desafios econômicos e de sustentabilidade –
tudo ao mesmo tempo agora.</p>
                                    <p>
                                    A capacidade de adaptação e a abertura para
novas formas de pensar e agir são habilidades
essenciais para o sucesso nesta transição.
Especialmente as lideranças precisam
estar abertas às mudanças com a agilidade
necessária para prosperar na nova jornada até
2030, sendo exemplo para suas equipes.
                                    </p>
                                    <p>
                                    “A transformação só será possível com o
engajamento de todos. O trabalho coletivo
que cada liderança realiza junto ao seu time
é o que moldará o nosso futuro”, afirma
Bruno Pitzer, Diretor de Recursos Humanos,
Saúde, Segurança e Meio Ambiente.
                                    </p>
                                    <p>
                                    Ele enfatiza que nenhuma modificação
significativa pode ser alcançada de forma
isolada. “Quando trabalhamos juntos,
combinamos conhecimentos e experiências
                                    </p>
                            </div>
                            <div className="sm:w-1/2 space-y-10">
                            <p>
                            “Quando trabalhamos juntos,
                            combinamos conhecimentos e experiências para enfrentar desafios de maneira muito
                            mais eficaz.”
                            </p>
                                <p>
                                Para dar suporte aos líderes nesse
momento, o Grupo STIHL está
disponibilizando treinamentos exclusivos
online, em inglês e em tamanho reduzido,
perfeito para encaixar na rotina atribulada.
                                </p>

                                <div className="p-6 space-y-4 border border-laranjaStihl ">
                                    <h3 className="font-stihl-display text-laranjaStihl text-2xl">
                                       SEJA UM LÍDER<br /> DA MUDANÇA
                                    </h3>
                                    <p className="text-sm">
                                    Acesse o Microsoft Booking para
agendar a melhor data e o melhor
horário do seu treinamento.
O conteúdo é dinâmico e contempla:
                                    </p>
                                    <div className="flex gap-4">
                                        <span className="text-laranjaStihl font-bold">»</span>
                                        <p>
                                        Fundamentos de liderança
                                        em momentos desafiadores;
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-laranjaStihl font-bold">»</span>
                                        <p>
                                        Ferramentas aplicáveis ao dia a dia;
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-laranjaStihl font-bold">»</span>
                                        <p>
                                        Comportamentos para lidar
com incertezas;
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-laranjaStihl font-bold">»</span>
                                        <p>
                                        Reflexões sobre o papel do líder
na mudança.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="w-full">
                   <img src="https://www.utilissimolider.com.br/UTL/utl73/utllider_73-ficaadica.png" alt="" />
                    <div className="p-9 flex sm:flex-row flex-col gap-4">
                        <div className="w-full flex flex-col sm:flex-row gap-6">
                            <div className="sm:w-1/2 space-y-4">
                                <p>
                                Quando um líder compreende os diferentes
perfis comportamentais do seu time, ele
consegue tomar decisões mais assertivas,
resolver conflitos com inteligência,
desenvolver talentos e fortalecer o trabalho
em equipe. Por isso, saber mais sobre
psicologia e comportamento humano pode
ser um grande diferencial.
                                </p>
                                <p>
                                O livro O Animal Social, de Elliot Aronson,
é a dica de Jeferson Ribeiro nesse
sentido. Segundo o Diretor de Engenharia,
Tecnologia, Infraestrutura e Ferramentaria,
a obra explica como o comportamento
humano é moldado por fatores sociais e
emocionais, ajudando a entender por que
as pessoas acreditam no que acreditam
e o que as leva a aderir a determinadas
crenças ou posições, inclusive políticas.
“É impressionante como nossas interações,
experiências e o ambiente influenciam
nossas escolhas e identidades”, analisa.
                                </p>
                            </div>
                            <div className="sm:w-1/2">
                              <img src={jeferson} alt="" />
                            </div>
                        </div>   
                    </div>

                    <div className="p-9 flex sm:flex-row flex-col gap-4">
                        <div className="w-full flex flex-col sm:flex-row gap-6">
                            <div className="sm:w-1/2 space-y-4">
                              <img src={livro} alt="" />
                            </div>
                            <div className="sm:w-1/2 text-end">
                                <p className="text-laranjaStihl text-xl font-bold mb-5">
                                » É impressionante
como nossas interações,
experiências e o ambiente
influenciam nossas escolhas
e identidades.«
                                </p>
                                <span>
                                <strong>JEFERSON RIBEIRO</strong><br />
DIRETOR DE ENGENHARIA,
TECNOLOGIA, INFRAESTRUTURA
E FERRAMENTARIA
                                </span>
                            </div>
                        </div>   
                    </div>
                    
                </div>

                <div className="h-1 bg-gray w-[90%] rounded-sm " />
                <Emojis />
                <FooterEd />
            </section>
        </div>
    )
}