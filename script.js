//on submit of form => trigger some functions(add event listner)
document.getElementById("addTaskForm").addEventListener("submit", (event) => {
    event.preventDefault()   // <=to prevent page from reloading of page

        // grab value from input field(id is task)
        let taskName = document.getElementById("task").value

        // craete new div with that grab value(inner text)
        let newDiv = document.createElement("div")
        newDiv.innerText= taskName

        //put new div inside #list box
        let list = document.getElementById("list")
        list.appendChild(newDiv)
        //empty field element
        document.getElementById("task").value = ""

})
document.getElementById("clear")