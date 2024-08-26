export function carryEquipments(num, weight, total, limit){
    const random = Math.floor(Math.random() * 3)

    if(total + weight[random] < limit){
        total = total + weight[random]
        num[random] = num[random] + 1
        return carryEquipments(num, weight, total, limit)
    }else{
        return {num, weight, totalWeight : total}
    }
}


