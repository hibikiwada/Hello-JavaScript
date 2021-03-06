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



// 2020.0305

// 演算子
/*
  演算子：演算処理を記号で表したもの。(+ - *とか)
  被演算子(オペランド):演算処理の対象(1+1 の１)
  二項演算子:2つのオペランドを取る演算子
*/
const pls = 1 + 5;
console.log(pls); //→6

/*
  単項演算子:1つのオペランドを取る演算子(++ --)
*/
let num = 1;
num++;
console.log(num);//==>2

// 文字列結合演算子(+)
console.log("テニス" + "プレーヤー");//==>テニスプレーヤー

// べき乗演算子:(**)
console.log(2 ** 5); //==>32 2の5乗

/*
  比較演算子:オペランド同士の値を比較し、真偽値を返す演算子
  厳密等価演算子:同じ型で同じ値の時trueを返す
*/
console.log(1 === 1); // ==>true
console.log(1 === "1"); //==>false 型が違う

// 等価演算子(==)はバグが多いからあまり使わない。

/*
  暗黙的な型変換という概念:明示的はない型変換
*/

// 等価演算子による暗黙的な型変換 
// 暗黙的な型変換で面白い結果が出る
console.log(1 == "1"); // ==>true
console.log(0 == false); // ==>true
console.log(10 == ["10"]); // ==>true

