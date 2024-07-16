// ### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和
// import { rl } from "../tool/readline.js";
import prompt from "../tool/prompt-sync.js";
import { Q4 } from "./q4module.js";


function main(){
    const inputGreaterThenZero = Number(prompt("請輸入大於零的值"));
    try {
        if (inputGreaterThenZero <= 0) {
            throw new Error("請輸入大於零的值");
            // main(); // 如果 askQuest 不大於零，重新執行 main 函數
        }
        
        const {formula, currentSum} = Q4(inputGreaterThenZero); // 將 askQuest 作為參數傳遞給 Q4 函數
        // console.log(result);
        console.log(`算式：${formula}`);
        console.log(`總和：${currentSum}`);
    } catch (error) {
        console.log(error.message);
        main(); // 出現錯誤時重新執行 main 函數
    }
}

main();


// keyword:for break
// 邏輯拆分問題 formula得部份
// for迴圈預設i值 不要隨意更改預設 跟專案有關 
