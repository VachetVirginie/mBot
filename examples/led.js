var five = require("johnny-five");
var board = new five.Board({ port: '/dev/ttyUSB0' });
var pixel = require("node-pixel");


board.on("ready", function() {
    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });
    button.on("press", function() {
        let strip = new pixel.Strip({
            data: 13,
            length: 2,
            board: this,
            controller: "FIRMATA",
        });
        strip.on("ready", function() {
            var colors = ["#FF9999"];
            var current_colors = 1;
            var current_pos = 1;
            strip.pixel(current_pos).color(colors[current_colors]);

        })
        strip.show();

    });
});