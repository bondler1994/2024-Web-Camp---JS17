// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」

import { askQuestion, rl } from "../tool/readline.js";
import { Q1 } from './q1module.js';

async function main() {
    try {
        const input = await askQuestion("How many people wanna watch movie today: ");
        const stateMoviePlaying = Q1(input);
        console.log(stateMoviePlaying);
    } catch (error) {
        console.log("Error:", error.message);
        console.log("Please input again.");
    } finally {
        rl.close();
    }
}

main();
