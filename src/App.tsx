import React from "react";
import { Header } from './Components/Header/Header.tsx'
import { Menu } from "./Components/Menu/Menu.tsx";
import { MainContent } from "./Components/MainContent/MainContent.tsx";
import { Lateral } from "./Components/Lateral/Lateral.tsx";
import { Footer } from "./Components/Footer/Footer.tsx";
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
    <div id="interface">
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
