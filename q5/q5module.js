// 驗證是否為正整數
export const isPositiveInt = input => {
    if(!/^[1-9]\d*$/.test(input)){
        throw new Error("請輸入正整數");
    }
}

// 驗證輸入值是否大於零
export const isZero = input => { 
    if(Number(input) === 0){
        throw new Error("請輸入值不為零");
    }
};

// 驗證是否輸入為整數
export const isInteger = input => {
    if (!Number.isInteger(Number(input))) {
        throw new Error("請輸入整數");
    }
};


// 驗證是否為偶數
export function isEven(number){
    if(number % 2 !== 0){
        throw new Error('請輸入偶數')
    }
}

//驗證同梱包
export function testBundle(input){ 
        isPositiveInt(input);
        isEven(input);
       
        isInteger(input);
        isZero(input);
}

// 遞迴
export function umleven(n){
    if(n <= 2 ){
        // console.log("a")
       return 0
    }
    // console.log("b");
    return (n-2) * n + umleven(n - 2);
}

