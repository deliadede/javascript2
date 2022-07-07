"use strict";

// function sans parametre
function saluer(){
    console.log("Salut !");
}
saluer();//appel de la function

//Fonction avec parametre

// function saluerQqun(nom){
//     console.log(`Salut ${nom}`);
// }

// let prenom=prompt(prenom);
// saluerQqun("Bob");
// saluerQqun(prenom)


// function autoTamponneuse(etoile){
//     console.log(`Salut ${etoile}`);
// }

// let aerospatial=prompt("Ton prenom ?");
// autoTamponneuse("delia");

// Creer une fonction avec deux parametres : pseudo et mail; afficher en console une concatenation qui salut la personne et valide son adresse mail
//l'appel de la function sera dynamique

// function home(pseudo, mail){
//     console.log(`Bonjour ${pseudo} votre mail ${mail}`);
// }
// let pseudo=prompt("Votre pseudo");
// let mail=prompt("votre mail");

// home(pseudo, mail)

// ${variable/parametre/argument}
// l'argument va venir prendre la place du parametre 

//Function anonyme
// let functionAnonyme=function(){
//     console.log("je suis la fonction anonyme");
// }
// functionAnonyme();


//ES6 fonction fleche
let functionFlecher=()=>{
    console.log("je suis la fonction flechee");
}
functionFlecher();