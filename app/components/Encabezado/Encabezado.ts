class MyEncabezado extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Encabezado/style.css"
            <section>
            <div class= "rectanguloup">
            <h1></h1>
                <image class="logoig" src="./assets/Encabezado/Instagram.png"></image>
                <image class="explore" src="./assets//Encabezado/Explore.png"></image>
                <image class="Home" src="./assets/Encabezado/Home.png"></image>
                <image class="Like" src="./assets/Encabezado/Like.png"></image>
                <image class="Mensaje" src="./assets/Encabezado/Mensajes.png"></image>
                <image class="Newpost" src="./assets/Encabezado/New.png"></image>
                <image class="User" src="./assets/Encabezado/mi-perfil.png"></image>
                <image class="insta-search" src="./assets/Encabezado/insta-search.jpg"></image>
                </div>

                <div class= "rectangulohistorias">
                <h13 class= "user-history1">isamuñosp</h13>
                <h13 class= "user-history2">juanfe_09</h13>
                <h13 class= "user-history3">nat2001</h13>
                <h13 class= "user-history4">nick91</h13>
                <image class="history1" src="./assets/Encabezado/isaM-profile.png"></image>
                <image class="history2" src="./assets/Encabezado/juanfe-profile.png"></image>
                <image class="history3" src="./assets/Encabezado/isaP-profile.png"></image>
                <image class="history4" src="./assets/Encabezado/niko-profile.png"></image>
                </div>


            </section>
            `;
        }
    }

}

customElements.define("my-encabezado", MyEncabezado);
export default MyEncabezado;