var five = require("johnny-five");
var board = new five.Board({ port: '/dev/ttyUSB1' });

var max_speed_l = 1024;
var max_speed_r = 1024;
var l_motor = r_motor = null;

stdin.on('click', function(chunk, key) {

    switch (key.name) {
        case "up":
            l_motor.reverse(max_speed_l);
            r_motor.forward(max_speed_r);
            break;
    }
});