export function checkOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    return false;
}


export function Q4(input){
    // 數字算總和
    let currentSum = 0;
    // 列出字串公式
    let formula = "";

    // 使用迴圈去跑數值,當i等於1 且小於等於輸入值，i持域增加1
    for(let i = 1; i <= input; i++){
        if( i === 1){
            currentSum += i;
            formula += `${i}`;
            // 迴圈迭代，進入下一個迴圈
            continue;
        }
        const isOdd = checkOdd(i);
        if(isOdd){
            currentSum -= i;
            formula += `-${i}`
            continue;
        }
        currentSum += i
        formula += `+${i}`
    }
        return {formula, currentSum};
}


