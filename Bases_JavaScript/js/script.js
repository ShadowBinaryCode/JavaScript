document.write("fichier javascript externe !! <br />");
/* declaration et initialisation des variables no et NO
l'opérateur "=" pour faire l'affectation
*/
var no = 5, NO = 15;
var taux = 25.50;
var prixTotal = taux * 10;
document.write("Le prix total est ",prixTotal, "<br />");
if(no > 1) {
    document.write("Le compteur vaut : ", no, " et la variable NO est ", NO, "<br />");
}

/* type de données */
var var1 = 12, var2 = 15.16, var3 = "adios amigos", var4 = 'a', var5;
var vrai = true, faux = false;

if(typeof(var5) == "undefined") {
    alert("var5 est undefined !!");
}
/*
    si la valeur d'une variable est différente à 0, on la concidére toujours vrai
    si la valeur d'une variable est égal à 0, on la concidére comme faux
*/

var se = 12;
// tester l'égalité entre deux valeurs
if(se == 12) {
    document.write("bien !! <br />");
}
// tester la différence entre deu valeurs
if(se != 13) {
    document.write("trèèès bien !! <br />");
}

document.write("le type de var1 est ", typeof(var1), "<br />");
document.write("le type de var2 est ", typeof(var2), "<br />");
document.write("le type de var3 est ", typeof(var3), "<br />");
document.write("le type de var4 est ", typeof(var4), "<br />");
document.write("le type de var5 est ", typeof(var5), "<br />");
var5 = 50;
document.write("le type de var5 est ", typeof(var5), "<br />");
document.write("Vrai = ", vrai, " et faux = ", faux, " de type ", typeof(vrai), "<br />");

var note1 = 12, note2 = 13;
if(note1 == 12 && note2 == 13) {
    document.write("les notes sont bien remplie <br />");
}
if(note1 == 12 || note2 == 13) {
    document.write("les notes sont bien remplie une deuxième fois<br />");
}