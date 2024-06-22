// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價
// ，試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」
// 寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

import { rl } from "../tool/readline.js";
import {Q3, isPositiveInt} from "./q3module.js";


function main(){
    rl.question("請輸入實際年齡.另外6歲以下,65歲以上半價喔：",(input)=>{
        try{
            isPositiveInt(input);
            const amusementEntraceFee = Q3(input);
            console.log(amusementEntraceFee);
            rl.close();
        }catch(error) {
            console.log(error.message);
            main();
        }
    })
}

main()


// 命名問題 amusementPrice