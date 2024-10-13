import { twofold } from "./q14module.js";


describe("測試遞迴",() => {

    test('測試當m為20分鐘，b數值是否會翻倍',() => {
        expect(twofold(1,20)).toBe(2)
    })

    test('測是當m為-10時，b數值是否為原數值',() =>{
        expect(twofold(10, -10)).toBe(10)
    })

    test('測試當b為0時，m數值在多,b都應該為0',()=>{
        expect(twofold(0,100)).toBe(0)
    })

})