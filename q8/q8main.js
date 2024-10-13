// ### 8. 試寫一程式，讓使用者輸入一正整數n值，
//並撰寫一遞迴函數 `function  divi(n)` 
//來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

import prompt from "../tool/prompt-sync.js";
import {isPositiveInt} from "../tool/validator.js"
import { divi } from "./q8module.js";

function main(){
    try {
        let input = prompt('請輸入一個數值：');
        isPositiveInt(input);
        const n = Number(input);
        const divisionCount = divi(n)
        console.log(`這個數值只要除"${divisionCount}"次，小數點第二位就會是0`)
    }catch(error){
        console.log(error.message);
        main()
    }
}

main()
