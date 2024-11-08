// ### 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)


//       51 | 5  | 23 | 21
// 1st 4['a', 'c', 'b', 'd']
// 2nd 3['c', 'b', 'd', 'a']
// 3rd 2['b', 'c', 'd', 'a']
// 4th 1['d', 'c', 'b', 'a']

//我需要做什麼
//目前已知投票人數,投票分數,要怎麼做才可以
//建立分數,建立abcd為候選人
//要作到顯示abcd在每局得牌位？
//讓使用者輸入abcd牌位
//最後列印出abcd得分數以及每局分數？
// import { q17 } from "./q17module.js"  // ES module
import { q17 } from "./q17moudule2.js"
// const q17 = require('./q17module.js') // commonJS

function main() {

    //建立分數
    const score = [4, 3, 2, 1]


    //建立選民人數
    const vote = [51, 5, 23, 21]


    const candidates2 = [
        //col
        ['a', 'c', 'b', 'd'],
        ['c', 'b', 'd', 'a'],
        ['b', 'c', 'd', 'a'],
        ['d', 'c', 'b', 'a']
    ]
    // candidates2.forEach((row, rowIndex) => {
    //     const row2 = row.map((col, colIndex) => {
    //         return candidates2[colIndex][rowIndex]
    //     })
    //     console.log(row2)
    // })

    //建立計分系統,用來儲存分數,之後跑迴圈數據存取在這裡,最後要列印出它

    const ans = q17(candidates2, score, vote)
    console.log(ans);



    // console.log("所有候選人分數各別是",candidatesScore)

    // return ("所有候選人分數各別是", candidatesScore)
    // a = 51*4 + 5*1 + 23*1 + 21*1

}

main()


