// function test(){
//     console.log(this) //此時得this代表window物件
//     console.log(this.innerWidth)//印出視窗的寬度
// }

// test()

// //建立物件
// let object = {
//     x:3,

//     //在物件裡建立方法 test,而同時也代表函式 
//     test:function(){
//         console.log(this)//在物件得方法中 this 就是所屬得方法本身 也就是代表物件本身
//         console.log(this.x);//this 就是這物件 所以這會代表3
//     }
// }

// object.test()

// ===============
//建構函式
//最大差別就是呼叫方式

// function Point(){
//     console.log(this); //this 就是瀏覽器自動幫我們新建立一個空白物件
//     this.x = 3;
//     this.y = 4;
// }

// let p1 = new Point()
// console.log(p1)

// console.log(person("hello" + this.name))

//這是一個object 物件
let Person = {
    name:"Watson", //用逗點分行 想像事物見識寫句子，文字都要家雙引號
    age:30,
    //下方得test方法是Person物件得函式，此處只是為了要測試輸出結果所以才寫這函式
    test:function(){
        console.log('hello'+ " " + this.name)

    }
}

//呼叫物件中得方法就只能使用 . 來呼叫
Person.test()