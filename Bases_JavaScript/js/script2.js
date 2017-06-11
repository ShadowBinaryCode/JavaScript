document.write("<br />")
/* test if else*/
var a = 1;
if(a == 1) {
    document.write("test réussi <br />")
} else {
    document.write("test n'est pas réussi <br />")
}

/* test multiple */
var b = 1;
switch(b) {
    case 1: document.write("Premier Passage <br />");
        break;
    case 2: document.write("Deuxième Passage <br />");
        break;
    case 3: document.write("Troisième Passage <br />");
        break;
    default: document.write("Autre Passage <br />");
}

/* Opérateur ternaire */
var result = b > 10 ? "b est supérieur à 10" : "b est inférieur à 10";
document.write(result, "<br />");