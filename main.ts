input.onButtonPressed(Button.A, function () {
    record.setMicGain(record.AudioLevels.Medium)
    record.setSampleRate(20000, record.AudioSampleRateScope.Recording)
    record.startRecording(record.BlockingState.Blocking)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    input.setSoundThreshold(SoundThreshold.Loud, sound)
})
input.onGesture(Gesture.TiltLeft, function () {
    sound += -50
    basic.showNumber(sound)
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(20000, record.AudioSampleRateScope.Playback)
    record.playAudio(record.BlockingState.Blocking)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    sound += 50
    basic.showNumber(sound)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(sound)
})
let sound = 0
sound = 128
input.setSoundThreshold(SoundThreshold.Loud, 128)
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(2000)
basic.clearScreen()
