// Gebruik de codestandaarden om dit bestand aan te passen

// Bekijk ook het bestand datemethodes.html voor extra informatie
let date = "";
let einddatum = prompt('Wat is de einddatum JJJJ-MM-DD?');
let deadline = new Date(einddatum);
document.write('<br/>Deadline:'+deadline);

// Haal nu één dag van de deadline af
deadline.setDate(deadline.getDate() -1);
document.write('<br/>Deadline:'+deadline );
