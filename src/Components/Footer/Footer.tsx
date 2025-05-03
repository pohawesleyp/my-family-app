import React from "react";
import '../Footer/Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer className="rodape"> 
          <p>
           Copyright 2025 - by Wesley Amaro <br />
            <a href="http://linkedin.com/in/wesley-amaro" target="_blank" rel="noopener noreferrer">Linkedin</a> |{' '}
            <a href="http://https://github.com/pohawesleyp" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="http://instagram.com/pohawesleyp" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
            <a href="http://linkedin.com/in/wesley-amaro" target="_blank" rel="noopener noreferrer">Portifólio (Em Desinvolvimento)</a> |{' '}
         </p>
        </footer>
    );
}