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


function main() {
    const score = [4, 3, 2, 1]
    const voter = [51, 5, 23, 21]

    // const candidates = ["a","b","c","d"]

    const candidates = [
        //col
        ["a", "c", "b", "d"],//row
        ["c", "b", "c", "c"],
        ["b", "d", "d", "b"],
        ["d", "a", "a", "a"],
    ]

    const candidatesScore = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    }

    candidates.forEach((row, rowIndex)=>{
        row.forEach((col, colIndex)=>{
            candidatesScore[col]+= score[rowIndex] * voter[colIndex]
        })
    })

    console.log("所有候選人分數個別是",candidatesScore)

    if(candidatesScore)
    // a = 51*4 + 5*1 + 23*1 + 21*1

}

main()
