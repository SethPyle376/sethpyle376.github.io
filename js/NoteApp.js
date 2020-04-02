const binKey = 'f4ff985f5f5baa336274aceaecb83c20'
const binUrl = 'https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php'



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
    if (localStorage.getItem(getNoteName() + '-pastebin')) {
        const link = `<a href=${localStorage.getItem(getNoteName() + '-pastebin')}>Pastebin Link</a>`
        document.getElementById("pasteBinLink").innerHTML = link
    }
}

function saveNote() {
    var noteContent = document.getElementById("noteContent").value
    localStorage.setItem(getNoteName(), noteContent)
}

function binNote() {
    const options = `api_dev_key=${binKey}&api_option=paste&api_paste_code=${document.getElementById("noteContent").value}&api_paste_name=${getNoteName()}&api_paste_private=1`
    fetch(binUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: options
    }).then(response => {
        console.log(response)
        return response.text()
    }).then(data => {
        console.log(data)
        localStorage.setItem(getNoteName() + '-pastebin', data)
    })
}