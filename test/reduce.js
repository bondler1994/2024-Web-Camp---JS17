//total = 0 是為了讓累加操作從 0 開始，保持一致性並避免未定義的行為
const total = 0

function tryToPlus(num){
    //Number 作為.from()的第二參數是為了讓'字串引數'轉換成數字，而這作法叫做映射函式 類.map()
    //
    const meme =  Array.from(num, Number);
    console.log(meme)
    //total = 0 這裡被使用了
    return meme.reduce((plus,allNum) => plus + allNum,total)
    
}
            
console.log(tryToPlus('12345'))

//知識點
//映射函式
// Array.from("1234",Number) = Array.from("1234").map(Number)