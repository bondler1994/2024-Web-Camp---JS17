export const isZero = input => { 
    if(Number(input) === 0){
        throw new Error("請輸入值不為零");
    }
};


export const isInteger = input => {
    if(!Number.isInteger(Number(input))){
        throw new Error("請輸入整數");
    }
};


// =======================================
// 我這裡得邏輯想要做得事當使用者輸入錯誤會報錯
export function Q2([firstInput, secondInput]){
    const divider = 3;
    if(firstInput % divider === secondInput % divider){
        console.log("餘數相同");
    }else{
        console.log("你是智障");
    }
}

// Q2(division()){
//     isZero(strInput)
//     isInteger(strInput)
//     return Number(strInput)
// };