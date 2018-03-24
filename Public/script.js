var matrix = []
var side = 40;
var mardArr = [];
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var gishatichspanoxArr = [];
var eatgrassedandaxacnoxArr = [];
var bardz = 100;
var layn = 100;
var mardCount = 100;
var grassCount= 600;
var eatGrassCount = 100;
var gishatichCount = 200;
var gishatichspanoxCount = 300;
var eatgrassdandaxacnoxCount = 100;



function setup() {
	for (var i= 0; i<bardz; i++){
		matrix.push([]);
		for (var j = 0; j< layn; j++){
			matrix[i][j] = 0;
		}
	}
	var c = 0;
	while (c<grassCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 1;
			c++;
		}
	}
	var c = 0;
	while (c<eatGrassCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 2;
			c++;
		}
	}
	var c = 0;
	while (c<gishatichCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 3;
			c++;
		}
	}
	var c = 0;
	while (c<gishatichspanoxCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 4;
			c++;
		}
	}
    var c = 0;
	while (c<mardCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 6;
			c++;
		}
	}
	var c = 0;
	while (c<eatgrassdandaxacnoxCount) {
		var x = Math.floor(random(0, layn));
		var y = Math.floor(random(0, bardz));
		if (matrix[x][y]==0) {
			matrix[x][y] = 5;
			c++;
		}
	}
    noStroke()
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } 
            else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3)
                gishatichArr.push(gishatich);
            }
            else if (matrix[i][j] == 4) {
                var gishatichspanox = new Gishatichispanox(j, i, 4)
                gishatichspanoxArr.push(gishatichspanox);
            } 
            else if (matrix[i][j] == 5) {
                var eatspanox = new Eatgrassenergyhanox(j, i, 5)
                eatgrassedandaxacnoxArr.push(eatspanox);
            }  
            else if (matrix[i][j] == 6) {
                var mard = new Mard(j, i, 6)
                mardArr.push(mard);
            }
        }
    }
}


function draw() {
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
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 4) {
                fill("black");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("blue");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('#9ACD32');
                rect(j * side, i * side, side, side);
            } 
        }
    }


  for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in gishatichspanoxArr) {
        gishatichspanoxArr[i].killGishatich();
    }
    for (var i in eatgrassedandaxacnoxArr) {
        eatgrassedandaxacnoxArr[i].energyhanel();
    }
    for (var i in mardArr) {
        mardArr[i].eat();
    }
}



  

/*
var bardz = 30;
var layn = 100;
var grassCount= 120;
var eatGrassCount = 10;
for (var i = 0; i<bardz; i++)
{
    matrix.push([]);
    for (var j = 0; j<layn; j++0{
        matrix[i].push(0);
    }
}
function setup() {
    for (var i=0; i,grassCount; i++){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[x][y] = 1;
    }
}*/

