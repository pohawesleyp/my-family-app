import React from "react";
import { Header } from "./Components/Header/Header.tsx";
import { Menu } from "./Components/Menu/Menu.tsx";
import { MainContent } from "./Components/MainContent/MainContent.tsx";
import { Lateral } from "./Components/Lateral/Lateral.tsx";
import { Footer } from "./Components/Footer/Footer.tsx";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <div
        id="interface"
        className="w-[max-content] bg-[rgb(158,223,243)] my-2.5 mx-auto p-2.5 shadow-lg"
      >
        <Header />
        <Menu />
        <MainContent />
        <Lateral />
        <Footer />
      </div>
    </>
  );
};

export default App;
