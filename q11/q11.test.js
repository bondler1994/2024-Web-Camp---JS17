import { coupon } from "./q11module.js";
import { main } from "./q11main.js";
import promt from "../tool/prompt-sync.js"


jest.mock("../tool/prompt-sync.js")
jest.mock('./q11module.js'); // 模擬 coupon 模組

describe('購買期數與消費計算測試', () => {
    test('輸入有效的數值，檢查結果', () => {
        prompt.mockReturnValueOnce("1");
        coupon.mockReturnValueOnce({ total: 1, num: 2 });
        const consoleSpy = jest.spyOn(console, 'log');

        main();

        expect(consoleSpy).toHaveBeenCalledWith("您購買了2期,消費為1000");
        consoleSpy.mockRestore();
    });

})

// describe("測試coupon函式",() => {

//     test('測試第一期是否會如預期打折',() => {
//         const {total, num} = coupon(1);
//         expect(num).toBe(1);
//         expect(total).toBeCloseTo(500 * 0.79);
//     })

//     test("測試第二期是否會如預期計算", ()=> {
//         const {total, num} = coupon(2)
//         expect(num).toBe(2)
//         expect(total).toBeCloseTo(500*0.79 + 500)
//     })

//     test("測試輸入0，結果會是報錯誤", ()=>{
//         expect(()=>{
//             coupon(0);
//         }).toThrow("請輸入值不為零")
//     })

//     test("測試第五奇是否會如預期計算", ()=>{
//         const {total, num} = coupon(5)
//         expect(num).toBe(5)
//         expect(total).toBeCloseTo(500 * 0.79 + 500 * 4 - 200)
//     })
 
// })

