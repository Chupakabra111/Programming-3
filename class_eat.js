eat() {
    var emptyCord = this.getDirections(1);
    var cord = random(emptyCord);

    if (cord) {
        this.multiply++;

        var x = cord[0];
        var y = cord[1];

        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;

        this.x = x;
        this.y = y;


        for (var i in xotArr) {
            if (x == xotArr[i].x && y == xotArr[i].y) {
                xotArr.splice(i, 1);
            }
        }
        if (this.multiply == 10) {
            this.mul()
            this.multiply = 0;
        }

    } else {
        this.move();
        this.energy--;
        if (this.energy < 3) {
            this.die();
            //this.energy = 10;
        }
    }
}