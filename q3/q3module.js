// export function isPositiveInt(string) {
//     return /^(0|[1-9]\d*)$/.test(string);
// } 

export const isPositiveInt = input => {
    if(!/^[1-9]\d*$/.test(input)){
        throw new Error("請輸入正整數");
    }
}


export function Q3(strInput){
    const ageInput = Number(strInput);
    let entraceFee = ""; 

    if(ageInput <= 6 || ageInput >= 65 ){
        entraceFee = "half price $200";
    }else {
        entraceFee = "full price $400";
    }
    return entraceFee;
}

// 提示可以提昇使用者體驗 比方你的年齡有優惠喔之類得
