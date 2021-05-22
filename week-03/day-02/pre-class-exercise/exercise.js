
var ageInput = document.getElementById('age-input')
var submitButton = document.getElementById('submit-button')

var inputedAge


function ageInputHandler(event) {
    inputedAge = Number(event.target.value)
}

ageInput.addEventListener('input', ageInputHandler)
// ageInput.addEventListener('input', (event) => {
//     event.target.value
// })

function submitButtonHandler() {
    if (inputedAge >= 18) {
        alert("You can vote")
    } else {
        alert("You can't vote")
    }
}
submitButton.addEventListener('click', submitButtonHandler)