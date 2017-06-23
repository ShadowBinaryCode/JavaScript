/* un tableau est un objet de type Array */
var joursVide = new Array(); // pour respcter le nommage, il faut déclarer les objets de type Array en pluriel
var jours = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimance");
document.write("le type de l'objet jours est ", typeof(jours), "<br />");
document.write("Le longueur du tableau jours est ", jours.length, "<br />");
document.write("Le type d'une valeur du tableau est ", typeof(jours[0]), "<br />");
jours[6] = "DIMANCE";
for(var i = 0; i < jours.length; i++) {
    document.write("Jour ", i + 1, " = ", jours[i], "<br />");
}

/* copie d'un tableau */
document.write("<br /> ************ Copie d'un tableau ************ <br />");
var joursCopie = new Array();

/* la copie d'un tableau necessite une création par un appel d'un constructeur et une copie élément par élément */
/* var joursCopie = jours; cette ecriture ne permet pas de faire une copie */
for(var i = 0; i < jours.length; i++) {
    joursCopie[i] = jours[i];
}

joursCopie[0] = "LUNDI";
for(var i = 0; i < jours.length; i++) {
    document.write("Jour ", i + 1, " = ", jours[i], "<br />");
}
document.write("<br />");
for(var i = 0; i < joursCopie.length; i++) {
    document.write("Jour ", i + 1, " = ", joursCopie[i], "<br />");
}