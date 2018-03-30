var matrix = []
var side = 40;
var humanArr = [];
var grassArr = [];
var vegetarianArr = [];
var predatorArr = [];
var antipredatorArr = [];
var stoneArr = [];
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


function setup() {
    weathertype = document.getElementById("WheatherType");
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
    background('#acacac');


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
            }
        }
    }
}
//Եթե նորից Error ցույց տա, պետք ա ստուգել։
function draw() {
    if (frameCount % 5 == 0) {
        var weather = random(number);
    }

    if (weather == 1) {
        var wth = "snow";
        weathertype.innerHTML = wth;
    }
    if (weather == 2) {
        var wth = "normal";
        weathertype.innerHTML = wth;
    }
    if (weather == 3) {
        var wth = "rain";
        weathertype.innerHTML = wth;
    }

    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("black");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("blue");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 6) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
        }
    }


    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in vegetarianArr) {
        vegetarianArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in antipredatorArr) {
        antipredatorArr[i].killPredator();
    }
    for (var i in humanArr) {
        humanArr[i].eat();
    }
}