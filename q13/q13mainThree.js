// ### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

class Runner  {
    constructor(name, speed, mock, mockPeriod){
        this.name = name;
        this.speed = speed;
        this.mock = mock;
        this.mockPeriod = mockPeriod
    }
}

const rabbit = new Runner {'rabbit', 20,1,5}
const turtle = new Runner {'turtle', 0.28,0,1}

const runnerList = [rabbit,turtle];

