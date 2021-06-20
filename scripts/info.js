if (localStorage.getItem("info")) {

    let playerName = localStorage.getItem("playerName")
    let playerAge = localStorage.getItem("playerAge")
    let gameMode = localStorage.getItem("gameMode")
    let info = JSON.parse(localStorage.getItem("info"))

    document.querySelector("#info-body").innerHTML = `
        <div>
            <div class="light p-2 radius">
                <span class="text-12 text-gray">Código de ficha: </span>
                <span class="">${ info.name }</span>
                <br>
                <span class="text-12 text-gray">Actividad: </span>
                <span>${ gameMode }</span>
                <br>
                <span class="text-12 text-gray">Nombre del paciente: </span>
                <span>${ playerName }</span>
                <br>
                <span class="text-12 text-gray">Edad del paciente: </span>
                <span>${ playerAge } años</span>
            </div>
        </div>
        
        <!-- TABLE -->
        <table class="table mt-3 shadow">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Pregunta</th>
                    <th>Respuesta</th>
                    <th>tiempo</th>
                    <th>Cal.</th>
                </tr>
            </thead>
            <tbody id="tableInfoBody"></tbody>
        </table>
    `
    for(let i = 0; i < info.arrQuestions.length; i++) {
        document.querySelector("#tableInfoBody").innerHTML += `
            <tr>
                <th>${ i+1 }</th>
                <td>${ info.arrQuestions[i].question }</td>
                <td>${ info.arrQuestions[i].resp }</td>
                <td>${ info.arrQuestions[i].time } s</td>
                <td>${ info.arrQuestions[i].cal }</td>
            </tr>
        `
    }

} else {
    document.querySelector("#info-body").innerHTML = `
        <div class="light py-9 radius">
            <p class="text-center text-gray">No existe ningún informe que mostrar</p>
        </div>
    `
}