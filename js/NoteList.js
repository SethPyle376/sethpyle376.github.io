function getNoteList() {
    if (localStorage.getItem("notes")) {
        return JSON.parse(localStorage.getItem("notes"))
    } else {
        return []
    }
}

function createNote() {
    var name = document.getElementById("newNote").value
    localStorage.setItem(name, "")

    var notes = getNoteList()
    notes.push(name)
    localStorage.setItem("notes", JSON.stringify(notes))
    buildNoteList()
}

function updateNote(name, content) {
    localStorage.setItem(name, content)
}

function buildNoteList() {
    var content = "<table>"

    var noteList = getNoteList()

    noteList.forEach(note => {
        content += "<tr><th><a href=\"/note_taking_app.html?note=" + note + "\">" + note + "</a></th></tr>"
    })

    content += "</table>"

    document.getElementById("noteList").innerHTML = content
}
