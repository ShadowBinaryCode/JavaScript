/* tableaux MultiDimensionnel
en javaScript, il n ya pas de tableaux de 2 dimensions, mais on peut créer des tableaux de 2 dimensions en incluant
un tableau dans un autre tableau
*/

var notes = new Array(15, 18, 16, 18);
var modules = new Array();
modules["C"] = notes;
for(var propriete in modules) {
    document.write("Les notes pour le module ", propriete, "<br />");
    for(var i = 0; i < notes.length; i++) {
        document.write("notes ", i, " = ", notes[i], "<br />")   ;
    }    
}

/* exemple 2 */
document.write("<br /> ************** Exemple 2 : les notes de chaque module ************** <br/>");
var modulesNotes = new Array();
modulesNotes["C"] = new Array(15, 18, 17);
modulesNotes["Sql"] = new Array(13, 10, 19, 14);
modulesNotes["Java"] = new Array(17, 15, 12);
for(var property in modulesNotes) {
    document.write("Les notes du module ", property, " : <br />");
    for(var i = 0; i < modulesNotes[property].length; i++) {
        document.write("Note ", i, " = ", modulesNotes[property][i], "<br />");
    }
}