/* variables globales */
var prixTotal = 8, prixSomme = 0;
function showPrice(prix1, prix2) {
    /* prixSomme est une variable locale */
    var prixSomme = prix1 + prix2;
    document.write("Le prix Somme dans la fonction interne est ", prixSomme);
    document.write("<br />");
    prixTotal = prixSomme;
}

document.write("Prix Total avant l'appel de la fonction showPrice est ", prixTotal, "<br />"); // 8
document.write("Prix Somme avant l'appel de la fonction showPrice est ", prixSomme, "<br />"); // 0
showPrice(10, 20);
document.write("Prix Total après l'appel de la fonction showPrice est ", prixTotal, "<br />"); // 30
document.write("Prix Somme après l'appel de la fonction showPrice est ", prixSomme, "<br />"); // 0

/* ***************************** */
var p1 = 15;
var pr2 = 5;
function getPrix(prix1, pr2) {
    prix1 = 0;
    pr2 = 0;
}

document.write("p1 avant l'appel de getPrix ", p1,"<br />"); // 15
document.write("pr2 avant l'appel de getPrix ", pr2,"<br />"); // 5
getPrix(p1, pr2);
document.write("p1 après l'appel de getPrix ", p1,"<br />"); // 15
document.write("pr2 après l'appel de getPrix ", pr2,"<br />"); // 5