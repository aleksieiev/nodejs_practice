import {pipeline} from 'stream';
import fs from 'fs';
import csv from 'csvtojson';
import path from 'path';

const DIR_BASE = path.resolve();
const inputFile = `${DIR_BASE}/../task2/resources/example.csv`;
const outputFile = `${DIR_BASE}/result.txt`;

pipeline(
    fs.createReadStream(inputFile),
    csv(),
    fs.createWriteStream(outputFile),
    (err) => {
        if (err) {
            console.error('Ooops. Some errors during transformation! ', err);
        } else {
            console.log('Transformation finished');
        }
    },
);
