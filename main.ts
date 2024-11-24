// Nazvy funkci prosim neberte serizone
// let maxNumber = 0
let jardaklatil = 0
// let currentNumber = 0
let opicka = 0
// let canShake = false
let indickydeti = false
indickydeti = true
opicka = 6
jardaklatil = 99
// toto zmensuje cislo kdyz zmacknu A
input.onButtonPressed(Button.A, function () {
    if (jardaklatil > 1) {
        jardaklatil += -1
        whaleysans.showNumber(jardaklatil)
    }
})
// toto zvetsuje cislo kdyz zmacknu B
input.onButtonPressed(Button.B, function () {
    if (jardaklatil < 99) {
        jardaklatil += 1
        whaleysans.showNumber(jardaklatil)
    }
})

input.onGesture(Gesture.Shake, function () {
    generateRandomNumber()
})
// toto se stara ze kdyz zmacknu microbit tlacitko, tak to dela ty vecicky dole
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // povoluje shakovani
    indickydeti = true
    // vymaze vsechno na displeji
    basic.clearScreen()
    // prehraje zvuk
    music.playTone(262, music.beat(BeatFraction.Whole))
})
// tato funkce se stara o to ze kdyz s tim zashakuju tak to vytvori number (nebo nase oblibene cislo)
function generateRandomNumber() {
    if (indickydeti) {
        indickydeti = false
        opicka = Math.floor(Math.random() * jardaklatil) + 1
        whaleysans.showNumber(opicka)
        // toto prehraje zvuk kdyz s tim zashakuju
        music.playTone(350, music.beat(BeatFraction.Whole))
    }
}

