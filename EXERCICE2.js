// creer un csv sur js

const fs = require('fs');

const data = [
    { id: '123', nom: 'DIANA', puissance: '100', autonomie: '10H', energie: 'electrique'},
];

const writeStream = fs.createWriteStream ('tondeuse.csv');
writeStream.write('id,nom,puissance,autonomie,energie');


data.forEach((dataRow) => {
    console.log(dataRow.id)
    var csv = '\n'+ dataRow.id + dataRow.nom + dataRow.puissance + dataRow.autonomie + dataRow.energie;
    csv += ',';

    writeStream.write(csv)

}
);

writeStream.end;
