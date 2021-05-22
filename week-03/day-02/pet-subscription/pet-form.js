
// grab html elements by id
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var addressInput = document.getElementById("address")
var addPetButton = document.getElementById("addPet")
var submitButton = document.getElementById("submit")
var petInputsContainer = document.getElementById('pet-inputs')

// declaring global variables, to store customer information
var customer = {
    customerName: "",
    email: "",
    address: "",
    dogs: []
}

function inputHandler(event, propertyToUpdate) {
    customer[propertyToUpdate] = event.target.value
}

nameInput.addEventListener('input', event => inputHandler(event, 'customerName'))
emailInput.addEventListener('input', event => inputHandler(event, 'email'))
addressInput.addEventListener('input', event => inputHandler(event, 'address'))

// what to do when they hit submit
function submitHandler() {
    console.log(customer)
}
submitButton.addEventListener('click', submitHandler)

function addPetButtonHandler() {
    // add pet input to page
    var div = document.createElement('div')
    var label = document.createElement('label')
    var currentDogPosition = customer.dogs.length
    customer.dogs.push("")
    label.innerText = (currentDogPosition + 1) + " Dog Name: "
    var newInput = document.createElement('input')
    newInput.addEventListener('input', (event) => {
        customer.dogs[currentDogPosition] = event.target.value
    })
    newInput.type = "text"
    div.appendChild(label)
    div.appendChild(newInput)
    petInputsContainer.appendChild(div)
}

addPetButton.addEventListener('click', addPetButtonHandler)