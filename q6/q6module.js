export function pickOddLetter(string){
    return Array.from(string)
    .filter((letter, index) => index % 2 === 0)
    .join(',');

}


// let names = [];

// // 輸入四個值
// function inputName (array){
//     if(array.length <= 4){
//         names.push(names)
//     }else{
//         console.log('已經輸入四個值');
//     }
// }

// // 揀選基數單字
// function pickOddLetter(string){
//     return Array.from(string)
//     .filter((character, index) => index % 2 === 0)
//     .join("");
// }

// export { inputName, pickOddLetter };
