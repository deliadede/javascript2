"use strict";

let age=20;
let age1=15;

// //on appel une structure conditionnel les instructions qui permettrent de tester si une condition est vrai ou non

// //if(expression){instruction}

if(age >=18){//ici je fais un test en ecrivant si(age es superieur ou egal a 18){alors tu affichera dans la console.log("super tu es majeur")}
    console.log("super tu es majeur");
// }
if(age1 >=18){//si (age1 es superieur ou egal a 18){tu affiche  console.log("Super tu es majeur")}
    console.log("Super tu es majeur");
}else{
    console.log("Tu es mineur");//si (age1 es inferieur ou egal a 18){tu affiche  console.log("Tu es mineur")}
}

let couleur="#ff0000";

if(couleur == "#00ff00"){
    console.log("vert")
}else if(couleur="ff0000"){
    console.log("rouge");
}else{
    console.log("test a refaire");
}

// bob qui a 18 ans
// melanie qui a 22ans
// sarah qui a 15ans
// creer des variable afin de sauvegarder ces gens 
// sauvegarder egalement leurs ages
// m afficher dans la console avec concatenation une phrase disant bienvenue a vous NOM vous avez bien AGE donc vous pouvez rentrez dans le casino
// Vous ne pouvez pas rentrer dans le casino


let prenom1="bob";
let prenom2="melanie";
let prenom3="sarah";
let ageBob= 18;
let ageMelanie= 22;
let ageSarah= 15;


if(ageBob >=18){
    console.log(` Bienvenue Mr/Mme ${prenom1} dans notre casino `);
}else{
    console.log(` bonjour Mr/Mme ${prenom1}, vous etes trop jeune pour être dans notre secteur` );
}
if(ageMelanie >=18){
    console.log(` Bienvenue Mr/Mme ${prenom2} dans notre casino `);
}else{
    console.log(` bonjour Mr/Mme ${prenom2}, vous etes trop jeune pour être dans notre secteur `);
}
if(ageSarah >=18){
    console.log(` Bienvenue Mr/Mme ${prenom3} dans notre casino `);
}else{
    console.log(` bonjour Mr/Mme ${prenom3}, vous etes trop jeune pour être dans notre secteur `);
}

let prenomUtilisateur=prompt("qu'elle est votre prenom ?")
let ageUtilisateur=prompt("quel est votre age")
if (ageUtilisateur>=18){
    console.log(` Bienvenue Mr/Mme ${prenomUtilisateur} dans notre casino `);
}else{
    console.log(` bonjour Mr/Mme ${prenomUtilisateur}, vous etes trop jeune pour être dans notre secteur `);
}


// operateur logique
let majeur=true;
let tenueCorrect=true;
let tenueCorrectBis=false;


// // AND && les deux conditions doivent être vrais
console.log("majeur ET tenueCorrect ==> "+(majeur && tenueCorrect)); //TRUE
console.log("majeur ET tenueCorrect ==> "+(majeur && tenueCorrectBis)) //FALSE

// // OR || une des deux conditions doit être vrais

console.log("majeur || tenueCorrect ==> "+(majeur || tenueCorrect)); //TRUE
console.log("majeur OU tenueCorrect ==> "+(majeur || tenueCorrectBis)); //TRUE

let annee=prompt('Quelle est votre annee naissance');
let anneeActuel=2022;
let age=anneeActuel - annee;


if(age >=10 && age <20){
    console.log(`vous etes ado`);
}
else if(age>=20 && age<=60){
    console.log(`vous etes adulte`);
}else if(age>60){
    console.log(`vous etes a la retraite`);
}else{
    console.log(`Vous etes enfant`);
}

// switch

let panier=prompt("Choisissez parmis ces trois fruits ou legumes : courgette, carotte, tomate");
switch(panier){
    case "courgette":
    console.log(`Vous avez choisi : ${panier}`);
        break;
    case "carotte":
        console.log(`Vous avez choisi : ${panier}`);
        break;
     case "tomatte":
            console.log(`Vous avez choisi : ${panier} le fruit`);  
        break;  
    default:
        console.log(`refaite votre choix`);
        panier=prompt("Choissisez parmis ces trois fruits ou legumes :courgette,carote,tomate");
        break;
}

// OPERATEUR TERNAIRE

let message=(age>=18)? "Vous êtes majeur":"Vous êtes mineur";
// let message=(test)?     "true"   :   "False";
