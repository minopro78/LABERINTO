let izquierda = false
basic.showLeds(`
    . . # . .
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    `)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        izquierda = Math.randomBoolean()
        if (izquierda == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(400)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.pause(400)
        }
        if (izquierda == false) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(400)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.pause(400)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
