input.onButtonPressed(Button.A, function () {
    jobs += 1
    if (jobs >= 3) {
        jobs = 0
    }
})
input.onButtonPressed(Button.B, function () {
    jobs = 0
})
let jobs = 0
jobs = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    while (jobs == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
    }
    while (jobs == 1) {
        if (input.compassHeading() >= 337 || input.compassHeading() < 23) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 23 && input.compassHeading() < 68) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 68 && input.compassHeading() < 113) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 113 && input.compassHeading() < 158) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else if (input.compassHeading() >= 158 && input.compassHeading() < 203) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (input.compassHeading() >= 203 && input.compassHeading() < 248) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . . #
                `)
        } else if (input.compassHeading() >= 248 && input.compassHeading() < 293) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 293 && input.compassHeading() < 338) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(200)
    }
    if (jobs == 2) {
        while (Kitronik_Move_Motor.measure() > 15) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . # . # .
                `)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
            basic.pause(200)
        }
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
        basic.pause(500)
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 30)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . # . .
                . # . # #
                # . . . .
                . # . # #
                . . # . .
                `)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 40)
        } else {
            basic.showLeds(`
                . . # . .
                # # . # .
                . . . . #
                # # . # .
                . . # . .
                `)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 40)
        }
        basic.pause(500)
        Kitronik_Move_Motor.stop()
        basic.pause(500)
    }
})
