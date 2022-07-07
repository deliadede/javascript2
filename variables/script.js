"use strict"; // pour dettecter les erreur si parexmple on n'a pas déclarer notre variable il se mait en erreur
// let prenom; //declaration ou création de mon variable prenom avec le mot let
// console.log(prenom); // console.log est où on trouve les erreur de mon code et c'est interieur de js
// prenom = "delia";  // valeur ou etiquet de mon variable  sera yadaf grace au signe egale (=)
// console.log(prenom); //il affiche ou  permet de verifier en console not info la valeur de mon variable dans console
// console.log(typeof prenom); // oncherche le type de mon variable prenom qui est string chaine de type caractaire
// let age = "28";
// console.log(age)
// console.log(typeof age); // le  variable de type sting(chaîne de carzctaire) malgrer la presence de chiffre j'ai une variable de type string
// age = 28;
// console.log(typeof age);// chffre j'ai une variable de type number
// let numDesimale = 0.5; // type number
// console.log(typeof numDesimale);
// let valide = true;
// console.log(typeof valide); //type de boolean qui prend vrai ou faux (true or false)
/*
Concatination
il s'agit d'adition de plusieurs variables entre elles
*/
// alert("Bonjour "+ prenom + ", tu dechire en JS!! tu as que " + age + "et ton chance de reussite sera" + numDesimale ); encienne concatenarion
//  cocatenation version es6
// alert(`Bonjour ${prenom} , tu dechire en js; tu as ${age} ans => tu est jeune!!`); // alert pour afficher les alert dans une case pour alerté l'utilisateur et alt gr + 7 pour aficher mon concatenation
// let nbr1, nbr2, nbr3;
// nbr1=3;
// nbr2=15;
// nbr3=10%3
// let valeur= nbr1 + nbr2;
// console.log(valeur);
// console.log(nbr1+nbr2);
//exmple modulo
// let nbr3 =10%3;
// linge 35 je vais chercher le modulo(reste de la division) de 10%3 Le resultat sera 1;

// Deux fonctions importantes
// let chaine1="37"
// let chaine2="102.58"
// console.log("concatenation =>"+(chaine1+chaine2)); //une concatenation

// console.log(parseInt(chaine1)+parseFloat(chaine2));
// parseInt() on transforme la chaine de caractere en chiffre Entier
// parseFloat( on transforme la chaine de caractere en nombre Decimal)

// constante

const nom="RV";

// la porter des variables

let variableLet="global";//global
var variableVar="global";//global

console.log(variableLet);
console.log(variableVar);
if(true){
    let variableLet="local";//local
    var variableVar="local";//local

console.log(variableLet);
console.log(variableVar);
}
console.log(variableLet);//global
console.log(variableVar);//local