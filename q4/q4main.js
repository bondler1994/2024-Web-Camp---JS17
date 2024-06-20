// ### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和

import { rl } from "../tool/readline.js";
import { checkOdd } from "./q4module.js";

function main(input){
    rl.question("請輸入隨意值",(input) => {

        let currentSum = 0;
        let formula = "";

        for(let i = 1; i <= input; i++){
            if(i === 1){
                currentSum = currentSum + i;
                formula  += `${i}`;
                continue; 
            }
            const isOdd = checkOdd(i);
            if(isOdd){
                currentSum = currentSum - i;
                formula += `-${i}`;
                continue;
            }
            currentSum = currentSum + i;
            formula  += `+${i}`;
        }
        console.log(formula);
        console.log(currentSum);
        rl.close();
    })
}

main();

// keyword:for break
// 邏輯拆分問題 formula得部份
// for迴圈預設i值 不要隨意更改預設 跟專案有關 
