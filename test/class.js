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
        const a = []
        return "1111" + Number(this.number).
    }
}

let phone1 = new Phone("123", 2020, false);
let phone2 = new Phone("234", 2019, true);


console.log(phone1.phone_age());
console.log(phone2.getPhoneNumber());