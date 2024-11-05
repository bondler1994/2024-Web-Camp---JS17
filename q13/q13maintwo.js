// ### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?


// 每五秒會鬧 20 * 5 - 1 = 99 公尺 每五秒 99 公尺
// 再來總距離 1000 / 99 = 10.1/ 
// 因為有5週期 5 * 10.1 = 50.5 四捨五入 51 兔子完成時間
// 烏龜 1000 / 0.28 = 3571.4 秒才能完成比賽
// 所以要求兔子可以懶多久 3571 - 51 = 3520

class Animal {
    constructor(speed) {
        this.speed = speed;
        this.position = 0;
    }

    runOneSecond() {
        this.position += this.speed
    }

    getRetreatMeter() {
        this.position - this.fiveSecondretreatOneMeter
    }
    
    getPosition(){
        return this.position
    }

}

class Rabbit extends Animal {
    constructor(speed) {
        this.name = "Rabbit";
        this.speed = speed;
        this.fiveSecondretreatOneMeter = 1;
        this.mockingEachAnimalForFIveSecond = 5;
    }
    

}

class Turtle extends Animal {
    constructor(speed) {
        this.name = "turtle";
        this.speed = speed;
        this.fiveSecondretreatOneMeter = 0;
        this.mockingEachAnimalForFIveSecond = 0;
    }
}