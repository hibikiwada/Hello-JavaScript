// このコードはstrict modeで実装される
// strict mode : より安全なコードをかけるように厳しめにチェックしてくれる。
"use strict";

// サンプルコード
// ”こんにちはhibikiwadaさん”と表示されれば成功！
function hello(name) {
  console.log("こんにちは" + name + "さん");
}
hello("hibikiwada");

/*
複数行
コメント
はこうやって
記述
*/

/* 
 constは、再代入できない変数(定数ではない)。
 letは、再代入できる。
 →基本はconstを使用、再代入する必要がある場合のみletを使用。
 「varは時代の遺物。使ったことねぇ！」by 師匠
*/
const name = "和田響";
const sport = "テニス";
let count = 0;

// コンソールでcountを表示
console.log(count);

// コンソールで200+200の結果を表示
const total = 200 + 200;
console.log(total);
/* 
   データ型 : 値の方(真偽値、数値、文字列など)
   データ型はプリミティブ型(基本型)とオブジェクト(複合系)に分けられる。
   プリミティブ型:
   ・真偽値(Boolean):true か false
   ・数値(Number):2002 とか 3.14
   ・巨大な整数(Bigint):9999900000みたいなでかい数。
   ・文字列(string):"和田響"のような文字列。
   ・undefined;値が未定であることを表すデータ型
   ・null:値が存在しないことを表すデータ型。
   ・シンボル(symbol):一意で不変な値のデータ型。
  オブジェクト(複合型):
  ・プリミティブ型以外のデータ型。
  ・配列、正規表現、dateなど
*/

// typeof 演算子でデータ型を調べる。
console.log(typeof true); //→Boolean
console.log(typeof 999999999999989898989999999999999999999999999999999); //→number
console.log(typeof function () {});

// リテラル:プログラム上で数値や文字列など、データ型の値を直接記述できるように構文として定義されたもの

// ""で囲んだ範囲は文字リテラル→「まじまじまじ」は文字列として認識
const str =  "まじまじまじ";

// Number.MAX_SAFE_INTEGER:安全に表せる最大の数値
console.log(Number.MAX_SAFE_INTEGER); //→9007199254740991

// 9007199254740991よりも大きい値にはnをつける→bigintリテラル
const bgi = 90071992547409912n + 2n;
console.log(bgi);

// バックスラッシュで'を文字列として認識させる
const time = '8 o\'clock'
console.log(time); //→8 o'clock

