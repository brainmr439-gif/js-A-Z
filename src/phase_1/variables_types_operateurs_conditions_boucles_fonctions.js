/*1-variables*/
//----variable const exemple structure : mot-clés(const) + nom_variable = valeur
const prenom = 'awa'

//----variable let exemple struture : mot-clés(let) + nom_variable = valeur
let score = 10; //valeur initiale
score = score +1 //valeur finale

console.log(prenom,score); //affiche prenom = awa et score = 11

//---exercice 1

//---1. Déclare une variable ville contenant "Abidjan", qui ne changera jamais. Affiche-la avec console.log.

const ville = 'Abidjan'

console.log(ville);

//---exercice 2

//---2. Déclare temperature à 28, puis fais-la monter à 31 (deux lignes).

let temperature = 28;
temperature = 31
console.log(temperature)

/*2-les types*/

//---- type 1 avec number
const age = 28;

//---- type 2 avec string
const nom = 'annie'

//---- type 3 avec boolean
const estmajeur = true

//---- type 4 avec null
let result = null

//---- type 5 avec undefined
let animaux

console.log(typeof age);
console.log(typeof nom);
console.log(typeof estmajeur);
console.log(typeof result);
console.log(typeof animaux);

//----1. Que renvoie typeof "42" ? Et typeof 42 ? Écris le code pour vérifier.

console.log(typeof "42")
console.log(typeof 42)

//----2. Sans exécuter le code, dis ce qu'affiche console.log("3" + 4 + 5). Puis vérifie.

console.log("3"+4+5)

/*3-les opérateurs*/

//la bonne pratique c'est d'utiliser == et non = pour si nous voulons faire de bonne comparaison
//en arithmétique nous avons : + , * ,- , /, %(modulo revient à definir le reste d'une division)

//---- utilisation le reste par modulo

console.log('modulo')
console.log(10%3)

//---- comparaison

//----avec == (egalité stricte)
console.log(10 =='10')

//----sans l'egalité stricte (comparaison des types avant les valeurs)
console.log(10 === '10')

//---- logique

//---- avec et (&&)

console.log(true && false)

//---- avec ou (||)

console.log(true || false)

//---- 1. Écris une expression qui vérifie si le nombre 17 est impair (utilise le modulo).

let a=17%2

if(a !== 2 && a !== 0)
    console.log("a n'est pas pair")
else
    console.log("il est pair")

//---- correction

console.log(17 % 2 === 1); // true

//----2. Un accès est autorisé si age >= 18 ET aCarte === true.
// Écris la condition complète (juste l'expression booléenne).

let Age = 20
let aCarte=true
if (Age >= 18 && aCarte === true)
    console.log("acces autorisé")

//---- correction
const accesAutorise = age >= 18 && aCarte === true;

/*4-conditions*/

//if /elseif / else et switch
//Attention aux valeurs fausses (falsy) le meilleur des moyens de bien coder avec les conditions tout en rendant
//explicite ce que nous voulons comparer

//exemple

const stock = 0
if (stock)
    console.log("il y a du stock")

// rien ne s'affichera , non pas parce que ce que tu as ecrit n'est pas correct
// , mais parce que 0 est une valeur falsy dans ce contexte tout comme ("" , null , undefined ,NaN)

if (stock > 0)
    console.log("il y a du stock")
else
    console.log("stock vide")

//rendre explicite ce que nous voulons comparer

/*5-les Boucles*/

//for , while , for-----of

//for quand on connait le nombre de repetition d'avance
//exemple

for(let i = 0; i < 10 ; i++){
  console.log('tour n°:' + i);
}


//while quand on ne connait pas le nombre de repetition à l'avance ; on lance condition et
// tant que elle est toujours vrai l'action continue jusqu'a ce que cela change

let energie = 3;
while(energie > 0){
  console.log(energie);
  energie--;
}

//for-----of pour parcourir directement les elements d'un tableau
const fruits = ['bannane','ananas','pomme']
for (const fruit of fruits){
  console.log(fruit);
}

//---- 1. Avec un for, affiche les nombres de 1 à 10.

for(let y =0 ;y<10; y++){
    console.log(y)
}

//----2. Utilise for...of pour afficher chaque lettre du mot "code"
// (astuce : une string se parcourt comme un tableau).

const lettre = ["code"]

for (const c of lettre){
    console.log(c)
}

/*6-fonctions*/

/*
* 2 MANIERES DE DECLARER UNE VARIABLE
* fonction_nom(){} <- fonction nom stockée
* nom = fonction_nom(){} <- fonction stockée
*
* STRUCTURES
* nom = fonction_nom(parametres){
*   instructions
*   return
*nom*/

//exemples

//1 sans parametre par defaut
let resultat = function addition(a,b){
    return a + b;
}

console.log(resultat(1,3))

//2 avec parametres par defaut

const resultat2=function saluer(nom = "invité"){
    return 'bonjour ,'+ nom

}

console.log(resultat2())
console.log(resultat2('paul'))

//---- 1. Écris une fonction estMajeur(age) qui renvoie true ou false.

const r = function estMajeur(age){
    return age >= 18;//if simplifié
    return true

    /*autre methode(la mienne)
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
    return true;*/
}

console.log(r(18))

//---- 2. Écris une fonction prixTTC(prixHT, taux)
// qui renvoie le prix TTC (prixHT + prixHT * taux), avec taux = 0.18 par défaut.

let r2 = function prixTTC(prixHT,taux = 0.18){
    return prixHT + prixHT * taux
}

console.log(r2(1800))

console.log(r2(1800,0.2));



