let person = {
    name:"alen",
    age:20,
    like:"games",

    print_name:function(){
        console.log(this.name)
    }
}

let letter = "hello"

//嘗試不同object寫法

//1
let person1 = new Object();
person1.fristname = "alen";
person1.lastname  = "wang";
person1.address   = new Object() 
person1.address.country   = "Taiwan";
person1.address.city   = "Tainan";
person1.address.street   = "zhongzhen";

console.log(person1.address.street)

//2

