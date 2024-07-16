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
