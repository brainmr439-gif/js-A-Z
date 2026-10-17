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

