// Adapted from Johnny Five Example for JS Conf CN nodebots session.
// Button class doesn't appear to work so this will do it for what you need
// Potentially just emit an event if you need it.

var five = require("johnny-five");
var pixel = require("node-pixel");
var board = new five.Board({ port: '/dev/ttyUSB0' });

board.on("ready", function() {

            // Create a new `button` hardware instance.
            // This example allows the button module to
            // create a completely default instance
            console.log("Board ready");

            var button = new five.Button({
                pin: "A7",
                controller: "TINKERKIT",
                invert: true
            });

            button.on("press", function() {
                console.log("pressed");
                strip = new pixel.Strip({
                    data: 13,
                    length: 2,
                    board: this,
                    controller: "FIRMATA",
                });

                strip.on("ready", function() {

                    console.log("Strip ready, let's go");
                    console.log("Press Ctrl + c twice to quit.");

                    var colors = ["#440000", "#000044"];
                    var current_colors = [0, 1];
                    var current_pos = [0, 1];
                    var blinker = setInterval(function() {

                        strip.color("#000"); // blanks it out
                        for (var i = 0; i < current_pos.length; i++) {
                            if (++current_pos[i] >= strip.stripLength()) {
                                current_pos[i] = 0;
                                if (++current_colors[i] >= colors.length) current_colors[i] = 0;
                            }
                            strip.pixel(current_pos[i]).color(colors[current_colors[i]]);
                        }
                    });

                    button.on("release", function() {
                        console.log("released");
                    });

                    button.on("hold", function() {
                        console.log("held");
                    });

                });
            });