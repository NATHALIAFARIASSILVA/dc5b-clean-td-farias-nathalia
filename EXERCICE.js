//import js

const parse = require('csv-parser');
const fs = require('fs');
const csvData = [];

let compteur = 1;

fs.createReadStream('EXERCICE_ARBRE_DECISION.csv')
.pipe(parse())
.on('data', (dataRow) => {
    if (compteur <= 20) {
        console.log(dataRow);
        ++compteur;
    } else {
        return
    }
})
.on('end', function (){

});