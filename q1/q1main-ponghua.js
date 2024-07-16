// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」

import { rl } from "../tool/readline.js";
import { Q1 } from "./q1module.js";

// async function considerTooMuch(fn1, fn2) {
//   return new Promise((resolve, reject) => {
//     const a = 
//     resolve(a)
//   });
// }

  let tiktok;
  // 玩玩callback 練習setTimeout & clearTimeout
  async function bookSeat(fn1, fn2) {
    // const tiktok = setTimeout(() => {
    //   console.log("\n你考慮太久了,請重新輸入");
    //   rl.close();
    // }, 2000);

    // clearTimeout(tiktok);
    try {
      tiktok = setTimeout(() => {
        console.log("\n你考慮太久了,請重新輸入");
        // reject("你考慮太久了,請重新輸入");
        clearTimeout(tiktok);
        // fn2()
        bookSeat(fn1, fn2);
      }, 2000);
      
      rl.question("How many people wanna watch movie today: ", (input) => {
        //回答完問題就會關閉問題
        clearTimeout(tiktok);
        fn1(input);
        fn2();
      });
      // tiktok = await considerTooMuch(fn1, fn2);
      
      
    } catch (error) {
      // console.log("\nError:", error);
      // clearTimeout(tiktok);
      // await bookSeat(fn1, fn2);
    }
  }

function afterAnswer(tiktok, fn1, fn2) {
  // console.log('afterAnswer', tiktok)
  return ;
}

function askAgain(tiktok, fn1, fn2) {
  // console.log('askAgain', tiktok)
  return ;
}

function amountOfClient(input, fn) {
  try {
    const stateMoviePlaying = Q1(input);
    console.log(stateMoviePlaying);
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Please input again.");
  }
  // fn();
}

function endQuestion() {
  rl.close();
}

await bookSeat(amountOfClient, endQuestion);

// async function main() {
//     rl.question("How many people wanna watch movie today: ", (input) => {
//         try {
//             const stateMoviePlaying = Q1(input);
//             console.log(stateMoviePlaying);
//         } catch (error) {
//             console.log("Error:", error.message);
//             console.log("Please input again.");
//         } finally {
//             rl.close();
//         }
//     })
// }
















