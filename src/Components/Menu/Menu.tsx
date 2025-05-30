import "../Menu/Menu.scss";

function Menu() {
  return (
    <div className="">
      <nav id="menu" className="fixed top-0 left-0 right-0 z-50">
        <ul className="flex justify-between p-0 list-none w-full max-w-screen-xl mx-auto max-h-full min-w-min">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="multimidia">Multimidia</a>
          </li>
          <li>
            <a href="familia-santos">Familia Santos</a>
          </li>
          <li>
            <a href="familia-amaro">Familia Amaro</a>
          </li>
          <li>
            <a href="familia-coracao">Familia do Coração</a>
          </li>
          <li>
            <a href="aniversarios">Aniversários</a>
          </li>
          <li>
            <a href="alem-da-vida">Além da Vida</a>
          </li>
          <li>
            <a href="fale-conosco">Fale Conosco</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
