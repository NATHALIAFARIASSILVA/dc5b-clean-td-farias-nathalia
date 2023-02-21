// nettoyer un fichier csv sur js

const fs = require( 'fs');
  const createCsvParser = require( 'csv-parser') 

const readStream = fs. createReadStream ( 'path/to/file. csv');
const writeStream = fs. createWriteStream ('path/to/new-file.csv');

const parser = createCsvParser ();

parser. transform = function (record, callback) {    
    const cleanedRecord = record
    .filter(field => field.trim() !== '') // Supprime les ligne vide 
    .filter((_, index) => index !== 3) // supprime le 4e champs de l'enregistrement
    .map(field => field.trim()); // Supprime les espaces inutiles

if (cleanedRecord. length === 4) {
    callback(null, cleanedRecord);
} else {
    callback();
};
readStream
.pipe (parser)
.pipe (writeStream)

}