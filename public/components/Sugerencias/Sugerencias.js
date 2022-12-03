export var Sugerencias;
(function (Sugerencias) {
    Sugerencias["perfil"] = "perfil";
    Sugerencias["user"] = "user";
    Sugerencias["infouser"] = "infouser";
})(Sugerencias || (Sugerencias = {}));
class MySugerencias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            perfil: null,
            user: null,
            infouser: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Sugerencias/style.css"
            <section>
            <div class="cuadradoPrincipal">
             <image class="userimg" src="${this.perfil}"></image>
                <h1 class="user">${this.user}</h1>
                <h1 class="infouser">${this.infouser}</h1>
                <h1 class="cambio">Seguir</h1>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-sugerencias", MySugerencias);
export default MySugerencias;
