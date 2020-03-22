violaLevel = 2
maxLevel = 1

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
    $("#level").html(maxLevel)
})

$("#viola").click(function() {
    console.log("viola")
    $("#viola").addClass("active")
    $("#max").removeClass("active")
    $("#level").html(violaLevel)
})