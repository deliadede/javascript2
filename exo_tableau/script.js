"use strict";

let moteurDeRecherche=['google', 'ecosia', 'qwant'];
let urlMoteurDeRecherche=['https://www.google.fr', 'https://www.ecosia.org', 'https://www.qwant.com'];


let a=document.querySelectorAll('a');
// je cherche a afficher dans mon HTML les noms des tableau de recherche contenu das mon tableau en JS; pour cela j'ai un ensemble de valeur (tableau), je vais donc chercher a separer chaque valeur afin de pouvoir les manipuler une a une
// pour cela je sais qu'une bucle me permettra de passer d'un index a l'autre sur mon tableau 
// mon tableau est classer par ordre index0 et augmente 1 par 1 a chaque nouvelle valeur

for(let i=0;i<urlMoteurDeRecherche.length;i++) {
// premiere etape recupere mon tableau
   console.log(moteurDeRecherche);
//seconde etape recuperer les element tableau 1 par 1
      console.log(moteurDeRecherche[i]);
//meme chose avec les balise a
   console.log(a[i]);
   a[i].textContent=moteurDeRecherche[i];
   a[i].href=urlMoteurDeRecherche[i];
}


