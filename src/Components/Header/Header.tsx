// import logoImgAmor from "../../assets/_imagens/icone-livro-de-amor.png";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <div className="relative w-full">
        <header
          id="cabecalho"
          className="w-full p-4
      sm:p-6
      md:w-3/4 md:mx-auto md:p-8
      lg:w-2/3 lg:p-10
      xl:w-1/2 xl:p-12"
        >
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
