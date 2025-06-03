import "../Menu/Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="">
      <nav id="menu" className="fixed top-0 left-0 right-0 z-50">
        <ul className="flex justify-between p-0 list-none w-full max-w-screen-xl mx-auto max-h-full min-w-min">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/multimidia">Multimidia</Link>
          </li>
          <li>
            <Link to="/familiasantos">Familia Santos</Link>
          </li>
          <li>
            <Link to="/familiaamaro">Familia Amaro</Link>
          </li>
          <li>
            <Link to="/familiacoracao">Familia do Coração</Link>
          </li>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/alemdavida">Além da Vida</Link>
          </li>
          <li>
            <Link to="/faleconosco">Fale Conosco</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
