/* Création objet en JavaScript
pour créer un objet, la premiere chose est de créer une fonction qui définit la structure de notre objet, c'est à dire
créer un constructeur
this présente l'objet en cours
*/
function Chien(txtNom, txtRace, txtMaitre) {
    /* Les pripriétés */
    this.nom = txtNom;
    this.race = txtRace;
    this.maitre = txtMaitre;
    
    /* ajout d'une méthode pour l'affichage */
    /* il est possible de mettre this.print = print; c'est à dire garder le même nom, mais pour des causes
    de lisibilité, on préfére de donner des noms différents, pareil pour les propriétés */
    this.print = affChien; 
}

/* Définition de la méthode affChien */
function affChien() {
    /* document.write("Ce chien s'appelle ", this.nom, " de race ", this.race, ", il appartient à ", this.maitre, "<br />"); */
    /* pour eviter d'ecrire this à chaque fois, on peut utiliser with */
    with(this) {
        document.write("Ce chien s'appelle ", nom, " de race ", race, ", il appartient à ", maitre, "<br />");
    }
}

/* Création d'une instance de type Chien */
var chien1 = new Chien("a", "indéfinie", "aaaa");
with(document) {
    write("Nom = ", chien1.nom, "<br />");
    write("Race = ", chien1.race, "<br />");
    write("Maitre = ", chien1.maitre, "<br />");
}
chien1.print(); /* cette fonction s'exécute alors que this égale à l'instance chien1 */
document.write("chien1 = ", chien1, "<br />"); /* il s'agit d'un objet de type Object */
document.write("le type de chien1 est = ", typeof(chien1), "<br />");