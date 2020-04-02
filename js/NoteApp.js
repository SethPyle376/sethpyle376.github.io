function getNoteName() {
    const link = window.location.href
    var url = new URL(link);
    var param = url.searchParams.get("note")
    return param
}

function setNoteName() {
    console.log(getNoteName())
    document.getElementById("noteHeader").innerHTML = getNoteName()
}

function loadNote() {
    setNoteName()
    var note = localStorage.getItem(getNoteName())
    document.getElementById("noteContent").value = note
}

function saveNote() {
    var noteContent = document.getElementById("noteContent").value
    localStorage.setItem(getNoteName(), noteContent)
}