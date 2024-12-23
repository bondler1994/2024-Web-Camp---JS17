// ### 7. 印出下圖，並轉 90°

// ```
//   ** ** 
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *
// ```

//先將圖放入陣列裡

// import { twist } from "./q7module.js";
import { chrisTwist } from "./q7module.js";
import { jeremyIdea } from "./q7module.js";

// const heart = [
//     // col
//     [" "," ","*","*"," ","*","*"," "," "],  // row
//     [" ","*","*","*","*","*","*","*"," "],
//     ["*","*","*","*","*","*","*","*","*"],
//     ["*","*","*","*","*","*","*","*","*"],
//     [" ","*","*","*","*","*","*","*"," "],
//     [" "," ","*","*","*","*","*"," "," "],
//     [" "," "," ","*","*","*"," "," "," "],
//     [" "," "," "," ","*"," "," "," "," "],
//     [" "," ","",""," ","",""," "," "],  // row
// ]

const heart = `
  ** **  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
         `;
         
const changeToArray = jeremyIdea(heart)


//打印標題
console.log('原心圖\n');

//讓大陣列裡面得小陣列跑一次，並且刪除標點符號
changeToArray.forEach((row => //在forEach建立參數，取名為row，讓它跑一輪
    console.log(row.join('')) //並且印出row，加入join取消標點符號
))

// const rotated = twist(heart)

// //建立旋轉
// //先取得大陣列裡面每一格小鎮列得[0]位置，使用map產生新陣列，()裡面為函式，callback；
// export const rotated = heart[0].map((val, rowIndex) => //建立箭頭函式，放入兩個參數：分別代表val是取得小陣列得東西，index是取得小陣列裡的位置！！！
//     heart.map(colArray => colArray[rowIndex])//在將heart！！！！！！！！
//     // ['', '', ...]
// )


//另一種寫法 等同於x與y軸旋轉
// const chrisTwist = heart.map((row, rowIndex, heartArray) =>
//         row.map((col, colIndex) => {
//           return heartArray[colIndex][rowIndex]
//       })
//     )



//打印標題
console.log('90度新圖\n');

const rotated = chrisTwist(changeToArray)
//使用rotated常數，並且在將它用forEach跑一輪，並且印出結果，一樣加入join刪除標點符號
rotated.forEach((row => 
    console.log(row.join(''))
))

// chrisTwist.forEach((row => 
//     console.log(row.join(''))
// ))
