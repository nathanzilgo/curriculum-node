const express = require('express');
const document = require('pdfkit');
const fs = require('fs');
const path = require('path');

const app = express();

const pdf_file = "./lib/historico_2019.2_fim.pdf";

app.get('/', (request, response) => {

    fs.readFile(pdf_file, (err, data) => {
        response.contentType("application/pdf");
        response.send(data);
    });
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Hi :D');
});