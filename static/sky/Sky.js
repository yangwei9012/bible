function Sky(t) {
    this.init = function() {
        this.canvas = document.getElementById(t.id);
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
            this.stars = [];
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            $(".banner-bg").height(this.canvas.height - 80);
            $(".banner-container").css("padding-top", "142px");
            (".wheel-part").css("top", "0");
            this.centerX = this.canvas.width / 2 + 358;
            this.centerY = this.canvas.height / 2;
            this.populateSky();
            return true;
        }
        return false;
    },
    this.random = function(t, a, i) {
        return parseFloat(Math.min(t + Math.random() * (a - t), a).toFixed(i || 4));
    },
    this.randomInt = function(t, a) {
        var i = t + Math.random() * (a + 1 - t);
        return i = Math.floor(i);
    },

    this.randomDistribution = function() {
        return arguments[Math.floor(Math.random() * arguments.length)]
    },

    this.toRad = function(t) {
        return t * (Math.PI / 180)
    },
    this.populateSky = function() {
        var a = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2))),
            i = Math.floor(this.canvas.width * t.popularity);
        this.stars = [];
        for (var e = 0; i > e; e++) {
            var n = {};
            n.color = [255, 255, 255];
            n.angle = Math.ceil(360 * Math.random());
            n.opacity = this.random(0.15, 0.85);
            n.trailLength = 0;
            n.width = this.randomDistribution(3, 2, 2, 2, 2, 1);
            n.length = n.width / 2000;
            n.radius = this.randomDistribution(
                this.randomInt(0, a),
                this.randomInt(25, a),
                this.randomInt(45, a),
                this.randomInt(50, a)
            );
            n.speed = Math.abs((20 / n.radius + Math.random()) / 10);
            this.stars.push(n);
        }
    },
    this.clearCtx = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    this.drawStars = function() {
        this.clearCtx();
        for (var a = 0; a < this.stars.length; a++) {
            var i = this.stars[a];
            i.angleRad = this.toRad(i.angle);
            i.angleRadEnd = i.angleRad + i.length;
            i.angleRadStart = i.angleRadStart ? i.angleRadStart : i.angleRad;
            this.freezed ? i.trailLength > t.maxTrailLength && (i.angleRadStart = i.angleRadEnd - i.trailLength) : i.angleRadStart = i.angleRad;
            i.trailLength = i.angleRadEnd - i.angleRadStart;
            this.ctx.beginPath();
            this.ctx.strokeStyle = "rgba(" + i.color[0] + "," + i.color[1] + "," + i.color[2] + "," + Math.max(i.opacity, 0.1) + ")";
            this.ctx.lineCap = "round";
            this.ctx.lineWidth = i.width;
            this.ctx.arc(this.centerX, this.centerY, i.radius, i.angleRadStart, i.angleRadEnd, !1);
            this.ctx.stroke();
            i.angle += Math.min(t.speedMax, Math.max(i.speed, t.speedMin));
            360 == i.angle && (i.angle = 0);
        }
    },
    this.animateSky = function() {},
    this.changeState = function(flag) {
        if (flag) {
            this.freezed = true
        } else {
            this.freezed = false;
            this.init()
        }
    },
    this.playAnimate = function() {
        window.requestAnimationFrame = window.requestAnimationFrame
                                        || window.mozRequestAnimationFrame
                                        || window.webkitRequestAnimationFrame
                                        || window.msRequestAnimationFrame;

        function t() {
            a = Date.now();
            i = a - s;
            i > h && (s = a - i % h, e.drawStars());
            if (requestAnimationFrame == undefined) {
                return;
            } else {
                requestAnimationFrame(t);
            }
        }
        var a, i, e = this,
            n = 351,
            s = Date.now(),
            h = 1000 / n;
        t();
    },
    this.freezed = false;
    this.init();
    var self = this;
    window.onresize = function() {
        self.init()
    }
}

function initSky() {
    var canvas = new Sky({
        id: "sky-canvas",
        popularity: 0.6,
        speedMin: 0.05,
        speedMax: 0.08,
        maxTrailLength: 0.3
    });
    canvas.drawStars();
    canvas.playAnimate();
    $(".hover-part").on("mouseover", function() {
        canvas.changeState(true)
    });
    $(".hover-part").on("mouseout", function() {
        canvas.changeState(false)
    })
}
