export class Form extends HTMLElement{
    email = "";
    password = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent<{email:string, password: string}> = 
            new CustomEvent("form-fullfiled",{
                detail: {email: this.email, password: this.password},
                composed: true
            });

            this.dispatchEvent(event);
        });

        const emailInput = this.shadowRoot?.querySelector('input[type="email"]');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');
        
        emailInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.email = value;
        });

        passwordInput?.addEventListener("change",(evt) =>{
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `

        
        <article>
        <link rel="stylesheet" href=" ./components/Form/style.css"
            <div>

           <input class="correo" type="email" placeholder="Usuario o correo electrónico">
            </div>
            <div>
                <input class="contraseña" type="password" placeholder="Contraseña">
            </div>
            <div>

            <button class="iniciar" type="submit">Iniciar sesion</button>

            </div>

            <img class="imagen" type="submit">.</button>
        </article>
        `
    }
}

customElements.define("app-form",Form);