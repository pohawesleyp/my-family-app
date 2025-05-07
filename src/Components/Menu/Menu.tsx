import React from "react";
import '../Menu/Menu.scss';

export const Menu: React.FC = () => {
    return (
     <nav id="menu">
      <h1>Menu Principal</h1>
        <ul>
        <li><a href="home">Home</a></li>
        <li><a href="multimidia">Multimidia</a></li>
        <li><a href="familia-santos">Familia Santos</a></li>
        <li><a href="familia-amaro">Familia Amaro</a></li>
        <li><a href="familia-coracao">Familia do Coração</a></li>
        <li><a href="aniversarios">Aniversários</a></li>
        <li><a href="alem-da-vida">Além da Vida</a></li>
        <li><a href="fale-conosco">Fale Conosco</a></li>
        </ul>
     </nav>
    );
};


// export default Menu;