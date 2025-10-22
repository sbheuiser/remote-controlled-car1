radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnleft()
        cuteBot.stopcar()
    } else if (false) {
        cuteBot.turnright()
        cuteBot.stopcar()
    } else if (receivedNumber == 3) {
        cuteBot.forward()
        cuteBot.stopcar()
    } else if (receivedNumber == 4) {
        cuteBot.stopcar()
    } else {
    	
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
