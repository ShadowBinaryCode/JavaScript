/*  Voici une liste des méthodes de l'objet Array qui facilite la gestion des tableaux */

// concat : c'est une méthode qui permet de concaterener deux tableaux
var villesNord = new Array("Tanger", "Tetouan", "Kessar Kebir");
var villesCentre = new Array("Rabat", "Casablanca", "Sela");
var villesAll = villesNord.concat(villesCentre);
document.write(villesAll.join(", "));
document.write("<br />");

/* Join : cette méthode regroupe tous les élèments d'un tableau sous forme de chaine de caractere Syntaxe --> tableau.join(separateur); */

/* pop est une méthode qui supprime le dernier element d'un tableau, elle ne retourne rien, le dernier element est supprimé directement dans le tableau */
var tableauxPop = new Array("aa", "bb", "cc");
tableauxPop.pop();
document.write(tableauxPop.join(", "));
document.write("<br />");

/* push est une méthode qui rajoute des elements à la fin d'un tableau, elle ne retourne pas rien comme pop */
var notesJUnit = new Array(18, 14, 19, 17, 20);
document.write(notesJUnit.join(", "), "<br />");
notesJUnit.push(19.5, 18.5);
document.write(notesJUnit.join(", "), "<br />");

/* reverse est une méthode qui inverse l'ordre des elements d'un tableau, elle modifie le tableau directement et elle ne retourne rien */
var notesReverse = new Array(12, 15, 19, 06, 07);
document.write(notesReverse.join(", "), "<br />");
notesReverse.reverse();
document.write(notesReverse.join(", "), "<br />");

/* shift supprime le premier element d'un tableau et décale les indices, elle ne retourne pas de résultat */
var notesShift = new Array(18, 17, 12, 19);
document.write("Le nombre d'elements est ", notesShift.length, " --> ", notesShift.join(", "), "<br />");
notesShift.shift();
document.write("Le nombre d'elements est ", notesShift.length, " --> ", notesShift.join(", "), "<br />");

/* slice extrait une tranche d'un tableau, elle retourne le tableau extrait, syntaxe : tableau.slice(debut, fin) avec un indice
superieur ou egal à debut et inferieur à fin */
document.write("Exemple méthode slice <br />");
var notesSlice = new Array(15, 14, 12, 19, 17, 15, 17);
var notesSliceExtrait = notesSlice.slice(2, 5);
// longeur de tableau est 5 - 2 = 3, le resultat extrait est les elements 2,3 et 4
document.write(notesSliceExtrait.join(", "), "<br />");

/* sort permet de trier un tableau en ordre croissant ou alphabetiue, elle ne retourne rien */
/* 
    remarque : reverse ordonne un tableau de chaine en ordre alphabetique decroissant 
*/
var notesSort = new Array(17, 12, 19, 10, 14);
notesSort.sort();
document.write(notesSort.join(", "), "<br />");

/* splice ecrase une tranche d'un tableau, elle ne retourne pas de résultat, syntaxe --> tableau.splice(debut, longueur) 
syntaxe 2 : tableau.splice(debut, lonngeur, element1, .., elementN) si on veut remplacer les elements ecrasés par autre élèments
*/
document.write("Exemple méthode splice <br />");
var notesSplice = new Array(17, 12, 19, 10, 14, 20, 13, 08);
document.write(notesSplice.join(", "), "<br />");
notesSplice.splice(2, 5); // on va commencer par l'indice 2, et on supprime 5 element à partir de cet indice
document.write(notesSplice.join(", "), "<br />");
document.write("pour remplacer les elements ecrasés par autres elements : <br />");
var notesSplice2 = new Array(17, 12, 19, 10, 14, 20, 13, 08);
notesSplice2.splice(2, 3, 19.5, 19.5, 18.5);
document.write(notesSplice2.join(", "), "<br />");

/* unshift insere des elements au début d'un tableau,les indices existant sont decalés, et la fonction ne retourne pas de resultat */
document.write("Exemple méthode unshift <br />");
var notesUnshift = new Array(17, 12, 19, 10, 14, 20, 13, 08);
document.write(notesUnshift.join(", "), "<br />");
notesUnshift.unshift(09, 01);
document.write(notesUnshift.join(", "), "<br />");