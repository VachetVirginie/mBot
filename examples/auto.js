var five = require("johnny-five");
var board = new five.Board({ port: '/dev/ttyUSB1' });

var max_speed_l = 1024;
var max_speed_r = 1024;
var l_motor = r_motor = null;


board.on("ready", function(err) {
    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });
    button.on("press", function() {

        console.log("start");

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });
        l_motor.reverse(max_speed_l);
        r_motor.forward(max_speed_r);


        // console.info("Board connected. Robot set up. LRUD to control");

        setTimeout(function() {
            l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
            r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });
            l_motor.forward(max_speed_l);
            r_motor.reverse(max_speed_r);

        }, 2000)
        setTimeout(function() {
            l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
            r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });
            l_motor.reverse(max_speed_l);
            r_motor.forward(max_speed_r);

        }, 2300)
        setTimeout(function() {
            l_motor.forward(max_speed_l);
            r_motor.forward(max_speed_r);

        }, 3000)
        setTimeout(function() {

            l_motor.stop();
            r_motor.stop();

        }, 7000)

    });
    if (err) {
        console.log(err);
        return;
    }
});


console.info("Board connected. Robot set up. LRUD to control");