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
let boek = new OBJboek ("The Adventures of Tom Sawyer","ISBN-13: 978-0553211283","1", "1876", "Mark Twain", "Fictie", "10%");
for (const property in boek) {
forIn2+=(`${property}: ${boek[property]}`+'<br/>');
}document.write('<br/>'+"Opgave 2" +'<br/>'+ '<form>'+'<td>'+forIn2+'</td>'+ '</form>');


console.log(boek.Titel);

//let boek = new OBJBoek ("");
