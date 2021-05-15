var addPetButton = document.getElementById("addPet")
console.log(addPetButton)

// functions!
// function sayHello() {
//     console.log("hi")
//     return "hi"
// }

// console.log(sayHello)
// console.log(sayHello())

// function makeGreetingMessage(name) {
//     var baseMessage = "Well hello there "
//     var fullMessage = baseMessage + name
//     return fullMessage
// }

// var greetingForMe = makeGreetingMessage("Zach")
// greetingForMe = makeGreetingMessage(true)
// console.log(greetingForMe)
var baseMessage = "A different message"

console.log(baseMessage)

function makeGreetingMessage(name, age) {
    var baseMessage = "Well hello there "
    console.log(baseMessage)
    var fullMessage = baseMessage + name + ". You are " + age + " years old."
    return fullMessage
}

console.log(baseMessage)

var greetingForMe = makeGreetingMessage("Zach", 5)
console.log(greetingForMe)

console.log(baseMessage)

// three functions
// var token = ""
// function signUpForSubscription(name, email, address, pets)
// function cancelSubscription(email)
// function updateSubscription(pets)