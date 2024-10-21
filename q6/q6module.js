export function extractOddWordAddCommas(string) {
    //簡化語法 所以return放前面
    //from會把陣列中得字母一一拆分
    return Array.from(string)
        //篩選出基數得單字,index是所影,如果索引除二得於數0
        //那就是偶數，並且保留，非偶數就不留
        .filter((letter, index) => index % 2 === 0)
        
    //將多個獨立得字串合併乘一個字串並在每個字中加上,
    // .join('');
}

export function Q6(nameList) {
    const [firstName, , thirdName] = nameList;
  
    // 取得第一和第三個名字的奇數索引字母
    const firstOddLetters = extractOddWordAddCommas(firstName);
    const thirdOddLetters = extractOddWordAddCommas(thirdName);
  
    // console.log(`第一個名字的奇數索引字母：${firstOddLetters}`);
    // console.log(`第三個名字的奇數索引字母：${thirdOddLetters}`);
    const message = `第一與第三個名子的奇數索引字母：${JSON.stringify(firstOddLetters)}${JSON.stringify(thirdOddLetters)}`;
    return message;
  }
  


// export function extractOddWord(string){
//     //簡化語法 所以return放前面
//     //from會把陣列中得字母一一拆分
//     return Array.from(string)
//     //篩選出基數得單字,index是所影,如果索引除二得於數0
//     //那就是偶數，並且保留，非偶數就不留
//     .filter((letter, index) => index % 2 === 0)
//     //將多個獨立得字串合併乘一個字串並在每個字中加上,
//     // .join(',');
// }



