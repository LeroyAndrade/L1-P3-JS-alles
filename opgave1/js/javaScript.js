//Opgave I
function OBJpersoon (achternaam,tussenvoegsel,voornaam){
  let newForm = this;
  newForm.Achternaam = achternaam;
  newForm.Tussenvoegsel = tussenvoegsel;
  newForm.Voornaam = voornaam;
}

let student = new OBJpersoon ("Andrade ",""," Leroy");

let forIn="";
for (const property in student) {
forIn+=(`${property}: ${student[property]}`+'<br/>');
}document.write("Opgave 1" +'<br/>'+ forIn);


//Opgave II
function OBJboek (titel,isbn,druk,jaar,auteur,type,korting){
  let OBJBoek = this;
  OBJBoek.Titel = titel.toUpperCase();
  OBJBoek.Isbn = isbn;
  OBJBoek.Druk = druk;
  OBJBoek.Jaar = jaar;
  OBJBoek.Auteur = auteur;
  OBJBoek.Type = type;
  OBJBoek.Korting = korting;
}
let forIn2="";
let boek = new OBJboek ("The Adventures of Tom Sawyer","ISBN-13: 978-0553211283","1", 1876, "Mark Twain", "Fictie", "10%");
for (const property in boek) {
forIn2+=(`${property}: ${boek[property]}`+'<br/>');
}document.write('<br/>'+"Opgave 2" +'<br/>'+ '<form>'+'<td>'+forIn2+'</td>'+ '</form>');


//Opgave III
function bluePrintVoertuig (merknaam,model,gewicht,motorinhoud,kleur){
  let bluePrintVoertuig = this;
  bluePrintVoertuig.Merknaam = merknaam;
  bluePrintVoertuig.Model = model;
  bluePrintVoertuig.Gewicht = gewicht;
  bluePrintVoertuig.MotorInhoud = motorinhoud;
  bluePrintVoertuig.Kleur = kleur;
}

let forIn3="";
let voertuig1 = new bluePrintVoertuig("Ferrari", 'ENZO', '1,480 kg', '6L V12', 'Rood');
for (const property in voertuig1) {
forIn3+=(`${property}: ${voertuig1[property]}`+'<br/>');
}document.write('<br/>'+"Opgave 3" +'<br>'+forIn3);
//Opgave III.I
let forIn31="";
let voertuig2 = new bluePrintVoertuig("theFuture", 'Grande', '1,481 kg', '33L V12 + Efficiënt appart Hybrid en Energy Recovery System tijdens remmen', 'Groen');
for (const property in voertuig2) {
forIn31+=(`${property}: ${voertuig1[property]}`+'<br/>');
}document.write('<br/>'+"Opgave 3.1" +'<br>'+forIn31);


//Opgave IIII

//let boek = new OBJBoek ("");









//let boek = new OBJBoek ("");
