class Predator {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 30;

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

        if (cord) {
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }



    eat() {

        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);

        if (cord) {

            this.multiply++;
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in vegetarianArr) {
                if (x == vegetarianArr[i].x && y == vegetarianArr[i].y) {
                    vegetarianArr.splice(i, 1);
                    break;
                }
            }
            statistics.predatoreatcount++;
            changeView(statistics);
//հարցնել 90 և 91 տողերին գրված ծրագրի նշանակությունը։
            if (this.multiply == 10) {
                this.multiply = 0;
            }

        }

        else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
        }
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var newPredator = new Predator(x, y, this.index);
            predatorArr.push(newPredator);

            matrix[y][x] = 3;
            this.multiply = 0;
            statistics.humanmul++;
            changeView(statistics);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 3);
            }
        }
    }

}