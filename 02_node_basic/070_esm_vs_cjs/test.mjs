import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// new URL でimport.meta.urlで取得したファイルまでのパスからファイルを消す
const __dirname2 = fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname2);

console.log(import.meta.url);