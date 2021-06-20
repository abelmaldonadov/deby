class Msg
{
    constructor() {
        document.querySelector("body").innerHTML += `
            <!-- MODAL -->
            <div id="modalMsgContainer001">
                <!-- RENDER -->
            </div>
        `
    }

    static talk(msg) {
        document.querySelector("#modalMsgContainer001").innerHTML = `
            <div class="modal active" id="modalMsg">
                <div class="content white">
                    <div class="modal-header">
                        <h5>Mensaje del terapeuta</h5>
                    </div>
                    <div class="modal-body">
                        ${ msg }
                    </div>
                    <div class="modal-footer">
                        <button class="btn l-notify modal-close">Aceptar</button>
                    </div>
                </div>
            </div>
        `
        document.querySelectorAll("#modalMsgContainer001 #modalMsg .modal-close").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector("#modalMsgContainer001").innerHTML = ""
            })
        })
    }
}
new Msg()