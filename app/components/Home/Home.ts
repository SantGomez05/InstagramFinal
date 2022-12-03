import data from "../data.js";
import dataSugerenias from "../dataSugerencias.js";

export class Home extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    render() {
        const compts = data.map(({imageprofile, nameuser, location, imagecontent, likes, comentuser1, comentuser2, viewcoments, phtoprofile, username}) => 
        ` <section>
            <my-profile
            nameuser="${nameuser}"
            imageprofile="${imageprofile}"
            location="${location}"
            imagecontent="${imagecontent}"
            likes="${likes}"
            comentuser1="${comentuser1}"
            comentuser2="${comentuser2}"
            viewcoments="${viewcoments}"
            phtoprofile="${phtoprofile}"
            username="${username}"
            ></my-profile>
            </section>
        `)

        const compts1 = dataSugerenias.map(({ perfil, user, infouser }) => `<section>
        <my-sugerencias
        perfil="${perfil}"
        user="${user}"
        infouser="${infouser}"
        ></my-sugerencias>
        </section>
    `)

        


        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `<section>
        <my-encabezado></my-encabezado>
        <!--<my-historias></my-historias>--->
        <my-sugerencia></my-sugerencia>
        ${compts.join("")}
        ${compts1.join("")}
        </section>
        `;

    }
}

customElements.define("app-home", Home);