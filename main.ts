radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnleft()
        cuteBot.motors(0, 30)
    } else if (receivedNumber == 2) {
        cuteBot.turnright()
        cuteBot.motors(30, 0)
    } else if (receivedNumber == 3) {
        cuteBot.forward()
        cuteBot.motors(30, 30)
    } else if (receivedNumber == 4) {
    	
    } else {
        cuteBot.stopcar()
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
