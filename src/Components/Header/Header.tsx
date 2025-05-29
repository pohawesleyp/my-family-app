// import logoImgAmor from "../../assets/_imagens/icone-livro-de-amor.png";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <div className="relative w-full">
        <header id="cabecalho">
          <hgroup>
            <h1 className="logo-principal">Tudo Sobre Amor</h1>
            <h2>
              Aqui está registrado as inumeras e diferentes formas dessa grande
              familia dizer "eu te amo"
            </h2>
          </hgroup>
          {/* <img
            id="flutuante"
            src={logoImgAmor}
            alt="icone amor"
            className="absolute bottom-8 right-4 w-24
                   md:bottom-8 md:right-8 md:w-32
                   lg:bottom-12 lg:right-12 lg:w-40"
          /> */}
        </header>
      </div>
    </>
  );
}

export default Header;
