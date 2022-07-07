"use strict";

// SYNTAXE
//for(initialisation;condition;incrementation){#instructions}

// for(let i=0;i<=10;i++){
//     console.log("salut n° "+i);
// }
// /*i++ = i+1
// *i+=1 => i+1
// */ 

// let resultat =0;
// let num=prompt("choisisser un chiffre?");
// for (let i = 0; i <= 10; i++){
    
//     resultat=num*i;
//     console.log(`${num}*${i}=${resultat}`)
// }    
  

// for(let i=10; i>=0; i--){
//     console.log(i);
//     if(i!=0){
//         console.log(i);
//     }else{
//         console.log("Bonne annee");
//     }
// }


// for(let i=10; i>=0; i--){
//     // console.log(i);
//     if(i!=0){
//         console.log(i);
//     }else{
//         console.log("Bonnne annee");
//     }
// }

/**les variables declarer en ligne 42 jusqu a 44 sont lues par le robot au chargement de la page  */
let larg=prompt(`largeur ?`);
let long=prompt(`longeur ?`);
let haut=prompt(`haut ?`);


function dimensions(larg,long,haut){
    let largMax=15;
    let longMax=25;
    let hautMax=20;
    if(larg>largMax){
        console.log("colis refusé ! " + larg + " cette longeur n'est pas accepter !");
    }
    if(long>longMax){
        console.log("colis refusé ! " + long + " cette largeur n'est pas accepter !");
    }
    if(haut>hautMax){
        console.log("colis refusé ! " + haut + " cette hauteur n'est pas accepter !");
    }
    if(larg<=largMax&&long<=longMax&&haut<=hautMax){
        console.log("Votre colis es valider");
    }
    }
    dimensions(larg,long,haut);

// function dimensions(parametre1,parametre2,parametre3){
    
// }
// dimension(argument1,argument2,argument3)
// l argument1 va prendre la place du paramtre1


/**
 * j ai besoin de recuperer les valeurs de longueur,largeur,hauteur de l utilisateur(variable*3)
 *ma fonction ne se lancera que lorsque j auraistous les elements en mains 
 * 
 * 
 * 
 * 
 * 
 */

