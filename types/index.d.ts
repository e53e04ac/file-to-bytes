/*!
 * file-to-bytes/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type FileToBytesConstructorOptions = {
    location: string;
    flags?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    emitClose?: boolean;
    start?: number;
    end?: number;
    highWaterMark?: number;
};

type _FileToBytes = {

};

type FileToBytes = stream.Transform & {
    FileToBytesConstructorOptions: {
        (): FileToBytesConstructorOptions;
    };
    _FileToBytes: {
        (): _FileToBytes;
    };
};

type FileToBytesConstructor = {
    (options: FileToBytesConstructorOptions): FileToBytes;
};

export const FileToBytes: FileToBytesConstructor;
