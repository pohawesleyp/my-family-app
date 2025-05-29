import "../Lateral/Lateral.scss";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import Paragrafe from "../../Ui/Paragrafe";

function Lateral() {
  const navigate = useNavigate();

  const handleGoToAgenda = () => {
    const query = new URLSearchParams();
    query.set("title", "Agenda de Eventos");
    query.set("description", "Cada evento terá sua data e hora marcada aqui");
    navigate(`/agenda?${query.toString()}`);
  };
  return (
    <div className="flex-1 pr-4 md:pr-6 lg:pr-8 py-4 sm:py-6 lg:py-8 border-r">
      <aside className="lateral">
        <h2 className="evento-agenda font-[Times_New_Roman] text-[1.666rem] text-center pt-[0.9rem] my-0 mb-6 mx-auto max-w-screen-lg">
          <button className="justify contents-center gap-2 font-akaya text-[#1f1e1e] bg-[#f4f4f4] px-2 py-2 rounded-full shadow-md transition-colors duration-500 hover:text-[#f8f1f1] hover:bg-[#990a4d]">
            Eventos
          </button>{" "}
          &nbsp; &nbsp;{" "}
          <button
            onClick={handleGoToAgenda}
            className="justify contents-center gap-2 font-akaya text-[#1f1e1e] bg-[#f4f4f4] px-2 py-2 rounded-full shadow-md transition-colors duration-500 hover:text-[#f8f1f1] hover:bg-[#990a4d]"
          >
            <CalendarDays className="w-50 h-50" />
            Agenda
          </button>{" "}
        </h2>

        <h1 className="perguntaOqL">
          Um dia me perguntaram: Afinal, o que é o{" "}
          <span style={{ color: "black" }}>luto?</span>
        </h1>
        <Paragrafe>
          <i>
            Naquele momento eu só pude parar e refletir em uma maneira de
            explicar aquilo, em explicar o sentimento, que talvez, não tenha
            explicação. Se você nunca amou alguém de fato, ou amou e nunca
            perdeu, talvez não tenha como te explicar como o sentimento se
            parece, mas o que eu posso afirmar é que nem tudo é dor. Você ri,
            você celebra momentos, você revive memórias e lembra da alegria,
            mesmo em meio a dor, pois afinal, o que mais seria o luto se não o
            amor que perdura?
          </i>
        </Paragrafe>

        <h2 className="musicaLateral">Musica</h2>
        <div className="video-youtube w-full max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/R2AAukCydjM?si=XIgUjvDaTuBhIIc4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <Paragrafe>
          E em seus olhos eram tanto brilho, que mais que seu filho, eu fiquei
          seu fã
        </Paragrafe>

        <div
          id="lateral-alem-vida"
          className="w-full max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8"
        >
          <h1 className="além-da-vida">Além da Vida</h1>
          <Paragrafe>
            <li>
              12 anos e 9 meses sem você:{" "}
              <span className="luto">Maria Belmira (bisavó/mãe)</span>
            </li>
            <li>
              8 anos sem você:{" "}
              <span className="luto">Lucia Maria (tia/mãe)</span>
            </li>
            <li>
              9 meses sem você: <span className="luto">José Nou (vô/pai)</span>
            </li>
          </Paragrafe>
        </div>

        <h2 className="viva">Viva!</h2>
        <Paragrafe>
          Que possamos celebrar em vida e eternizar as memorias de quem amamos.
        </Paragrafe>
      </aside>
    </div>
  );
}

export default Lateral;
