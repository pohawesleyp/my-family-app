import React from "react";
import '../Lateral/Lateral.scss';

export const Lateral: React.FC = () => {
    return (
        <aside className="lateral"> 
        <h1 className="perguntaOqL">Um dia me perguntaram: Afinal, o que é o luto?</h1>
        <p><i>Naquele momento eu só pude parar e refletir em uma maneira de explicar aquilo, em explicar o sentimento, que talvez, não tenha explicação. Se você nunca amou alguém de fato, ou amou e nunca perdeu, talvez não tenha como te explicar como o sentimento se parece, mas o que eu posso afirmar é que nem tudo é dor. Você ri, você celebra momentos, você revive memórias e lembra da alegria, mesmo em meio a dor, pois afinal, o que mais seria o luto se não o amor que perdura?</i></p>

        <h2 className="musicaLateral">Musica</h2>
        <div className="video-youtube">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/R2AAukCydjM?si=XIgUjvDaTuBhIIc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </div>

        <h1 className="além-da-vida">Além da Vida</h1>
        <p>12 anos e 9 meses sem você: Maria Belmira (bisavó/mãe)</p>
        <p>8 anos sem você: Lucia Maria (tia/mãe)</p>
        <p>9 meses sem você: José Nou (vô/pai)</p>

        <h2 className="viva">Viva!</h2>
        <p>Que possamos celebrar em vida e eternizar as memorias de quem amamos.</p>
        </aside>
    );
}