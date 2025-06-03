// Import de componentes de layout fixos
import Header from "./Components/Header/Header.tsx";
import Menu from "./Components/Menu/Menu.tsx";
import MainContent from "./Components/MainContent/MainContent.tsx";
import Lateral from "./Components/Lateral/Lateral.tsx";
import Footer from "./Components/Footer/Footer.tsx";

// SCSS Global
import "./styles/global.scss";

// Import ferramentas de roteamento e suas páginas
import { Routes, Route } from "react-router-dom";
import AgendaPage from "./pages/AgendaPage.tsx";
import AlemdaVida from "./pages/AlémDaVidaPage.tsx";
import Eventos from "./pages/EventosPage.tsx";
import FaleConosco from "./pages/Fale-ConoscoPage.tsx";
import FamiliaAmaro from "./pages/Familia-AmaroPage.tsx";
import FamiliaCoracao from "./pages/Familia-CoracaoPage.tsx";
import FamiliaSantos from "./pages/Familia-SantosPage.tsx";
import Multimidia from "./pages/MultimidiaPage.tsx";

function App() {
  return (
    <>
      <div
        id="interface"
        className="w-full max-w-screen-2xl mx-auto p-2.5 shadow-lg bg-[rgb(158,223,243)] my-2.5"
      >
        <Header />
        <Menu />
        <div className="flex justify-center w-full shadow-md max-w-screen-2xl mx-auto">
          {" "}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <Lateral />
                </>
              }
            />

            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/alemdavida" element={<AlemdaVida />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/faleconosco" element={<FaleConosco />} />
            <Route path="/familiaamaro" element={<FamiliaAmaro />} />
            <Route path="/familiacoracao" element={<FamiliaCoracao />} />
            <Route path="/familiasantos" element={<FamiliaSantos />} />
            <Route path="/multimidia" element={<Multimidia />} />
          </Routes>
        </div>{" "}
        {/* Fim da nova div */}
        <Footer />
      </div>
    </>
  );
}

export default App;
