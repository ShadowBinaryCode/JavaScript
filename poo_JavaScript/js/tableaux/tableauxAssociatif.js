/* tableaux spéciaux permet par exemple d'associer une clé à une valeur, l'inconvenient c'est qu'on peut pas faire
une boucle iteratif "for" pour accéder aux valeurs de tableaux, pour accéder à ces valeurs on a besoin obligatoirement à connaitre
la clé, par contre, ce type de tableaux, on l'utilise surtout avec la boucle "for in" */
var notes = new Array();
notes["C++"] = "Langage C++";
notes["C#"] = "Langage C#";
notes["DBA"] = "Data Base Administrator";
for(var propriete in notes) {
    document.write(propriete, " = ", notes[propriete], "<br />");
}