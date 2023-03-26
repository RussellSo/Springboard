//Todo list entry
// cross out
//and remove
//locatstorage - try saving to an array/object. then retrieving array/object and iterating through array setting each as an li???



let submit = document.querySelector("#submit")
let todoEntry = document.querySelector(`input[type="text"]`)
let todoMaker = document.querySelector("#todoMaker")
let todoList = document.querySelector("#todoList")


todoMaker.addEventListener("submit", function(e) {
    e.preventDefault()
    
    let li = document.createElement("li")
    li.innerText = todoEntry.value
    todoList.appendChild(li)
    
    let remove = document.createElement("button")
    remove.innerText = "remove"
    li.appendChild(remove)
    todoEntry.value = ""

  
})

// event delegation
 todoList.addEventListener("click", function(e) {
    if( e.target.tagName !== "BUTTON") {
        e.target.classList.toggle("cross")
    } else {
        e.target.parentElement.remove();
    }

 })