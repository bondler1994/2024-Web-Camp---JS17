// ### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//試寫一遞迴函數`function twofold(b, m)` 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
import prompt from "../tool/prompt-sync.js";
import {isPositiveInt} from "../tool/validator.js"
import {twofold} from "./q14module.js"


function main(){
    try {
        //讓使用者輸入細菌數量
        let bacteriaInput = prompt("請輸入細菌數量：")
        isPositiveInt(bacteriaInput);
        const initialBacteria = Number(bacteriaInput);

        //讓使用者輸入時間
        let timeInput = prompt("請輸入實驗時間：");
        isPositiveInt(timeInput);
        const minInput = Number(timeInput);


        //使用兩個輸入值呼叫 twofold
        const result = twofold(initialBacteria, minInput);

        //列印出結果
        console.log(`${minInput}分鐘，細菌數量會是${result}`)


    }catch(error){
        console.log(error.message);
        main()
    }
}

main()