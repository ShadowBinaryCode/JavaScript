/* objet maitre */
function Maitre(txtNom, txtPays, txtMetier) {
    this.nom = txtNom;
    this.pays = txtPays;
    this.metier = txtMetier;
    this.print = affMaitre;
}

function affMaitre() {
    with(this) {
        document.write("nom = ", nom, ", pays = ", pays, ", metier = ", metier, "<br />");
    }
}
/* Object Chien */
function Chien(txtNom, txtRace, objectMaitre) {
    /* Les pripriétés */    
    this.nom = txtNom;
    this.race = txtRace;
    this.maitre = objectMaitre;
    this.print = affChien; 
}

function affChien() {
    with(this) {
        /* document.write("Ce chien s'appelle ", nom, " de race ", race, ", il appartient à ", maitre.nom, " qui habite en ", maitre.pays, ", et qui a comme métier ", maitre.metier, "<br />"); */
        document.write("Ce chien s'appelle ", nom, " de race ", race, ", il appartient à ");
        maitre.print()
    }
}

var david = new Maitre("david", "france", "dresseur");
david.print();

var chienTata = new Chien("chien youyou", "Homme", david);
chienTata.print();

david.nom = "karim";
david.pays = "Maroc";
chienTata.print();