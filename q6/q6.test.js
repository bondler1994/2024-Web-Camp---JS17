import { extractOddWordAddCommas, Q6 } from "./q6module.js"

describe("test Q6", () => {
    test("test A", () => {
        const alphabet = ["abc", "abc", "cde", "abc"]

        const result = Q6(alphabet)

        expect(result).toBe(`第一與第三個名子的奇數索引字母：["a","c"]["c","e"]`)
    })
})

describe("測試extractOddWordAddCommas", () => {

    test("預期輸入abcdef給extractOddWordAddCommas,會得到'a,c,e'", () => {
        expect(extractOddWordAddCommas("abcdef")).toStrictEqual(["a", "c", "e"])
    })

    test("預期輸入123456給extractOddWordAddCommas,會得到'1,3,5'", () => {
        expect(extractOddWordAddCommas("123456")).toStrictEqual(["1", "3", "5"])
    })


    test("預期輸入Watson給extractOddWordAddCommas,會得到'W,t,o'", () => {
        expect(extractOddWordAddCommas("Watson")).toStrictEqual(["W", "t", "o"])
    })

    //試試AAA ？是否正確
    test("當給入一句字串時,會抽取其中得基數單字", () => {

        //準備要測試得題目
        const alphabet = "abcdef"
        //問題執行
        const result = extractOddWordAddCommas(alphabet)
        //執行結果
        expect(result).toStrictEqual(["a", "c", "e"])
        //完成上方即為AAA Arange Ask Assert
    })
})