
let sendToAirport = false;

//建構物件首先要new 然後下一個詞要大寫
//建立promise裡面會有結果 即是成功與失敗
//promise裡面建構 if else
let p = new Promise(function (resolve, reject) {
    if (sendToAirport) {
        resolve('from resolved(): send to airport');
    } else {
        console.log('Driver is trash');
        reject("from reject(): order cancelled");
    }
})

p
    //promise下一步就是要用then，有點然後
    .then(function (message) { console.log(`${message} - promise resolved`) })
    //catch捕捉Uncaght錯誤代碼
    .catch(function (message) { console.log(`${message} - promise reject`) })

let f = fetch("https://jsonplaceholder.typicode.com/users");

f.then(function (userData) {
    return userData.json()
})
    .then(function (jsonData) {
        console.log(jsonData);
    })
