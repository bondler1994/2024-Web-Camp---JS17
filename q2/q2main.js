// ### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { rl } from "../tool/readline.js";
import {Q2, isInteger, isZero} from "./q2module.js";

function main(){
    rl.question("請輸入first值",(input)=>{
        try{
            isZero(input);
            isInteger(input)
            const array = [];
            array.push(input);
            rl.question('在輸入second值', (input) => {
                array.push(input);
                Q2(array);
                rl.close();
            })
        }catch(error) {
            console.log(error.message);
            rl.close();
        }
        // rl.close();
    })
}

main()