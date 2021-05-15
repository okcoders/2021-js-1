
// grab html elements by id
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var addressInput = document.getElementById("address")
var addPetButton = document.getElementById("addPet")
var submitButton = document.getElementById("submit")

// declaring global variables, to store customer information
var customerName = ""
var email = ""
var address = ""

// if someone types in the name input, update my global variables with that information
function nameInputHandler(event) {
    customerName = event.target.value
}
nameInput.addEventListener('input', nameInputHandler)

function emailInputHandler(event) {
    email = event.target.value
}
emailInput.addEventListener('input', emailInputHandler)

function addressInputHandler(event) {
    address = event.target.value
}
addressInput.addEventListener('input', addressInputHandler)

// what to do when they hit submit
function submitHandler() {
    console.log(customerName, email, address)
}
submitButton.addEventListener('click', submitHandler)