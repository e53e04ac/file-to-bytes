/*!
 * file-to-bytes/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const fs = require('fs');
const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { FileToBytes } = require('../');

    const tmpDataFilePath = './tmp.data';

    before(async () => {
        await fs.promises.writeFile(tmpDataFilePath, Buffer.from([0]));
    });

    it('coverage', async () => {

        const fileToBytes = FileToBytes({
            location: tmpDataFilePath
        });
        fileToBytes.FileToBytesConstructorOptions();
        fileToBytes._FileToBytes();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                fileToBytes,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

    after(async () => {
        await fs.promises.unlink(tmpDataFilePath).catch((error) => {
            console.log(error);
        });
    });

});
