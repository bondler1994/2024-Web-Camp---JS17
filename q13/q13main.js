// ### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

function main(){

    //列出比賽細節
    const distance = 1000;
    const rabbitStep = 20;
    const turtleStep = 0.28;
    const rabbitMock = 1;

    //烏龜完賽時間，沒有任何問題，只差印出
    const turtleEnd = distance / turtleStep;

    //兔子完賽時間、用let是因為值會變更
    let rabbitPosition = 0;//兔子目前位置，會根據狀態更新位置，
    let rabbitForwardTime = 0;//兔子前進時間
    let rabbitBackwardTime = 0;//兔子退後時間
    let rabbitEnd 

    // for (let i = 0 ;rabbitPosition < distance; i++){
    //     rabbitPosition += (rabbitStep * 5) - rabbitMock;
    //     rabbitTime += 5
    //     console.log(`i: ${i}; rabbitP:${rabbitPosition}`);

    //     if(rabbitPosition >= distance){
    //         break;
    //     }
        
    // }
    
    while(rabbitPosition < distance){
        rabbitPosition += (rabbitStep * 5) - rabbitMock
        
        rabbitForwardTime += 5 
        rabbitBackwardTime += rabbitMock / rabbitStep

        if(rabbitPosition >= distance){
            rabbitEnd= rabbitForwardTime + rabbitBackwardTime -(rabbitPosition-distance)/rabbitStep

            
        }
    }

    const timeDifference = turtleEnd - rabbitEnd;

    if(timeDifference > 0) {
        console.log(`rabbit can lazy ${Math.floor(timeDifference)}`)
    }else{
        console.log(`rabbit can't lazy, but still win`)
    }

    console.log(`turtle complete time : ${turtleEnd.toFixed(2)}`);
    console.log(`rabbit complete time : ${rabbitEnd.toFixed(2)}`);

}

main()
