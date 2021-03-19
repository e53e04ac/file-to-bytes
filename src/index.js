/*!
 * file-to-bytes/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const fs = require('fs');

const { FileToBytes } = (() => {

    /** @typedef FileToBytesConstructorOptions @type {import('../types').FileToBytesConstructorOptions} */
    /** @typedef _FileToBytes @type {import('../types')._FileToBytes} */
    /** @typedef FileToBytes @type {import('../types').FileToBytes} */
    /** @typedef FileToBytesConstructor @type {import('../types').FileToBytesConstructor} */

    /** @type {FileToBytesConstructor}  */
    const FileToBytes = (options) => {

        /** @type {FileToBytesConstructorOptions}  */
        const _options = {};
        _options.location = options.location;
        _options.flags = options.flags;
        _options.fd = options.fd;
        _options.mode = options.mode;
        _options.autoClose = options.autoClose;
        _options.emitClose = options.emitClose;
        _options.start = options.start;
        _options.end = options.end;
        _options.highWaterMark = options.highWaterMark;

        /** @type {_FileToBytes}  */
        const _it = {};

        /** @type {FileToBytes}  */
        // @ts-ignore
        const it = new fs.createReadStream(_options.location, {
            flags: _options.flags,
            encoding: 'binary',
            fd: _options.fd,
            mode: _options.mode,
            autoClose: _options.autoClose,
            emitClose: _options.emitClose,
            start: _options.start,
            end: _options.end,
            highWaterMark: _options.highWaterMark
        });
        it.FileToBytesConstructorOptions = () => {
            return _options;
        };
        it._FileToBytes = () => {
            return _it;
        };
        return it;

    };
    return { FileToBytes };

})();

module.exports = { FileToBytes };
