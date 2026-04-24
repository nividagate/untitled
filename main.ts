input.onButtonPressed(Button.A, function () {
    if (led.point(4, 4)) {
        basic.showIcon(IconNames.Happy)
    } else if (led.point(1, 1)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
	
})
