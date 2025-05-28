import momentAvos from "../../assets/_imagens/avos-momento-amor.png";
import festaWes28 from "../../assets/_imagens/festa-wes-28-anos.png";
import "../MainContent/MainContent.scss";
import Paragrafe from "../../Ui/Paragrafe";
import HeadingH2 from "../../Ui/Heading-H2";

function MainContent() {
  return (
    <section id="corpo">
      <article id="informacao-principal">
        <header id="cabecalho-artigo">
          <hgroup>
            <h1 className="text-black bg-white rounded-[0.1rem] border-y-4 text-center font-akaya text-[15pt] font-[500]">
              Sobre essa Grande Familia
            </h1>
            <h3>(brigam por qualquer razão🎶)</h3>
            <br />
            <h4>
              <i>Por Wesley Amaro</i>
            </h4>
            <h4>
              <i>Atualizado em 02/Maio/2025</i>
            </h4>
          </hgroup>
        </header>

        <figure className="foto-legenda-1">
          <img src={momentAvos} width={600} alt="Imagem Avós" />
          <figcaption>
            <h2 className="texto-azul-1" style={{ color: "dodgerblue" }}>
              <b>
                <i>Se o amor fosse uma foto</i>
              </b>
            </h2>
            <Paragrafe>
              Ocasiões, onde percebemos que estamos sentindo falta de momentos
              que ainda estamos vivendo
            </Paragrafe>
          </figcaption>
        </figure>

        <HeadingH2>Como é expressado o Amor?</HeadingH2>
        {/* fiz apenas pra pular linha o código tava muito grudado  */}
        <Paragrafe>
          Nem todas as formas de deizer "eu te amo" são e/ou serão iguais, mas
          todas elas ainda serão um "eu te amo".
        </Paragrafe>

        <HeadingH2>Quem é considerado um familiar?</HeadingH2>
        {/* fiz apenas pra pular linha o código tava muito grudado  */}
        <Paragrafe>
          Consideramos familia todos a quem escolhemos, acolhemos e nos acolhem,
          com o coração e com a vida
        </Paragrafe>

        <HeadingH2>Como surgiu a ideia do site?</HeadingH2>
        {/* fiz apenas pra pular linha o código tava muito grudado  */}
        <Paragrafe>
          Um tempo atrás (bem quietinho) eu decidi que era hora de montar um
          projeto, particular e muito pessoal, mas um projeto, e passei a
          desenvolver um site familiar. É um algo muito especial para mim, pois
          se trata de um espaço familiar, onde o foco é guardar e registrar
          memórias, além de possuir calendários (aniversários), agendas (festas)
          e por ai vai. São pequenas e grandes coisas, que queremos levar para
          sempre.
        </Paragrafe>

        <HeadingH2>Qual o intuito do site?</HeadingH2>
        {/* fiz apenas pra pular linha o código tava muito grudado  */}
        <Paragrafe>
          O intuito do site, além de criar uma arvore familiar em tempo real, é
          que ele possa ser uma ancora memorial, alimentada de maneira remota,
          mensalmente, para além de eternizar os momentos, os sorrisos, os
          abraços, as lagrimas, as dores, as vindas, as partidas e os que
          ficaram, também possa nos enfatizar o fato de que se rodear de pessoas
          que amamos, nos lembra que estamos vivos.
        </Paragrafe>

        <figure className="foto-legenda-2">
          <img src={festaWes28} alt="Festa Wes" width={600} />
          <figcaption>
            <h2 className="texto-azul-2" style={{ color: "dodgerblue" }}>
              <b>
                <i>
                  Me cercar de pessoas que amo, me faz lembrar que estou vivo!
                </i>
              </b>
            </h2>
            <Paragrafe>Uma nova maneira de ver o mundo</Paragrafe>
          </figcaption>
        </figure>

        <table className="tabelaFamiliar">
          <caption>
            Tabela Familiar<span> Maio/2025</span>
          </caption>
          <tr>
            <td className="ce">Familia Santos</td>
            <td className="cd">Legado de Maria Belmira</td>
          </tr>
          <tr>
            <td className="ce">Familia Amaro</td>
            <td className="cd">Legado de Maria Amaro</td>
          </tr>
          <tr>
            <td className="ce">Familia do Coração</td>
            <td className="cd">Legado que Escolhemos</td>
          </tr>
          <tr>
            <td className="ce">Pet's</td>
            <td className="cd">Animais também são familia!</td>
          </tr>
        </table>

        {/* Aqui entra um possível video */}
      </article>
    </section>
  );
}

export default MainContent;
