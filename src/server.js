const express = require('express');
const document = require('pdfkit');
const fs = require('fs');

const app = express();

app.get('/', (request, response) => {
    var curriculum = "../lib/historico_118110342_203258685.pdf";

    fs.readFile(curriculum, (err, data) => {
        response.contentType("application/pdf");
        response.send(data);
    });
});

app.listen(7071);