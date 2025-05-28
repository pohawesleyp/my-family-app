import "../Footer/Footer.scss";
import Paragrafe from "../../Ui/Paragrafe";

function Footer() {
  return (
    <footer className="rodape">
      <Paragrafe>
        Copyright 2025 - by Wesley Amaro <br />
        <a
          href="http://linkedin.com/in/wesley-amaro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        |{" "}
        <a
          href="http://https://github.com/pohawesleyp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="http://instagram.com/pohawesleyp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        |{" "}
        <a
          href="http://https://github.com/pohawesleyp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portifólio (Em Desinvolvimento)
        </a>{" "}
        |{" "}
      </Paragrafe>
    </footer>
  );
}

export default Footer;
