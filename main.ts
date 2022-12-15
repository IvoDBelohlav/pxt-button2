let number1 = randint(1, 6 )
let number2 = randint(1, 6)
let number3 = randint(1, 6)

input.onGesture(Gesture.Shake, function() {
    while (number1 == 6, number2 == 6, number3 == 6 ){
        whaleysans.showNumber(number1)
        basic.pause(1000)
        whaleysans.showNumber(number2)
        basic.pause(1000)
        whaleysans.showNumber(number3)
        basic.pause(1000)
        
    }
    if(true){
        music.playTone(Note.D, music.beat(BeatFraction.Whole))
    }
})
