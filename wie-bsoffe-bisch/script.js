localStorage.violaStdDrinks = 0
localStorage.maxStdDrinks = 0

sojuStdDrinks = 0.415555556
wiiStdDrinks  = 1.5
beerStdDrinks = 1.6
shotStdDrinks = 1
drinkStdDrinks = 1.7
mode = "viola"

$("#viola").addClass("active")
$("#select-drink").hide()


messages = [
    "Du bisch nüchtern, gurl", // 1
    "immerno fasch nüchtern", // 2
    "trink 2 shots, oder 1 bier", // 3
    "danke bro", // 4
    "schere stei papier um en shot", // 5
    "mach e insta story!", // 6
    "mach es verruckts 1 zu 10.", // 7
    "zieh dich us! 😇", // 8
    "leck bisch bsoffe", // 9
    "EZ ESKALIERTS" // 10
]

$("#max").click(function() {
    console.log("max")
    $("#max").addClass("active")
    $("#viola").removeClass("active")
    mode="max"
    setLevel()
})

$("#viola").click(function() {
    console.log("viola")
    $("#viola").addClass("active")
    $("#max").removeClass("active")
    mode="viola"
    setLevel()
})

$("#btn").click(function() {
    console.log("hi")
    $("#select-drink").show()
    $("#main").hide()
    $("#btn").hide()
})

function goBack() {
    $("#select-drink").hide()
    $("#main").show()
    $("#btn").show()
    setLevel()
}

function setLevel() {
    // calculate
    // 105 kg = 231 lbs
    // 45 kg = 100 lbs
    bac = 0
    if(mode === "viola") bac = calculateBAC("female", 100, localStorage.violaStdDrinks, 2)
    else if(mode === "max") bac = calculateBAC("male", 231, localStorage.maxStdDrinks, 2)

    maxBac = 0.3
    level = (bac / maxBac) * 9 + 1
    level = Math.round(level)
    $("#level").html(level)
}

function calculateBAC(gender, weight, drinkCount, timeElapsed) {
    var genderConst;
    if (gender === "female") {
        genderConst = 0.55;
    } else if (gender === "male") {
        genderConst = 0.68;
    } else {
        genderConst = 0.62;
    }
    
    var gramsOfAlcohol = drinkCount * 14;
    var bac = (gramsOfAlcohol / (weight * genderConst)) * 100;
    bac = bac - (timeElapsed * 0.015);
    return bac
}

function add(drinks) {
    if(mode === "viola") localStorage.violaStdDrinks += drinks
    else if(mode === "max") localStorage.maxStdDrinks += drinks
}

$("#soju").click(function()  { add(sojuStdDrinks); goBack() })
$("#wii").click(function()   { add(wiiStdDrinks); goBack() })
$("#bier").click(function()  { add(beerStdDrinks); goBack() })
$("#shot").click(function()  { add(shotStdDrinks); goBack() })
$("#drink").click(function() { add(drinkStdDrinks); goBack() })

setLevel()