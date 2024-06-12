// export function isPositiveInt(string) {
//     return /^(0|[1-9]\d*)$/.test(string);
// } 

export const isPositiveInt = input => {
    if(!/^(0|[1-9]\d*)$/.test(input)){
        throw new Error("請輸入真實年齡");
    }
}

export function Q3(strInput){
    const ageInput = Number(strInput);
    let entraceFee = ""; 

    if(ageInput <= 6 || ageInput >= 65 ){
        entraceFee = "half price $200";
    }else {
        entraceFee = "full price $400";
    }
    return entraceFee;
}

Q3()