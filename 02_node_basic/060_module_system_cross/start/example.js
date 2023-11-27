// CJSとESのモジュール連携
// ok　:CJSエクスポート→ESMでインポート NG:逆


//const { plus } = require('./calc');
    import { plus } from './calc.cjs';

const result = plus(1, 2);
console.log(result);
