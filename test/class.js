//設定一個情境,設定電話
class Phone {
    constructor(number, year, is_waterproof) {
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof
    }

    phone_age() {
        return 2021 - this.year;
    }

    getPhoneNumber() {
        const a = [];
        return "1111" + Number(this.number)
    }
}

let phone1 = new Phone("123", 2020, false);
let phone2 = new Phone("234", 2019, true);


// console.log(phone1.phone_age());
// console.log(phone2.getPhoneNumber());

///////////////////////////////////////////

//建立服飾class
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    //這裡建立 class 方法計算完後印出展示衣物與價錢
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`price: ${Math.floor(this.price.toFixed(2))}`);
    }   

    //這裡建立計算方法，用來計算加上稅金後得價錢
    //放入salesTax參數，接收外部數值並傳入，在這裡運行
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }


}

//建立稅金，因為數值不會有變化，所以用常數
const salesTax = 0.5

//建立產品
const product1 = new Product("shirt",300);
const product2 = new Product("pants",500.50);
const product3 = new Product("underwear",50)


//建立一個 total 變數，然後測試 product1 套用(呼叫)class裡面計算的方法，
//並放數引數，引用先前建立得變數，它會傳遞到calculateTotal裡面計算
const total = product1.calculateTotal(salesTax)

//印出total看運算結果
console.log(`Total price(with tax): ${total}` )

/////////////////////////////////////////////////////

//總距離 1000 公尺
//每秒 20 公尺
//每 5 秒 退 1 公尺
//多久才會到終點



class Rabbit {
    constructor(speed){
        this.name = "Rabbit"
        this.retreatMeterPerSec = 5
        this.speed = speed
        this.retreatMock = 1
    }

    displayPosition(){
        console.log(``)
    }


    

}
