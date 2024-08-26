export function twist(matrix){
//建立旋轉
//先取得大陣列裡面每一格小鎮列得[0]位置，使用map產生新陣列，()裡面為函式，callback；
return matrix[0].map((val, rowIndex) => //建立箭頭函式，放入兩個參數：分別代表val是取得小陣列得東西，index是取得小陣列裡的位置！！！
    matrix.map(colArray => colArray[rowIndex])//在將heart！！！！！！！！
)}

//Chris得另一種寫法 
//等同於x與y軸旋轉
export function chrisTwist(matrix){
    return matrix.map((row, rowIndex, heartArray) =>
        row.map((col, colIndex) => {
            return heartArray[colIndex][rowIndex]
        })
    )
}

//+銘得formula
//把圖像轉字串後，在轉陣列
//先建立變數，將題目變成字串，然後在用split已 \n換行為單位 轉換陣列
//這裡有個煩人得點，將題目轉成字串後要注意空格數，因為會影響到後續發展
//轉換完後，並使用map美製出新陣列，然後再做split讓字之間產生空格
//在使用filter篩掉空的陣列
export function jeremyIdea(turnMatrix){ 
    return turnMatrix.split("\n").map((shit)=> shit.split("")).filter((shit) => shit.length !== 0)
}


