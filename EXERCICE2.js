// creer un csv sur js

const fs = require('fs');

const data = [
    { id: '123', nom: 'DIANA', puissance: '100', autonomie: '10H', energie: 'electrique'},
];

const writeStream = fs.createWriteStream ('tondeuse.csv');
writeStream.write('id,nom,puissance,autonomie,energie');

for (let i = 0; i < 19; i++) {
    data.forEach((dataRow) => {
        var csv = '\n'+ dataRow.id + ',' + dataRow.nom + ',' + dataRow.puissance + ',' + dataRow.autonomie + ',' + dataRow.energie;
    

        writeStream.write(csv)

    }
    );
}

writeStream.end;
