import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Algo no coincide, intenta de nuevo");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Login/style.css"
        <section>
        <div class="contenedor">
            <image class="logo" src="./assets/logo.png"></image>
        </div>
        <div class="contenedor2">
            <h1 class="info">¿No tienes cuenta? <font color="blue">Registrate</font></h1>
            <image class="descargaApp" src="./assets/linkdescarga.png"></image>
        </div>
        <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-login", Login);
