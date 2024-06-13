// ### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和

import { rl } from "../tool/readline.js";
import { checkOdd } from "./q4module.js";

function main(input){
    rl.question("請輸入隨意值",(input) => {

        let initailNumber = 0;
        let result = "";

        for(let i = 1; i <= input; i++){
            if(i === 1){
                initailNumber = initailNumber + i;
                result  += `${i}`;
                continue; 
            }
            const isOdd = checkOdd(i);
            if(isOdd){
                initailNumber = initailNumber - i;
                result += `-${i}`;
                continue;
            }
            initailNumber = initailNumber + i;
            result  += `+${i}`;
        }
        console.log(result);
        console.log(initailNumber);
        rl.close();
    })
}

main();