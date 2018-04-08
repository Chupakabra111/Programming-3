var matrix = []
var side = 40;
var humanArr = [];
var grassArr = [];
var vegetarianArr = [];
var floodArr = [];
var predatorArr = [];
var antipredatorArr = [];
var stoneArr = [];
var floodCount = 0;
var heigh = 60;
var length = 60;
var humanCount = 100;
var grassCount = 600;
var vegetarianCount = 100;
var predatorCount = 200;
var antipredatorCount = 20;
var stoneCount = 50;
var number = [1, 2, 3];
var weathertype;
var grassColor = [""];
var floodColor = ["#1D94B7"]
var vegetarianColor = ["orange"];
var predatorColor = ["black"];
var antipredatorColor = ["red"];
var humanColor = ["yellow"];
var stoneColor = ["blue"];
var backgroundColor = ["#acacac"];
var characterGander = [1, 2];
var a = 666;
var statistics = {
    "timestamp": "",
    "vegetarianeatcount": 0,
    "predatoreatcount": 0,
    "humaneatcouny": 0,
    "grassmyl": 0,
    "vegetarianmul": 0,
    "predatormul": 0,
    "humanmul": 0,
}


function setup() {
    weathertype = document.getElementById("WeatherType");
    for (var i = 0; i < heigh; i++) {
        matrix.push([]);
        for (var j = 0; j < length; j++) {
            matrix[i][j] = 0;
        }
    }
    var c = 0;
    while (c < grassCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
            c++;
        }
    }
    var c = 0;
    while (c < vegetarianCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
            c++;
        }
    }
    var c = 0;
    while (c < predatorCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
            c++;
        }
    }
    var c = 0;
    while (c < antipredatorCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
            c++;
        }
    }
    var c = 0;
    while (c < humanCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
            c++;
        }
    }
    var c = 0;
    while (c < stoneCount) {
        var x = Math.floor(random(0, length));
        var y = Math.floor(random(0, heigh));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
            c++;
        }
    }
    noStroke()
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background(backgroundColor[0]);


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var vegetarian = new Vegetarian(j, i, 2);
                vegetarianArr.push(vegetarian);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                grassArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var predator = new Predator(j, i, 3)
                predatorArr.push(predator);
            } else if (matrix[i][j] == 4) {
                var antipredator = new AntiPredator(j, i, 4)
                antipredatorArr.push(antipredator);
            } else if (matrix[i][j] == 5) {
                var stone = new Stone(j, i, 5)
                stoneArr.push(stone);
            } else if (matrix[i][j] == 6) {
                var human = new Human(j, i, 6)
                humanArr.push(human);
            } else if (matrix[i][j] == 7) {
                var flood = new Flood(j, i, 7)
                floodArr.push(flood);
            }
        }
    }
}
//Եթե նորից Error ցույց տա, պետք ա ստուգել։
function draw() {
    var b = random(0, 1000);
    console.log(b);
    background(backgroundColor[0]);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill(grassColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill(vegetarianColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill(predatorColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill(backgroundColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill(antipredatorColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill(stoneColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 6) {
                fill(humanColor[0]);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 7) {
                fill(floodColor[0]);
                rect(j * side, i * side, side, side);
            }
        }
    }

    if (frameCount % 5 == 0) {
        var weather = random(number);
    }

    if (weather == 1) {
        var wth = "snow";
        weathertype.innerHTML = wth;
        grassColor[0] = "white";
    }
    if (weather == 2) {
        var wth = "normal";
        weathertype.innerHTML = wth;
        grassColor[0] = "green";
    }
    if (weather == 3) {
        var wth = "rain";
        weathertype.innerHTML = wth;
        grassColor[0] = '#4E7614';
    }


    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in vegetarianArr) {
        vegetarianArr[i].eat();
        vegetarianArr[i].move();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
        predatorArr[i].move();
    }
    for (var i in antipredatorArr) {
        antipredatorArr[i].killPredator();
        antipredatorArr[i].move();
    }
    for (var i in humanArr) {
        humanArr[i].eat();
        humanArr[i].move();
    }
    //Ունիկալ իրադարձություն. Չմոռամաս փոխես 600, 670-ը:

    if (b >= a && a >= b - 1) {
        alert("OOPS... FLOOD!!!");
        predatorCount = 0;
        predatorArr = [];
        stoneCount = 0;
        stoneArr = [];
        vegetarianCount = 0;
        vegetarianArr = [];
        humanCount = 0;
        humanArr = [];
        antipredatorArr = 0;
        antipredatorArr = [];
        grassCount = 0;
        grassArr = [];
        floodCount = 3600;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 7;
            }
        }
        
    }

}

if (floodCount >=3000){
    noLoop(draw);
}

function changeView(stat) {
    var vegetarianeatcount = document.getElementById("vegetarianeatcount");
    var predatoreatcount = document.getElementById("predatoreatcount");
    var humaneatcount = document.getElementById("humaneatcount");
    var grassmul = document.getElementById("grassmul");
    var vegetarianmul = document.getElementById("vegetarianmul");
    var predatormul = document.getElementById("predatormul");
    var humanmul = document.getElementById("humanmul");
    vegetarianeatcount.innerHTML = stat.vegetarianeatcount;
    predatoreatcount.innerHTML = stat.predatoreatcount;
    humaneatcount.innerHTML = stat.humaneatcount;
    grassmul.innerHTML = stat.grassmul;
    vegetarianmul.innerHTML = stat.vegetarianmul;
    predatormul.innerHTML = stat.predatormul;
    humanmul.innerHTML = stat.humanmul;
}
