import { divi } from "./q8module.js";

describe("測試", ()=> {
    test("測試輸入值27,應該會回傳3", ()=> {
        expect(divi(27)).toBe(1)
    })
    test("測試輸入值243,應該會回傳5", ()=> {
        expect(divi(81)).toBe(1)
    })

    // 测试 count 参数
    test("測試 count 參數初始值為 1, 應該增加 1", () => {
        expect(divi(27, 1)).toBe(4);
    });
})