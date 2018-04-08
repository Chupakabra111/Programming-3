class Human {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 100;
        this.multiply = 0;
    //Տանը եթե չհասցնես անպայման կանես սեռի ծրագիրը!!!:
        this.gender = random(0, 1);
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


    mul() {
        this.multiply++;
        if (this.multiply == 50) {
            statistics.humanmul++;
            changeView(statistics);
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var kid = new Human(x, y, this.index);
                humanArr.push(kid);

                matrix[y][x] = 6;
                this.multiply = 0;
            }
        }
    }


    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 6);
            }

        }
    }


    eat() {
        var emptyCord = this.getDirections(1);
        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
//Հարցնել, թե արդո՞ք պետք է փոխել var y = cord[1]; -ի "1"-ը։
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
            statistics.humaneatcount++;
            changeView(statistics);


        var emptyCord = this.getDirections(2);
        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

             for (var i in vegetarianArr) {
                    if (x == vegetarianArr[i].x && y == vegetarianArr[i].y) {
                        vegetarianArr.splice(i, 2);
                    }
                }
            }
            statistics.humaneatcount++;
            changeView(statistics);


        var emptyCord = this.getDirections(3);
        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 3);
                }
            }
            statistics.humaneatcount++;
            changeView(statistics);
        }
        var emptyCord = this.getDirections(2);
        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;  
                for (var i in antipredatorArr) {
                    if (x == antipredatorArr[i].x && y == antipredatorArr[i].y) {
                        antipredatorArr.splice(i, 4);   
                    }
                }
                statistics.humaneatcount++;
                changeView(statistics);
 }
       
   
//հարցնել 167, 168 և 169 տողերին գրված ծրագրի նշանակությունը։
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        else {
            this.move();
            this.energy--;
            if (this.energy < 10) {
                this.die();
            }
        }

}
}


    