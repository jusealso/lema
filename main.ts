music.playMelody("C5 B A G F E D C ", 120)
basic.showLeds(`
    . # # # .
    # . # . #
    # # # # #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    music.playMelody("E D G F B A C5 B ", 120)
    basic.showString("Celebrando tus 25 años!!")
    basic.pause(1000)
    basic.showString("Esperando muchos más!!")
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        basic.showString("Feliz aniversario Informática ")
    }
    basic.showIcon(IconNames.Heart)
})
