/* exemple de la propriéré "title" de l'objet "document"  
l'objet "document" et le sous objets de l'objet parent "window"
généralement, "window" est l'objet père de l'objet "document", mais puisque javaScript est tolérant,
quand on utilise document, le navigateur sait qu'il s'agit bien de l'objet "document" de l'objet père "window"
*/
document.write("Titre initial : ", document.title, "<br />");
document.title = "le nouvelle titre";
document.write("Titre final : ", document.title, "<br />");

/* en javaScript, il n'est pas necessaire de préfixer les méthodes et les propriétés de l'objet "window"
par exemple window.alert() présente la même chose que alert()
*/
alert("Alert message");

/* for in est utilisé surtout pour les objets 
la limite de for in c'est qu'elle ne permet pas d'afficher toute les propriétés de notre objet,
parce que certaines proprietes sont définies par javascript comme cachés, donc, on peut pas les affichés
*/
document.write("la liste des propriétés de l'objet document : <br />");
for(var property in document) {
    document.write(property, " = ", document[property], "<br />");
}

/* l'instruction with permet un accés aux propriétés et aux méthodes d'un objet sans utiliser obligatoirement la notation pointée */
with(document) {
    write("<br />");
    write("title = ", title, "<br />");
    write("lastModified = ", lastModified, "<br />");
    write("URL = ", URL,"<br/>")
}