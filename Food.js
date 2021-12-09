
function Food() {

    var cols = Math.floor(gameWidth/sScale);
    var rows = Math.floor(gameHeight/sScale);

    this.x = Math.floor(random(cols));
    this.y = Math.floor(random(rows));

    this.draw = function() {
        fill(255, 0, 0);
        rect((this.x*sScale)+offset, (this.y*sScale)+offset, sScale, sScale);
    }

    this.newLocation = function() {
        var c = Math.floor(gameWidth/sScale);
        var r = Math.floor(gameHeight/sScale);

        this.x = Math.floor(random(c));
        this.y = Math.floor(random(r));
    }

}
