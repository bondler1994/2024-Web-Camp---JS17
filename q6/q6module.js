export function pickOddLetter(string){
    //簡化語法 所以return放前面
    //from會把陣列中得字母一一拆分
    return Array.from(string)
    //篩選出基數得單字,index是所影,如果索引除二得於數0
    //那就是偶數，並且保留，非偶數就不留
    .filter((letter, index) => index % 2 === 0)
    //將多個獨立得字串合併乘一個字串並在每個字中加上,
    .join(',');
}



// // let names = [];

// // // 輸入四個值
// // function inputName (array){
// //     if(array.length <= 4){
// //         names.push(names)
// //     }else{
// //         console.log('已經輸入四個值');
// //     }
// // }

// // // 揀選基數單字
// // function pickOddLetter(string){
// //     return Array.from(string)
// //     .filter((character, index) => index % 2 === 0)
// //     .join("");
// // }

// // export { inputName, pickOddLetter };
