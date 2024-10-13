// export function inputFiveWord(input){
//     if(input !== 5){
//         throw new Error("請輸入五位數")
//     }else{
//         return inputFiveWord
//     }
// }

export function inputFiveWord(input) {
    // 檢查輸入是否為字串，並且字串長度是否為5
    if (typeof input === 'string' && input.length === 5) {
        return input; // 如果符合要求，返回輸入值
    } else {
        throw new Error("請輸入五個字母"); // 否則拋出錯誤
    }
}

