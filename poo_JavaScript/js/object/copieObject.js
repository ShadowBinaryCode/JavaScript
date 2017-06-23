function Maitre(txtNom, txtPays, txtMetier) {
    this.nom = txtNom;
    this.pays = txtPays;
    this.metier = txtMetier;
    this.toString = print;
    /* c'est de méthode sont les mêmes, c'est juste la façon de programmer c'est deux fonctions qui est différente */
    this.copierVers = copie;
    this.copierVers2 = copie2;
}

function print() {
    document.write("Nom = ", this.nom, ", Pays = ", this.pays, ", Metier = ", this.metier, "<br />");
}

var maitreLuck = new Maitre("david", "france", "dresseur");
/* si on affecte maitreLuck à maitreLuckCopie, on fait pas un copie d'un objet, mais les deux vont pointer sur le même objet de référence,

document.write("affichage après modification de pays <br />");c'est à dire que si je modifie une propriété de l'objet maitreLuckCopie, l'objet maitreLuck va être modifié aussi */
var maitreLuckCopie = maitreLuck;

maitreLuck.toString();
maitreLuckCopie.toString();

maitreLuckCopie.pays = "Belgique";
maitreLuckCopie.toString();

/* copie d'objet */
var maitreTintin = new Maitre("Tintin", "USA", "Inspecteur");
/* pour faire un copie d'un objet, il faut passer par l'opérateur new */

/* le probleme de cette maniere, c'est que si on veut créer d'autres copie, il faut toujours passer comme parametre pour l'objet
de copie, les valeurs de l'objet d'origine, ce qui est fatigant, c'est mieux d'ecrire une méthode qui fait ça */
var maitreTintinCopie = new Maitre(maitreTintin.nom, maitreTintin.pays, maitreTintin.metier);

document.write("affichage avant modification de pays <br />");
maitreTintin.toString();
maitreTintinCopie.toString();

document.write("affichage après modification de pays <br />");
maitreTintinCopie.pays = "Great Bretagne";
maitreTintin.toString();
maitreTintinCopie.toString();

/* méthode pour copie les parametres de l'objet d'origine dans l'objet de copie */
function copie() {
    return new Maitre(this.nom, this.pays, this.metier);
}

function copie2(objectMaitre) {
    objectMaitre.nom = this.nom;
    objectMaitre.pays = this.pays;
    objectMaitre.metier = this.metier;
}

/* cas avec une méthode de copie */
document.write("<br /> méthode copie1 ********** avant modification ********** <br />");
/* objet d'origine */
var maitreYohan = new Maitre("Yohan", "france", "warrior");
var maitreYohanCopie = maitreYohan.copierVers();
maitreYohan.toString();
maitreYohanCopie.toString();

document.write("<br /> ********** après modification ********** <br />");
maitreYohanCopie.pays = "Italie";
maitreYohan.toString();
maitreYohanCopie.toString();

/* cas avec une méthode de copie 2*/
document.write("<br /> méthode copie1 ********** avant modification ********** <br />");
/* objet d'origine */
var maitreY = new Maitre("Y", "france", "Prof");
var maitreYCopie = new Maitre();
maitreY.copierVers2(maitreYCopie)
maitreY.toString();
maitreYCopie.toString();

document.write("<br /> méthode copie2 ********** après modification ********** <br />");
// maitreYCopie.pays = "Espagne"; ou
maitreYCopie["pays"] = "Espagne";
maitreY.toString();
maitreYCopie.toString();