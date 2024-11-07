export function q17(candidates2, score, vote) {
    const candidatesScore = {}

    function giveCandidatesZeroValue(num) {

        num.forEach((row, rowIndex) => {
            giveCandidatesZeroValue[row] = 0
            console.log(giveCandidatesZeroValue);
            // console.log(giveCandidatesZeroValue)
            // console.log('row', row)
            // console.log('rowIndex', rowIndex)
        })
    }
    
    giveCandidatesZeroValue(candidates2[0]);




    candidates2.forEach((row, rowIndex) => {
        // console.log(row)
        // console.log(rowIndex)
        row.forEach((col, colIndex) => {
            // console.log(col)
            // console.log(colIndex)

            // console.log('>>>>>>', col, candidatesScore[col]);
            candidatesScore[col] += score[colIndex] * vote[rowIndex]
            // console.log(vote[colIndex])
            // console.log(score[rowIndex] * vote[colIndex])
        })
    })
    return candidatesScore

    return ("所有候選人分數各別是", candidatesScore)

}
