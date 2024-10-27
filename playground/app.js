const form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const input = document.getElementById("js-input").value
    const alert = document.getElementById("alert")
    alert.classList.remove("alert-success")
    alert.classList.remove("alert-danger")

    if (input) {
        try {
            const realm = new window.ShadowRealm()
            const result = realm.evaluate(input)
            alert.classList.add("alert-success")
            alert.innerText = result?.toString() || "undefined"
        } catch (e) {
            console.log(e)
            alert.classList.add("alert-danger")
            alert.innerText = e.message || ""
        }
    }
})