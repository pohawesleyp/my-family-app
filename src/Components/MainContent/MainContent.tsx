import React from "react";
import momentAvos from '../../assets/_imagens/avos-momento-amor.png';
import festaWes28 from '../../assets/_imagens/festa-wes-28-anos.png'
import '../MainContent/MainContent.scss';

 
export const MainContent: React.FC = () => {
    return (
        <section id="corpo">
            <article id="informacao-principal">
                <header id="cabecalho-artigo">
                    <hgroup>
                        <h1>Sobre essa Grande Familia</h1>
                        <h3>(brigam por qualquer razão🎶)</h3>
                        <br/>
                        <h4><i>Por Wesley Amaro</i></h4>
                        <h4><i>Atualizado em 02/Maio/2025</i></h4>
                    </hgroup>
                </header>

                <figure className="foto-legenda-1">
                    <img src={momentAvos} width={600} alt="Imagem Avós"/>
                    <figcaption>
                        <h2 className="texto-azul-1" style={{color: 'dodgerblue'}}>
                            <b><i>Se o amor fosse uma foto</i></b>
                        </h2>
                        <p>Ocasiões, onde percebemos que estamos sentindo falta de momentos que ainda estamos vivendo</p>
                    </figcaption>
                </figure>

                <h2 className="expressadoAmor">Como é expressado o Amor?</h2>
                <p>Nem todas as formas de deizer "eu te amo" são e/ou serão iguais, mas todas elas ainda serão um "eu te amo".</p>

                <h2 className="perguntaFamiliaSangue">Quem é considerado um familiar?</h2>
                <p>Consideramos familia todos a quem escolhemos, acolhemos e nos acolhem, com o coração e com a vida</p>

                <h2 className="perguntaIdeiaSite">Como surgiu a ideia do site?</h2>
                <p>Um tempo atrás (bem quietinho) eu decidi que era hora de montar um projeto, particular e muito pessoal, mas um projeto, e passei a desenvolver um site familiar. É um algo muito especial para mim, pois se trata de um espaço familiar, onde o foco é guardar e registrar memórias, além de possuir calendários (aniversários), agendas (festas) e por ai vai. São pequenas e grandes coisas, que queremos levar para sempre.</p>

                <h2 className="perguntaIntuitoSite">Qual o intuito do site?</h2>
                <p>O intuito do site, além de criar uma arvore familiar em tempo real, é que ele possa ser uma ancora memorial, alimentada de maneira remota, mensalmente, para além de eternizar os momentos, os sorrisos, os abraços, as lagrimas, as dores, as vindas, as partidas e os que ficaram, também possa nos enfatizar o fato de que se rodear de pessoas que amamos, nos lembra que estamos vivos.</p>

                <figure className="foto-legenda-2">
                    <img src={festaWes28} alt="Festa Wes" width={600}/>
                    <figcaption>
                        <h2 className="texto-azul-2" style={{color: 'dodgerblue'}}>
                            <b><i>Me cercar de pessoas que amo, me faz lembrar que estou vivo!</i></b>
                        </h2>
                        <p>Uma nova maneira de ver o mundo</p>
                    </figcaption>
                </figure>

                <table className="tabelaFamiliar">
                    <caption>Tabela Familiar<span> Maio/2025</span></caption>
                    <tr><td className="ce">Familia Santos</td><td className="cd">Legado de Maria Belmira</td></tr>
                    <tr><td className="ce">Familia Amaro</td><td className="cd">Legado de Maria Amaro</td></tr>
                    <tr><td className="ce">Familia do Coração</td><td className="cd">Legado que Escolhemos</td></tr>
                    <tr><td className="ce">Pet's</td><td className="cd">Animais também são familia!</td></tr>
                </table>

             {/* Aqui entra um possível video */}
            </article>
        </section>
    )
};