// ### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { rl } from "../tool/readline.js";
import {Q2, isInteger, isZero} from "./q2module.js";

// function main(){
//     rl.question("請輸入first值",(input)=>{
//         try{
//             isZero(input);
//             isInteger(input)
//             const array = [];
//             array.push(input);
//             rl.question('在輸入second值', (input) => {
//                 try{
//                     isZero(input);
//                     isInteger(input);
//                     array.push(input);
//                     Q2(array);
//                     rl.close();
//                 } catch(error) {
//                     console.log(error.message);
//                     main();
//                 }
//             })
//         }catch(error) {
//             console.log(error.message);
//             main();
//         }
//         // rl.close();
//     })
// }

// main()



const array = [];

function main(){
    
    rl.question(`請輸入第${array.length + 1 }個值`,(input)=>{
        try{
            isZero(input);
            isInteger(input)
            // const array = [];
            array.push(input);
            
            console.log(array)
            if(array.length < 2) {
                main()
            } else {
                Q2(array)
                rl.close();
            }
        }catch(error) {
            console.log(error.message);
            main();
        }
    })
}

main();


// 嬿媜修改為隊問題動手腳
// promise可以提身使用者體驗 or prompt
// 研究同步非同步 && promise , prompt
// 根據問題數量去拆分 可以避免重複回答問題 這提我答錯時 又要重複輸入第一提