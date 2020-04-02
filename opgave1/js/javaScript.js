//Opgave I
function OBJpersoon (achternaam,tussenvoegsel,voornaam){
  let newForm = this;
  newForm.Achternaam = achternaam;
  newForm.Tussenvoegsel = tussenvoegsel;
  newForm.Voornaam = voornaam;
}

let student = new OBJpersoon ("Andrade ",""," Leroy");
//typeof(student.Studentnummer);


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


//Opgave IV
function OBJStudent (studentnummer,naam,klasnaam,opleiding){
  let newStudent = this;
  newStudent.Studentnummer = studentnummer;
  newStudent.Naam = naam;
  newStudent.Klasnaam = klasnaam;
  newStudent.Opleiding = opleiding;
}

let student2 = new OBJStudent (123,"Pietje Puk","MD1A", "Mediadevelopment");
let student3 = new OBJStudent (1234,"Pietje Puki","MD1B", "Mediadevelopment");
/*foreach item, lukt mij niet op het moment*/
let student2Arr = [student2.Studentnummer,student2.Naam,student2.Klasnaam,student2.Opleiding, '<br>'];
let student3Arr = [student3.Studentnummer,student3.Naam,student3.Klasnaam,student3.Opleiding];

let storeArr = student2Arr.concat(student3Arr);
//document.write('<br/>'+"Opgave 4"+'<br/>');
document.write('<br/>'+"Opgave 3.1"+'<br/>'+ storeArr);


//let boek = new OBJBoek ("");
