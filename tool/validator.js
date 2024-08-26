//檢查輸入使否為英文字
export function checkAlphabet(input){
    if(!/^[A-Za-z]+$/.test(input)){
        throw new Error("請勿輸入非英文單字");
    }
}

//檢查是否輸入得值大於零
export const isNonNegitiveInteger = input => {
    const num = Number(input);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("請輸入大於零的整數");
    }
};

//請使用者輸入非零得值
export const isZero = input => { 
    if(Number(input) === 0){
        throw new Error("請輸入值不為零");
    }
};

//檢查是否輸入為正整數
export const isPositiveInt = input => {
    if(!/^[1-9]\d*$/.test(input)){
        throw new Error("請輸入正整數");
    }
}

export function isPrime(num) {
    if (num <= 1) return false; // 1 或更小的數字不是質數
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // 質數得定義：可以被1 或自己 整除，並且不可以被其他得數整除
        if (num % i === 0) {
            return false; // 如果num能被i整除，則num不是質數
        }
    }
    return true; // 如果沒有找到能整除num的數，則num是質數
}
