import meusAvos from "../assets/_imagens/avos-momento-amor.png";
import wesJenny from "../assets/_imagens/wes  e jennie aniver neri - equipe rocket.jpg";
import festaWes from "../assets/_imagens/festa-wes-28-anos.png";
import wesbarzin from "../assets/_imagens/wes_barzinho.png";
import wesaAmorKm from "../assets/_imagens/wes_amor600km.png";
import wesSorrisoEmp from "../assets/_imagens/wes_selfie-empresa.png";
import aniverGiu from "../assets/_imagens/aniver-giu.png";
import aniverNeri from "../assets/_imagens/aniver-neri.png";
import aniverGaby from "../assets/_imagens/aniver-gaby1.png";

import "../styles/MultimidiaPage.scss";

function Multimidia() {
  return (
    <section>
      <h1>Testes Multimidia</h1>

      <div className="imagensMulti">
        <img src={meusAvos} alt="AvosPiscina" className="rounded-2xl" />
        <img src={wesJenny} alt="WesJenny" className="rounded-2xl" />
        <img src={festaWes} alt="festaWes" className="rounded-2xl" />
        <img src={wesbarzin} alt="wesbarzin" className="rounded-2xl" />
        <img src={wesaAmorKm} alt="wesaAmorKm" className="rounded-2xl" />
        <img src={wesSorrisoEmp} alt="wesSorrisoEmp" className="rounded-2xl" />
        <img src={aniverGiu} alt="aniverGiu" className="rounded-2xl" />
        <img src={aniverNeri} alt="aniverNeri" className="rounded-2xl" />
        <img src={aniverGaby} alt="aniverGaby" className="rounded-2xl" />
      </div>
    </section>
  );
}

export default Multimidia;
