// // ### 6. 宣告陣列 `nameList`，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。


//目前我想到 先建立一個fn 是專門判斷使用者輸入是否為四個子 並傳入陣列
//設立檢查點 當使用者輸入不屬於英文會報錯
//設立輸出值 判斷並印出
//建立斷點 它可以判斷假設使用者輸入 1是英文名稱 若二是錯誤 那就會卡在二並且重新輸入


import { Q6 } from "./q6module.js";
import { checkAlphabet } from "../tool/validator.js";
import prompt from "../tool/prompt-sync.js";

//步驟一 建輸入單字檢查點 來確認使用者輸入得是英文單字
function takeNameByUser(question) {
  try {
    const name = prompt(question);
    checkAlphabet(name);
    // extractOddWordAddCommas(name);          
    return name;
  } catch (v) {
    console.log("輸入錯誤，請重新輸入有效的英文名字！");
    return takeNameByUser(question);
  }
}



//步驟二 因為要讓使用者輸入四次 所以
function main() {
  // const nameList = [];
  // for (let i = 0; i < 4; i++) {
  //   nameList.push(takeNameByUser(`請輸入名字，第 ${i + 1} 個：`));
  // }

  //Chris vertion
  const nameList = Array(4).fill(null)
    .map((o, i) => `請輸入名字，第 ${i + 1} 個：`)
    .map(takeNameByUser

    )



  // 輸出 nameList 內容
  console.log(nameList);

  const message = Q6(nameList);
  console.log(message);


  //此處為測試名稱可讀性
  // extractOddWord(thirdName);
  // extractOddWord(firstName);
  // console.log(`第一個名字的奇數索引字母：${extractOddWord(firstName).join(',')}`);
  // console.log(`第三個名字的奇數索引字母：${extractOddWord(thirdName).join(',')}`);
}

main();



// function takeName(question){
//   try{
//     const name = prompt(question)
//     checkAlphabet(name)
//     return name
//   }catch()
// }