
function Food() {

    var cols = Math.floor(width/sScale);
    var rows = Math.floor(height/sScale);

    this.x = Math.floor(random(cols));
    this.y = Math.floor(random(rows));

    this.draw = function() {
        fill(255, 0, 0);
        rect(this.x*sScale, this.y*sScale, sScale, sScale);
    }

    this.newLocation = function() {
        var c = Math.floor(width/sScale);
        var r = Math.floor(height/sScale);

        this.x = Math.floor(random(c));
        this.y = Math.floor(random(r));
    }

}
