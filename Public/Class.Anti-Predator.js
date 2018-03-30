class AntiPredator {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
//Հարցնել, թե արդո՞ք պետք է փոխել var y = this.directions[i][1]; -ի "1"-ը։
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    killPredator() {
        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 0;


            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 3);
                }
            }

        }
    }


}