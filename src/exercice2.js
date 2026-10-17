/*Déclare trois variables représentant une ligne de facture pharmaceutique
(nom du médicament, quantité, prix unitaire),
en respectant les bonnes pratiques vues aujourd'hui (const/let, pas de var).
Affiche ensuite un résumé de cette ligne en utilisant un template literal.
 */

//declaration des variables

const medicament= "Doliprane";

let quantite = 2;

let prixUnitaire = 750;

let prixTotal = prixUnitaire*quantite;

const resume = `Facture : medicament : ${medicament} , quantite : ${quantite} , prix_unitaire : ${prixUnitaire} , prix total : ${prixTotal} FCFA.`;
console.log(resume);