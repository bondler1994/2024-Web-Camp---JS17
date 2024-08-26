import { twist } from "./q7module"
import { chrisTwist } from "./q7module.js"
import { jeremyIdea } from "./q7module"

describe("測試",() => {

    test("預期'arrow'經過這寶貝變數後能旋轉",()=> {
        const arrow = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        const expected = [
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ]
        expect(twist(arrow)).toEqual(expected)
    })

})

describe("測試Chris版本",() => {

    test("預期'arrow'經過這寶貝變數後能旋轉",()=> {
        const arrow = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        const expected = [
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ]
        expect(chrisTwist(arrow)).toEqual(expected)
    })

})

describe("測原圖愛心",()=> {
    test("測試題目得愛心是否正確",()=> {
        const heart = `
  ** **  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
         `;

         const expected = [
                // col
                [" "," ","*","*"," ","*","*"," "," "],  // row
                [" ","*","*","*","*","*","*","*"," "],
                ["*","*","*","*","*","*","*","*","*"],
                ["*","*","*","*","*","*","*","*","*"],
                [" ","*","*","*","*","*","*","*"," "],
                [" "," ","*","*","*","*","*"," "," "],
                [" "," "," ","*","*","*"," "," "," "],
                [" "," "," "," ","*"," "," "," "," "],
                [" "," "," "," "," "," "," "," "," "],  // row
            ]
        expect(jeremyIdea(heart)).toEqual(expected)
    })
})

