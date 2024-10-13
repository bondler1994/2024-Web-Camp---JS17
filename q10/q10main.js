// ### 10. 宣告一整數陣列 `array = [3,50,0,13,2,4,11]` 
//試寫一程式，印出陣列中所包含的質數以及其索引值。
import { isPrime } from "./q10module.js"

const array = [3, 50, 0, 13, 2, 4, 11];

function main(){
//如果箭頭函式裡面有建立程式區塊就要加大括號喔糾咪
    array.forEach((num, index) =>{
        if(isPrime(num)){
            console.log(`索引值${index}, 其數值為${num}`)
        }
    })
}

main()