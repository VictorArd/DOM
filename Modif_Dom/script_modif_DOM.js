//Modification n°1
function changeTitles() {
  document.getElementsByClassName("jumbotron-heading")[0].innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByClassName("lead")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();

//Modification n°2
function changeCallToActions() {
  document.getElementsByTagName("a")[4].innerHTML = "OK je veux tester !";
  document.getElementsByTagName("a")[4].href = "http://www.thehackingproject.org";

  document.getElementsByTagName("a")[5].innerHTML = "Non Merci";
  document.getElementsByTagName("a")[5].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions()

//Modification n°3
function changeLogoName() {
  let find = document.getElementsByTagName("a")[3];
  let changeword = find.getElementsByTagName("strong")[0].innerHTML = "The THP Experience";
  let final = find.getElementsByTagName("strong")[0].style.fontSize = "2em";
}
changeLogoName()

//Modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages() {
  var image = document.getElementsByClassName("card");
  for (let card = 0; card < image.length; card++) {
    const element = image[card];
    console.log(imagesArray[card]);
    element.getElementsByTagName("img")[0].src = imagesArray[card];
  }
}
populateImages();

//Modification n°5
function deleteLastCards () {
  var first = document.getElementsByClassName("row")[1];
  var second = first.getElementsByClassName("col-md-4");
  for (let index = second.length - 1; index >= 6 ; index--) {
    const element = second[index];
    first.removeChild(element);
  }
};
deleteLastCards();

//Modification n°6
function changeCardsText () {
  var text = [];
  text[0] = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  text[1] = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  text[2] = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
  console.log(text);
  var first = document.getElementsByClassName("row")[1];
  var second = first.getElementsByClassName("col-md-4");
  for (let index = 0 ; index <= 2 ; index++) {
    const element = second[index];
    element.getElementsByTagName("p")[0].innerHTML = text[index];
  };
};
changeCardsText();
