// //如果是布林true 就會印出resolve內容 false則是reject
// let sendToAirport = true;

// //建構物件首先要new 然後下一個詞要大寫
// //建立promise裡面會有結果 即是成功與失敗
// //promise裡面建構 if else
// //p現在是一個 promise object, 而object提供了一個方法叫then
// let p = new Promise(function (resolve, reject) {
//     if (sendToAirport) {
//         //此處訊息是證明當sendToAirport順利執行得結果，
//         //而執行完成，便會繼續執行then內容
//         resolve('from resolved(): send to airport');
//     } else {
//         console.log('Driver is trash');
//         reject("from reject(): order cancelled");
//     }
// })

// p
//     //promise下一步就是要用then，而then 裡面就需要放callback fnc
//     .then(function (message) { console.log(`${message} - promise resolved`) })
//     //catch捕捉Uncaght錯誤代碼 並且更改Uncaght內容 
//     .catch(function (message) { console.log(`${message} - promise reject`) })

// // let f = fetch("https://jsonplaceholder.typicode.com/users");

// // f.then(function (userData) {
// //     return userData.json()
// // })
            //這行是接續上一行，userData專為json 會返回一個promise ,而返回得就會接續下一行
// //     .then(function (jsonData) {
// //         console.log(jsonData);
// //     })

let sendToAirport = true

let p = new Promise(function (resolve, reject) {
    if (sendToAirport) {
        resolve("from resolve():send to airport")
    } else {
        reject("from reject():no way to go")
    }
})

p
    .then(function (message) {console.log(`${message} - promise resolve`); })
    .catch(function (message) { console.log(`${message} - promise resolve`); })

let f = fetch('https://jsonplaceholder.typicode.com/users') 
let o = fetch('https://jsonplaceholder.typicode.com/users') 

//當有多個要執行 就域.all
Promise.all([f,o])
    .then(function(responses){
        return Promise.all(responses.map(response => response.json()))
    })
    .then(function(jsonDataArray){
        console.log(jsonDataArray[0])
        console.log(jsonDataArray[1])
    })
    .catch(function(e){
        console.error('發生錯誤：',e)
    })


// f.then(function(userData){
//     return userData.json()
// })
// .then(function(jsonData){
//     console.log(jsonData);
// })


// o.then(function(userData){
//     return userData.json()
// })
// .then(function(jsonData){
//     console.log(jsonData);
// })