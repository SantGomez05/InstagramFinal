class MySugerencia extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Mesugerencia/style.css"
            <section>
                <div class="cuadradoPrincipal">
                    <img class="userimg" src="./assets/Post/Users/mi-perfil.png"></img>
                    <h1 class="user">santgomez5</h1>
                    <h1 class="infouser">Santiago Gómez</h1>
                    <h1 class="suggestion">Suggestions for you</h1>
                    <h1 class="change">Change</h1>
                    <h1 class="view-all">View all</h1>
                </div>
                <div class="cuadradoUsersSuggested">
            <img class="suggested1" src="./assets/Sugerencias/messi-profile.png"></img>
            <img class="suggested2" src="./assets/Sugerencias/cancelo-profile.png"></img>
            <img class="suggested3" src="./assets/Sugerencias/deBruyne-profile.png"></img>
            <img class="suggested4" src="./assets/Sugerencias/cr7-profile.png"></img>
            
                <h1 class="user-suggested1">leomessi</h1>
                <h1 class="user-suggested2">jpcancelo</h1>
                <h1 class="user-suggested3">kevindebruyne</h1>
                <h1 class="user-suggested4">cristiano</h1>

                <h1 class="people-follow1">Juanfe_09 y 100 más siguen esta cuenta</h1>
                <h1 class="people-follow2">Te sigue</h1>
                <h1 class="people-follow3">Jcdorado2001 y 20 más siguen esta cuenta</h1>
                <h1 class="people-follow4">Sugerencias para ti</h1>
        </div>;

               
            </section>`;
            /*
            
        */
        }
    }
}
customElements.define("my-sugerencia", MySugerencia);
export default MySugerencia;
