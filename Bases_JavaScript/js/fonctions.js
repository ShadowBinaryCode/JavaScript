function getPluriel(nb) {
    if(nb > 1) {
        return "s";
    }
    return "";
}

function getPluriel2(nb) {
return nb > 1 ? "s" : "";    
}

/* fonction sans paramètre : conciédé par javascript comme une instruction */
function showMessage() {
    document.write("fonction (procédure) pour afficher un message simple<br />");
}

var nbArticle = 10, nbCommande = 1;
document.write("vous avez ", nbArticle, " Article", getPluriel(nbArticle), "");
document.write(" dans ", nbCommande, " Commande", getPluriel(nbCommande), "<br />");
showMessage();
document.write("vous avez ", nbArticle, " Article", getPluriel2(nbArticle), "");
document.write(" dans ", nbCommande, " Commande", getPluriel2(nbCommande), "<br />");