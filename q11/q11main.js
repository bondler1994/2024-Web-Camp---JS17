// ### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。

import prompt from "../tool/prompt-sync.js";
import { coupon } from "./q11module.js";


export function main(){
    const task = Number(prompt("一期500,多買多優惠，請輸入值，快點："));
    try{
        const {total, num} = coupon(task)

        // console.log(coupon(task))
        console.log(`您購買了${num}期,消費為${total}`)

    }catch(error){
        console.log(error.message);
        main();
    }
}

main()