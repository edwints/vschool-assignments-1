// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

let button = document.getElementById("submit-me")
let nameField = document.getElementById("name")
let ageField = document.getElementById("age")

button.addEventListener("submit", function(e){
    e.preventDefault()
    const firstName = document.getElementById("name").value
    const age = document.getElementById("age").value

    alert(firstName + ", " + age)
})

nameField.name = "user_name";
