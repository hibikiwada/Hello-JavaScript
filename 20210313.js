"use strict";

// 2021.03.13

// 条件分岐

// if文
if (true) {
 console.log("実行されます");
} //==> 実行されます。

const x = 33;
if (x > 30) {
 console.log("30よりも大きい");
} //==> 30よりも大きい

// elseif文
const year = new Date().getFullYear();
console.log(year);//==>2021

// ``で囲むと変数が入る
if (year % 400 === 0) {
 console.log("閏年やな");
} else if (year % 100 === 0) {
 console.log(`${year}年は閏年ではない。`);
} else if (year % 4 === 0) {
 console.log(`${year}年は閏年です。`);
} else {
 console.log(`${year}年は閏年ではないなあ。`);
}