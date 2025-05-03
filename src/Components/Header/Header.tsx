import React from "react";
import logoImgAmor from '../../assets/_imagens/icone-livro-de-amor.png'; 
import '../Header/Header.scss';

export const Header: React.FC = () => {
    return (
        <>
        <header id="cabecalho">
            <hgroup>
                <h1 className="logo-principal">Tudo Sobre Amor</h1>
                <h2>Aqui está registrado as inumeras e diferentes formas dessa grande familia dizer "eu te amo"</h2>
            </hgroup>
            <img id="flutuante" src={logoImgAmor} alt="icone amor amor" width={200}/>
        </header>
        </>
    );
}


// export default Header;