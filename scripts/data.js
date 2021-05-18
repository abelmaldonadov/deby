if (localStorage.getItem("gameInit")) {
    location.href = localStorage.getItem("gameMode")+".html"
} else {
    document.querySelector("#data").addEventListener("submit",e => {
        e.preventDefault()
        const data = new FormData(e.target)
        localStorage.setItem("gameInit", true)
        localStorage.setItem("playerName", data.get("name"))
        localStorage.setItem("gameMode", data.get("mode"))
        localStorage.setItem("playerAge", data.get("age"))
    
        location.href = data.get("mode")+".html"
    })
}