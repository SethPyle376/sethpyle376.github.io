function getNoteName() {
    const link = window.location.href
    var url = new URL(link);
    var param = url.searchParams.get("note")
    console.log(param)
    return param
}