@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&display=swap');
@font-face {
    font-family: 'FonteLogo';
    src: url("../_fontes/bubblegum-sans-regular.otf");
}


/*Formatação de corpo e cabecalho*/

body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: black;
}

div#interface {
    width: 950px;
    background-color: saddlebrown;
    margin: 10px auto 10px auto;
    box-shadow: 15px 5px 10px #b6835f;
    padding: 10px 10px 10px 10px;
}

p {
    text-align: justify;
    text-indent: 50px;
}

a {
    color: saddlebrown;
    font-family: 'Bernard MT';
    font-size: 13pt;
    text-decoration: none;
}

a:hover {
    color: antiquewhite;
    text-decoration: underline;
    transition: 1s;
}

header#cabecalho img#flutuante {
    position: absolute;
    left: 950px;
    top: 150px;
    width: 300px;
}

header#cabecalho {
    border-bottom: 2px saddlebrown solid;
    height: 300px;
    background: url("../_imagens/familia-logo-branco.png") 50px 40px;
}

header#cabecalho h1{
    font-family: Georgia;
    font-size: 30pt;
    color: sandybrown;
    text-shadow: 3px 3px 3px black;
    padding: 10px;
    margin-bottom: auto;
}

header#cabecalho h1.logo-principal{
    font-family: 'Bauhaus 93';
    font-size: 50pt;
    color: darksalmon;
    text-shadow: 5px 5px 5px black;
    padding: 8px;
    margin-bottom: 40px;
}

header#cabecalho h2{
    font-family: Algerian;
    font-size: 17pt;
    color: darkorange;
    text-shadow: 3px 3px 3px black;
    padding: 0px;
    margin-bottom: 0px;

}

/*Configurações de imagens com legenda 1*/
figure.foto-legenda-1{
    position: relative;
    border: 3px solid pink;
    box-shadow: 2px 2px 4px black;
   
}

figure.foto-legenda-1 img {
    width: 100%;
    height: 100%;
}

figure.foto-legenda-1 figcaption {
    opacity: 0;
    position: absolute;
    top: 0px;
    background-color: rgba(0,0,0,0.5);
    color: antiquewhite;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: opacity 1s;
    font-family: 'Gill Sans';
    font-weight: bolder;
}

figure.foto-legenda-1:hover figcaption{
    opacity: 2;
}



/* editar depois > preciso aprender a configurar apenas a legenda da foto > h2 */
figure.foto-legenda-1 figcaption h2.texo-azul-1 {
    font-family: Arial;
    color: deeppink;
 }
/* editar depois */



/*Configurações de imagens com legenda 2*/
figure.foto-legenda-2{
    position: relative;
    border: 3px solid pink;
    box-shadow: 2px 2px 4px black;
}

figure.foto-legenda-2 img {
    width: 100%;
    height: 100%;
}

figure.foto-legenda-2 figcaption {
    opacity: -1;
    position: absolute;
    top: 0px;
    background-color: rgba(0,0,0,0.5);
    color: antiquewhite;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: opacity 1s;
    font-family: 'Gill Sans';
    font-weight: bolder;
}

figure.foto-legenda-2:hover figcaption{
    opacity: 2;
}

/*Formatação de Menu*/

nav#menu {
    display: block;
}

nav#menu ul{
    list-style: none;
    text-transform: fullsize-kana;
    position: absolute;
    top: -12px;
    left: auto;
    margin: 5px;
}

nav#menu li{
    display: inline-block;
    background-color: floralwhite;
    padding: 10px;
    margin: auto;
    transition: background-color 1s;
}

nav#menu li:hover{
    background-color: brown;
    text-decoration: underline;
}

nav#menu h1{
    display: flow-root;
}

/* No meu site, acredito que esse menu a não era necessário, pois ele mudou a cor dos links, novamente, porém, tudo referente a link ja foi digitado no comando la em acima*/
nav#menu a{
    color: brown;
    text-decoration: none;
}
/* deixei a mesma cor que foi deixada anteriormente, tanto no nav#menu a, como no hover, aqui abaixo, pois no comando la de cima, já havia sido espeficado todas as cores para links.*/

nav#menu a:hover{
    color: antiquewhite
}
/*  ....  ......  .....  */

section#corpo {
    display: block;
    width: 500px;
    float: left;
    border-right: 1px solid #b6835f;
    padding-right: 20px;
}

article#informacao-principal h2 {
    font-size: 16pt;
    font-family: 'Eras ITC';
    color: black;
    background-color: sandybrown;
    padding: 10px 0px 5px 10px;
    margin: 10px 0px 10px 0px;
}

/*fiz um class só para o Eventos > Agenda*/
article#informacao-principal h2.evento-agenda {
    color: sienna;
    background-color: wheat;
    padding: 15px 10px 10px 0px;
    margin: 10px -10px 15px -3px;
    text-align: center;
}
/*fiz um class + a (link) só para o Eventos > Agenda*/
article#informacao-principal h2.evento-agenda a {
    font-size: 16pt;
    font-family: 'Eras ITC';
    color: sienna;
    padding: 15px 10px 10px 10px;
    margin: 10px -10px 15px -3px;
    text-align: center;
}
/*edição do class + a (link):hover só para o Eventos > Agenda*/
article#informacao-principal h2.evento-agenda a:hover {
    font-size: 16pt;
    font-family: Georgia;
    color: antiquewhite;
    text-decoration: wavy;
    transition: 1s;
    background-color: saddlebrown;
    margin: auto;
}
/*    fim    */

header#cabecalho-artigo h1 {
    font-size: 40pt;
    font-family: Gabriola;
    color: pink;
    text-align: center;
    margin: auto;
}

header#cabecalho-artigo h3 {
    font-size: 20pt;
    font-family: 'Edwardian Script ITC';
    color: pink;
    text-align: center;
    margin: auto;
    margin-top: -15px;
}

header#cabecalho-artigo h4 {
    font-size: 12pt;
    font-family: Gabriola;
    font-weight: bold;
    color: black;
    text-align: right;
    margin: auto;
    margin-top: 15px;
}

table#tabelafam {
    border: 1px solid pink;
    border-spacing: 0px;
    margin-left: auto;
    margin-right: auto;
}

table#tabelafam td {
   border: 1px solid pink;
   padding: 5px;
   text-align: center;
   vertical-align: middle;
}

table#tabelafam td.ce{
   color: lightpink;
   background-color: brown;
   vertical-align: middle;
   font-weight: bold;
   font-family: Castellar;
}

table#tabelafam td.cd{
   color: black;
   background-color: pink;
   vertical-align: central;
   font-weight: initial;
   font-family: Georgia;
}

table#tabelafam caption{
    font-family: Georgia;
    font-size: 18pt;
    color: black;
    vertical-align: central;
    font-weight: bold;
    margin-top: 5px;
}

table#tabelafam caption span{
   display: block;
   float: right;
   font-size: 9pt;
   margin-top: 10px;
   color: black;
}

aside#lateral {
    display: block;
    width: 400px;
    float: right;
    background-color: pink;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}

aside#lateral h1 {
   font-family: 'Bauhaus 93';
   font-size: 25pt;
   color: saddlebrown;
   margin-top: 0px;
}

aside#lateral h1.alem-da-vida {
   font-family: Gigi;
   font-size: 22pt;
   color: darkred;
   margin-top: 0px;
}

aside#lateral h2 {
   font-size: 16pt;
   font-family: 'Eras ITC';
   color: black;
   background-color: sandybrown;
   padding: 10px 0px 5px 10px;
   margin: 10px 0px 10px 0px;
}

aside#lateral h2.dor-no-amor {
   font-size: 16pt;
   font-family: 'Bauhaus 93';
   color: darkred;
   background-color: sandybrown;
   padding: 10px 0px 5px 10px;
   margin: 10px 0px 10px 0px;
}

footer#rodape {
    clear: both;
    border-top: 1px solid black;
}

footer#rodape p{
    text-align: center;
    text-indent: unset;
    font-family: 'Californian FB';
    font-weight: bolder;
}