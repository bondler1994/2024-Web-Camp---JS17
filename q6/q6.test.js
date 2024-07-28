import {pickOddLetter} from "./q6module.js"

describe("測試pickOddLetter",() => {
    
    test("預期輸入abcdef給pickOddLetter,會得到'a,c,e'",() => {
        expect(pickOddLetter("abcdef")).toBe('a,c,e')
    })

    test("預期輸入123456給pickOddLetter,會得到'1,3,5'",() => {
        expect(pickOddLetter("123456")).toBe('1,3,5')
    })


    test("預期輸入Watson給pickOddLetter,會得到'W,t,o'",() => {
        expect(pickOddLetter("Watson")).toBe('W,t,o')
    })
})