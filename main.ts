radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index <= 5; index++) {
            cuteBot.turnleft()
            cuteBot.motors(0, 30)
        }
    } else if (receivedNumber == 2) {
        for (let index = 0; index <= 5; index++) {
            cuteBot.turnright()
            cuteBot.motors(30, 0)
        }
    } else if (receivedNumber == 3) {
        for (let index = 0; index <= 5; index++) {
            cuteBot.forward()
            cuteBot.motors(30, 30)
        }
    } else if (receivedNumber == 4) {
        cuteBot.stopcar()
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
