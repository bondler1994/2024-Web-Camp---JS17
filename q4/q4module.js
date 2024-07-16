export function checkOdd(number){
    // if(){
    //     return true;
    // }
    return number % 2 !== 0 
}


export function Q4(input){
    // 數字算總和
    // let currentSum = 1;
    // 列出字串公式
    // let formula = "1";
    // 使用迴圈去跑數值,當i等於1 且小於等於輸入值，i持域增加1
    // for(let i = 1; i <= input; i++){

        
    const {formula, currentSum} = Array(input-1)
                                    .fill(2)
                                    .map((shift, index) => shift + index)
                                    .reduce(({currentSum, formula}, count) => {
        // console.log('result', result)
        // let count = i + 1;
    
        // if( count === 1){
        //     currentSum += 1;
        //     formula += `${1}`;
        //     // 迴圈迭代，進入下一個迴圈
        //     // continue;
        //     return;
        // }
        const isOdd = checkOdd(count);
        if(isOdd){
            currentSum -= count;
            formula += `-${count}`
            // return {currentSum, formula};
        } else {
            currentSum += count
            formula += `+${count}`
        }
        return {currentSum, formula}
    }, {
        currentSum: 1, 
        formula: "1"
    })

    // for (let i = 0; i < input; i++) {
    //     let count = i + 1;
    
    //     if( count === 1){
    //         currentSum += count;
    //         formula += `${count}`;
    //         // 迴圈迭代，進入下一個迴圈
    //         continue;
    //     }
    //     const isOdd = checkOdd(count);
    //     if(isOdd){
    //         currentSum -= count;
    //         formula += `-${count}`
    //         continue;
    //     }
    //     currentSum += count
    //     formula += `+${count}`
    // }
        return {formula, currentSum};
}


