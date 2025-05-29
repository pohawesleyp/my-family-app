import Header from "./Components/Header/Header.tsx";
import Menu from "./Components/Menu/Menu.tsx";
import MainContent from "./Components/MainContent/MainContent.tsx";
import Lateral from "./Components/Lateral/Lateral.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import "./styles/global.css";

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
          <MainContent />
          <Lateral />
        </div>{" "}
        {/* Fim da nova div */}
        <Footer />
      </div>
    </>
  );
}

export default App;
