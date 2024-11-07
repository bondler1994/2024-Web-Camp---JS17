export function q17(candidates2, score, vote) {
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
    candidates2.forEach((row, rowIndex) => {
        // console.log(row)
        // console.log(rowIndex)
        row.forEach((col, colIndex) => {
            // console.log(col)
            // console.log(colIndex)

            console.log('>>>>>>', col, candidatesScore[col]);
            candidatesScore[col] += score[colIndex] * vote[rowIndex]
            // console.log(vote[colIndex])
            // console.log(score[rowIndex] * vote[colIndex])
        })
    })
    // return candidatesScore
    return ("所有候選人分數各別是", candidatesScore)

}
