/* 
exemple d'une application qui utilise un tableau de pays du monde, et qui donne les pays en fonction des premiers 
lettres saisies
*/
function creerListe() {
    this.search = "";
    this.nb = 0;
    this.Add = ajouterItem;
    this.Afficher = afficherListe;
    this.MAJ = MAJListe;
    this.getNom = getNomListe;
}

// Méthode d'ajout de pays
function ajouterItem(item) {
    this[this.nb] = item;
    this.nb++;
}

// Affichage
function afficherListe() {
    if(document.getElementById) {
        document.write("<div id=\"divPays\" style=\"\"></div>");
    }
}

// Récupération du nom
function getNomListe(indice) {
    document.forms["monform"].search.value = this[indice];
}

// Mise à jour de la liste en fonction des lettres saisies
function MAJListe(txt) {
    var txtAff = "";
    var nb = 0;
    if(txt == "") {
        document.getElementById("divPays").innerHTML = "";
    }
    if((txt != this.search) && (txt != "")) {
        this.search = txt;
        for(var i = 0; i < this.nb; i++) {
            if(this[i].substring(0, txt.length).toUpperCase() == txt.toUpperCase()) {
                txtAff += "<a href=\"javascript:liste.getNom(" + i + ")\">" + this[i] + "</a><br>";
            }
        }
        document.getElementById("divPays").innerHTML = txtAff;
    }
}

// Minuteur pour la mise à jour régulière
function listeCheck() {
    liste.MAJ(document.forms["monform"].search.value);
    setTimeout("listeCheck()", 100);
}

var liste = new creerListe();
liste.Add("Afghanistan");
liste.Add("Afrique du sud");
liste.Add("Albanie");
liste.Add("Algérie");
liste.Add("Yougoslavie");
liste.Add("Zaire");
liste.Add("Zambie");
liste.Add("Zimbabwe");