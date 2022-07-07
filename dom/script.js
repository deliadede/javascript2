"use strict";

// Recuperer les balises par leurs noms

let header=document.getElementsByTagName('header');
console.log(header);

// Recuperer l'element par l'ID

let logo=document.getElementById('logo');
console.log(logo);

// Recuperer les elements par la class

// let container=document.getElementsByClassName('container');
// console.log(container); ancienne version

let container=document.querySelector('.container');
console.log(container); //NOUVELLE METHODE


// **********************************************************************************************************************
// NOUVELLE METHODE RECUPERATION VERSION ES6

let h1=document.querySelector('h1');
console.log(h1);

let p=document.querySelectorAll('p');
console.log(p);
// querySelectorAll=pour selecter toutes les 'p' du code
// querySelector=pour recuperer le premier 'p' du code
// pour selectioner un classe en utilise '.nomDeLaClasse
// pour selectioner un id en utilise '#'nomDeL'id


// document.body.append("Test!!!!");
// h1.append(' Je suis a coter du titre !!!')

// *************************************************************************************************************************
h1.textContent="HelloWorld";

// CREER UN ELEMENT
let helloWorld=document.createElement('div');
helloWorld.textContent="HelloWord2LeRetour";
helloWorld.style.background="#ffbd69";
helloWorld.style.textAlign='center';
document.body.insertBefore(helloWorld,document.querySelector('.container'));

// POUR SUPPRIMEE
// **** 1°
//  document.querySelector('h2').remove();

// OU

// **** 2°
let h2=document.querySelector('h2');
h2.remove();

// **************************************************************************************************************************

let bt=document.querySelector('button');
// FONCTION FLECHEE
// **** 1°
bt.onmouseover=()=>{ 
    document.body.style.background="purple";
}

// **** 2°
function exit(){
    document.body.style.background="aquamarine";
}
bt.addEventListener("mouseout",exit);
























