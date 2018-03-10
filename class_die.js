die() {
    matrix[this.y][this.x] = 0;
    for (var i in eatArr) {
        if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
            eatArr.splice(i, 1);
        }
    }
}