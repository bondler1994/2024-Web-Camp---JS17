// ### 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

// 大寫字母unicode A-Z:65-90
// 大寫字母unicode a-z:97-122


// chatcodeat 是檢查unicode
// charat 是取得陣列位置裡面得文字
// 檢查使用者輸入的5個單字後 推入陣列

// 如何讓陣列位移單字？ 畢竟內容是寫死
// 可以先取得使用者輸入得單字unicode 並且讓unicode+3
// 然後然後在轉為對應得英文字母
// 要設定範圍區間 unicode 不能超過 用if 
// input >=97 || <= 122 這樣？

import { checkAlphabet } from "../tool/validator.js";
import prompt from "../tool/prompt-sync.js";
import { inputFiveWord } from "./q16module.js";
    
const thorwInCage = [];

function main(){
    try{
    const input = prompt("請輸入5個英文字母，大小不限：");
    inputFiveWord(input);
    checkAlphabet(input);
    
    const A = 65
    const Z = 90
    const a = 97
    const z = 122
    
    for(let i = 0;i <= input.length; i++){
        const turnUnicode = input.charCodeAt(i);
        
        if(turnUnicode + 3 >=A && turnUnicode + 3 <=Z ){
            thorwInCage.push(String.fromCharCode(turnUnicode + 3))
        }
        if(turnUnicode + 3 >=a && turnUnicode + 3 <=z ){
            thorwInCage.push(String.fromCharCode(turnUnicode + 3))
        }
    }
        
    console.log(thorwInCage.join(""))


    }catch(error){
        console.log(error.message);
        main();
    }
    
}



main()