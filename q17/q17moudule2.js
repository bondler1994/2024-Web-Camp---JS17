export function q17(candidates2, score, vote) {
    //關聯式容器
    const candidatesScore = {}

    //正正
    // function giveCandidatesZeroValue(num) {

    //     num.forEach((row, rowIndex) => {
    //         giveCandidatesZeroValue[row] = 0
    //         // console.log(giveCandidatesZeroValue)
    //         // console.log('row', row)
    //         // console.log('rowIndex', rowIndex)
    //     })
    //     console.log(giveCandidatesZeroValue);
    // }

    // giveCandidatesZeroValue(candidates2[0]);


    //test one
    // const test = candidates2.flat().reduce((acc, candidates) => {
    //     acc[candidates] = 0
    //     return acc
    // }, candidatesScore)

    //test two
    candidates2[0].forEach((candidate, Index) => {
        candidatesScore[candidate] = 0
        candidatesScore[Index]
    })
    console.log(candidatesScore);


    candidates2.forEach((row, rowIndex) => {
        // console.log(row)
        // console.log(rowIndex)
        row.forEach((col, colIndex) => {
            // console.log(col)
            // console.log(colIndex)

            // console.log('>>>>>>', col, candidatesScore[col]);
            candidatesScore[col] += score[colIndex] * vote[rowIndex]
            // console.log(candidatesScore[col]);
            // console.log(vote[colIndex])
            // console.log(score[rowIndex] * vote[colIndex])
        })



    })
    return candidatesScore

    return ("所有候選人分數各別是", candidatesScore)


}
