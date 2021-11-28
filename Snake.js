function Snake() {

    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.canMove = true;

    this.update = function() {

        if (this.total == this.tail.length) {

            for (var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = new Snake();
        this.tail[this.total-1].setPosition(this.x, this.y);


        this.x += this.xSpeed*sScale;
        this.y += this.ySpeed*sScale;

        this.x = constrain(this.x, 0-sScale, width);
        this.y = constrain(this.y, 0-sScale, height);

    }

    this.death = function() {

        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
                return true;
            }
        }

        if (this.x > width-sScale || this.x < 0) {
            return true;
        }
        if (this.y > height-sScale || this.y < 0) {
            return true;
        }
        //console.log(this.x);

        return false;

    }

    this.setPosition = function(setX, setY) {
        this.x = setX;
        this.y = setY;
    }

    this.eat = function(food) {
        var d = dist(this.x, this.y, food.x*sScale, food.y*sScale);
        if (d < 2) {
            this.total++;
            // console.log(this.total);
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, sScale, sScale);
        }

        // for (var i = 0; i < this.total; i++) {
        //     rect(this.tail[i].x, this.tail[i].y, sScale, sScale);
        // }

        rect(this.x, this.y, sScale, sScale);



    }

    this.dir = function(x, y, direction) {

        var lastMove = lastDir.pop();
        switch(direction) {

            case "up":
                if (lastMove == "down") {
                    this.canMove = false;
                } else {
                    this.canMove = true;
                }
                break;

            case "down":
                if (lastMove == "up") {
                    this.canMove = false;
                } else {
                    this.canMove = true;
                }
                break;
            case "left":
                if (lastMove == "right") {
                    this.canMove = false;
                } else {
                    this.canMove = true;
                }
                break;
            case "right":
                if (lastMove == "left") {
                    this.canMove = false;
                } else {
                    this.canMove = true;
                }
                break;

        }

        if (this.canMove) {
            this.xSpeed = x;
            this.ySpeed = y;
        }
    }

}
