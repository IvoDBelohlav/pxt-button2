
let pocet = 0;
input.onGesture(Gesture.Shake, function () {
    let cislo = Math.randomRange(1, 6);
    whaleysans.showNumber(cislo);

    if (cislo == 6) {
        pocet += 1;
    }
    if (pocet == 3) {
        music.playTone(Note.D, music.beat(BeatFraction.Whole));
        basic.showNumber(cislo)
    }
});
