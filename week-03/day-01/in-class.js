

// boolean, conditionals, branching logic

// '1' == 1
// true == 'true'

// "I am this age: " + 21
// "I am this age: " + "21"
// "I am this age: 21"

// var age = 21

// if (age >= 21) {
//     console.log("you can drink")
// } else {
//     console.log("you can not drink")
// }

var inputName = ""

var nameInput = document.getElementById('name')
nameInput.addEventListener('input', (e) => {
    inputName = e.target.value
})

var submitButton = document.getElementById('submit')
submitButton.addEventListener('click', () => {
    if (!inputName) {
        // if (inputName === "") {
        // alert them they messed up
        alert('Please input your name')
    } else {
        // go ahead and run the program
    }
})

