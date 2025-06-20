import momentAvos from "../../assets/_imagens/avos-momento-amor.png";
import festaWes28 from "../../assets/_imagens/festa-wes-28-anos.png";
import "../MainContent/MainContent.scss";
import Paragrafe from "../../Ui/Paragrafe";
import HeadingH2 from "../../Ui/Heading-H2";

function MainContent() {
  return (
    <section
      id="corpo"
      className="flex-2 pr-4 md:pr-6 lg:pr-8 py-4 sm:py-6 lg:py-8 border-r border-[rgb(255,255,255)] w-full max-w-screen-xl mx-auto max-h-full min-w-min"
    >
      <div className="w-full max-w-screen-xl mx-auto max-h-full min-w-min">
        <article id="informacao-principal">
          <header id="cabecalho-artigo">
            <hgroup>
              <h1 className="text-blue-900 bg-white rounded-[0.5rem] border-y-4 text-center font-akaya text-[1.8rem] font-[900]">
                Sobre essa Grande Familia 🦋
              </h1>
              <h3>(brigam por qualquer razão🎶)</h3>
              <br />
              <iframe
                width="560"
                height="330"
                src="https://www.youtube.com/embed/xs0XzbC4zUI?si=CA8B4HSqymlLj-UN"
                title="A Grande Familia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mx-auto block border-r"
              ></iframe>
            </hgroup>
          </header>

          <HeadingH2>Como surgiu a ideia do site?</HeadingH2>
          {/* fiz apenas pra pular linha o código tava muito grudado  */}
          <Paragrafe>
            Há um tempo, de forma bem discreta, decidi que era hora de iniciar
            um projeto. Um projeto particular, muito pessoal, mas ainda assim,
            um projeto. Desde então, comecei a desenvolver um site familiar com
            o propósito de guardar, registrar e eternizar memórias, momentos e
            pessoas queridas. Esse projeto é extremamente especial para mim,
            pois representa um espaço dedicado à família e amigos. Nele, o foco
            é preservar lembranças afetivas, além de incluir funcionalidades
            como calendários de aniversários, agendas de festas e muito mais.
            Com o passar dos anos, entre idas e vindas, percebi o quanto é
            importante eternizar não apenas dentro de mim, mas também em um
            lugar real, tudo aquilo que quero levar para sempre comigo: pessoas,
            histórias, momentos.
          </Paragrafe>

          <figure className="foto-legenda-1 rounded-2xl">
            <img src={momentAvos} alt="Imagem Avós" className="rounded-2xl" />
            <figcaption>
              <h2
                className="texto-azul-1 text-3xl"
                style={{ color: "dodgerblue" }}
              >
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

          <HeadingH2>Qual o intuito do site?</HeadingH2>
          {/* fiz apenas pra pular linha o código tava muito grudado  */}
          <Paragrafe>
            O intuito do site, além de criar uma arvore familiar em tempo real,
            é que ele possa ser uma ancora memorial, alimentada de maneira
            remota, mensalmente, para além de eternizar os momentos, os
            sorrisos, os abraços, as lagrimas, as dores, as vindas, as partidas
            e os que ficaram, também possa nos enfatizar o fato de que se rodear
            de pessoas que amamos, nos lembra que estamos vivos.
          </Paragrafe>

          <HeadingH2>Existe amor entre os citados no site?</HeadingH2>
          {/* fiz apenas pra pular linha o código tava muito grudado  */}
          <Paragrafe>
            Muito, de um jeito desfuncional as vezes, mas muito. Acredito que as
            formas de dizer "eu te amo" não são e/ou não serão iguais, mas todas
            elas ainda expressam "eu te amo".
          </Paragrafe>

          <HeadingH2>Quem é considerado da Familia?</HeadingH2>
          {/* fiz apenas pra pular linha o código tava muito grudado  */}
          <Paragrafe>
            Aprendemos que a familia são e serão todos a quem escolhemos,
            acolhemos e que também nos acolhem, com o coração e com a vida. São
            coisas que vão além do que pode se explicar, mas lendo, ou ouvindo,
            eu sei que você entendeu.
          </Paragrafe>

          <figure className="foto-legenda-2 rounded-2xl">
            <img src={festaWes28} alt="Festa Wes" className="rounded-2xl" />
            <figcaption>
              <h2
                className="texto-azul-2 text-3xl"
                style={{ color: "dodgerblue" }}
              >
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
              <td className="cd">Maria Belmira</td>
            </tr>
            <tr>
              <td className="ce">Familia Amaro</td>
              <td className="cd">Maria Amaro</td>
            </tr>
            <tr>
              <td className="ce">Familia do Coração</td>
              <td className="cd">A que Escolhemos</td>
            </tr>
            <tr>
              <td className="ce">Pet's</td>
              <td className="cd">Animais também são familia!</td>
            </tr>
          </table>
        </article>
      </div>
    </section>
  );
}

export default MainContent;
