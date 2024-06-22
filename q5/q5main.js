// ### 5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`(n最小為 4, 只會出現偶數)

import { rl } from "../tool/readline.js";
import {testBundle ,umleven} from "./q5module.js";

main();

function main() {
    rl.question("求算 `2*4 + 4*6 + 6*8...+(n-2)*n, 請輸入值: ", (input) => {
        try {
            const numInput = Number(input);
            if (isNaN(numInput)) {
                throw new Error("請輸入數字");
            }
            testBundle(numInput);
            const result = umleven(numInput);
            console.log(result);
        } catch (error) {
            console.log(error.message);
        } finally {
            rl.close();
        }
    });
}

// 研究reduce
// 命名問題看 codecomplete ch.11
// 邏輯界面分開問題
// test驗證邊界 比方q3得問題 驗證6 & 65
// test 可以包一起 一起測試 比方q5-testBundle
// js youtuber akshay saini 
// 內聚 ＆ 耦合研究研究
