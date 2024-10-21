import { twofold } from "./q14module.js";

describe("細菌雙倍增值,twofold",() => {

    test('測試當m為20分鐘，b數值是否會翻倍',() => {
        expect(twofold(1,20)).toBe(2)
    })

    test('測試當b為0時，m數值在多,b都應該為0',()=>{
        expect(twofold(0,100)).toBe(0)
    })

    test('測試當m為1000分鐘',()=>{
        expect(twofold(1,1000)).toBe(1125899906842624)
    })

    test('當時間超過20分鐘時，細菌數量應成長兩倍',()=>{
      
        const bacteriaAmount = 1
        const timeOverMin = 20

        const result = twofold(bacteriaAmount, timeOverMin)

        expect(result).toBe(2)
    })

})

