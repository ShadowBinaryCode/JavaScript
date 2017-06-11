/* Boucle for : boucle itérative */
var somme = 0;
for(var i = 0; i < 10; i++) {
    somme += i;
}
document.write("La somme est ", somme, "<br />");
document.write("la valeur de i est ", i, "<br />");

/* Boucle conditionnelle */
var som = 0;
var n = 0;
while(som < 100) {
    n++;
    som += n;
}
document.write("Somme ", som, "<br />");
document.write("n = ", n, "<br />");

/* même exemple de som mais cette fois avec la boucle for */
var sm = 0;
for(var j = 0; sm < 100; j++) {
    sm += j;
}
document.write("Somme ", sm, "<br />");
document.write("j = ", j, "<br />");

/* boucle do while */
var som2 = 0;
var compteur = 0;
do {
    compteur++;
    som2 += compteur;    
} while(som2 < 100);
document.write("Som2 = ", som2, "<br />");
document.write("compteur = ", compteur, "<br />");