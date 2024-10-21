// ### 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)


//       51 | 5  | 23 | 21
// 1st | 1  | 3  | 2  | 4
// 2nd | 3  | 2  | 3  | 3
// 3rd | 2  | 4  | 4  | 2
// 4th | 4  | 1  | 1  | 1





//我需要做什麼
//目前已知投票人數,投票分數,要怎麼做才可以
//建立分數,建立abcd為候選人
//要作到顯示abcd在每局得牌位？
//讓使用者輸入abcd牌位
//最後列印出abcd得分數以及每局分數？


export function main() {

    //建立分數
    const score = [4, 3, 2, 1]


    //建立選民人數
    const vote = [51, 5, 23, 21]

    //建立候選人
    const candidates = [
        //col
        ["a", "c", "b", "d"],//row
        ["c", "b", "c", "c"],
        ["b", "d", "d", "b"],
        ["d", "a", "a", "a"],
    ]

    //建立計分系統,用來儲存分數,之後跑迴圈數據存取在這裡,最後要列印出它
    const candidatesScore = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    }

    // candidates.forEach((row, rowIndex)=>{
    //     row.forEach((col, colIndex)=>{
    //         candidatesScore += (score*rowIndex ) * (vote * colIndex)
    //     })
    // })

    //運用forEach（陣列專用method），然後跑候選人二維陣列，candidates.forEach得row 是指順位 也代表1st 2nd 3rd 4th得整列 陣列上到下，rowindex是代表給陣列順位編號 0,1,2,3，
    //row.forEach就是跑row上往下走，然後col是指a,c,b,d，colIndex代表陣列內容 賦予編號0,1,2,3
    //最後
    candidates.forEach((row, rowIndex)=>{
        // console.log(row)
        // console.log(rowIndex)

        row.forEach((col, colIndex)=>{
            // console.log(col)
            // console.log(colIndex)
            candidatesScore[col]+= score[rowIndex] * vote[colIndex]
            // console.log(vote[colIndex])
            // console.log(score[rowIndex] * vote[colIndex])
            
        })
    })

    // console.log("所有候選人分數各別是",candidatesScore)

    return("所有候選人分數各別是",candidatesScore)
    // a = 51*4 + 5*1 + 23*1 + 21*1

}

const ans = main()
console.log(ans);
