let maxNumber = 0
let currentNumber = 0
let canShake = false
canShake = true
currentNumber = 6
maxNumber = 99
// toto zmensuje cislo kdyz zmacknu A
input.onButtonPressed(Button.A, function () {
    if (maxNumber > 1) {
        maxNumber += -1
        whaleysans.showNumber(maxNumber)
    }
})
// toto zvetsuje cislo kdyz zmacknu B
input.onButtonPressed(Button.B, function () {
    if (maxNumber < 99) {
        maxNumber += 1
        whaleysans.showNumber(maxNumber)
    }
})

input.onGesture(Gesture.Shake, function () {
    generateRandomNumber()
})
// toto se stara ze kdyz zmacknu microbit tlacitko, tak to dela ty vecicky dole
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // povoluje shakovani
    canShake = true
    // vymaze vsechno na displeji
    basic.clearScreen()
    // prehraje zvuk
    music.playTone(262, music.beat(BeatFraction.Whole))
})
// tato funkce se stara o to ze kdyz s tim zashakuju tak to vytvori number (nebo nase oblibene cislo)
function generateRandomNumber() {
    if (canShake) {
        canShake = false
        currentNumber = Math.floor(Math.random() * maxNumber) + 1
        whaleysans.showNumber(currentNumber)
        // toto prehraje zvuk kdyz s tim zashakuju
        music.playTone(350, music.beat(BeatFraction.Whole))
    }
}

