// ### 9. 宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，並利用陣列設定初值的方式，將 `arr1[0]~arr1[4]` 分別設值為 2,3,1,7,9， `arr2[0]~arr2[4]` 分別設值為 8,7,9,3,1，將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列
import { addBothFrame } from "./q9module.js"

function main(){

    const arr1 = [2,3,1,7,9]
    const arr2 = [8,7,9,3,1]
    
    const meld = addBothFrame(arr1,arr2)
    console.log(meld)

}

main();