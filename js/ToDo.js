function storeTodo() {
    var currentList = []
    var newTodoContent = document.getElementById("newTodo").value

    var newTodoObject = {
        "id": Math.floor(Math.random() * Math.floor(1024)),
        "content": newTodoContent,
        "completed": false
    }

    if (localStorage.getItem("todos")) {
        currentList = JSON.parse(localStorage.getItem("todos") || "[]")
    }

    currentList.push(newTodoObject)

    localStorage.setItem("todos", JSON.stringify(currentList))
    updateTable()
}

function handleCheck(id, checked) {
    if (!localStorage.getItem("todos")) {
        return
    }

    var currentList = JSON.parse(localStorage.getItem("todos" || "[]"))

    currentList.forEach((todo, index, list) => {
        if (todo.id == id) {
            todo.completed = checked
            list[index] = todo
            console.log(list)
        }
    })

    localStorage.setItem("todos", JSON.stringify(currentList))
    updateTable()
}

function deleteTodo(id) {
    if (!localStorage.getItem("todos")) {
        return
    }

    var currentList = JSON.parse(localStorage.getItem("todos" || "[]"))

    currentList = currentList.filter(todo => {
        return todo.id != id
    })

    localStorage.setItem("todos", JSON.stringify(currentList))
    updateTable()
}

function updateTable() {
    var content = "<table>"

    var currentList = JSON.parse(localStorage.getItem("todos"))

    currentList.forEach(todo => {
        content += "<tr>"
        if (todo.completed) {
            content += "<th><input checked=\"" + todo.completed +"\"type =\"checkbox\" onClick=\"handleCheck(" + todo.id + "," + "this.checked)\"></input></th>"
        } else {
            content += "<th><input type =\"checkbox\" onClick=\"handleCheck(" + todo.id + "," + "this.checked)\"></input></th>"
        }

        content += "<th>" + (todo.completed ? "<del>" : "") + todo.content + (todo.completed ? "</del>" : "") + "</th>"
        content += "<th><button onClick=\"deleteTodo(" + todo.id.toString()  +")\">X</button></th>"
        content += "</tr>"
    })
    content += "</table>"
    document.getElementById("content").innerHTML = content
}