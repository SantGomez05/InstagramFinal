
import {addPost} from "../../services/db.js";
export class NewPost extends HTMLElement{
    username = "";
    image = "";
    description = "";

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedcallback(){
        this.render();
        
        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=> {
            if (this.username && this.image && this.description) {
                const postInfo = {
                    username: this.username,
                    image: this.image,
                    description: this.description
                }
                try {
                    await addPost(postInfo);
                    alert("Post created")
                    
                    const event: CustomEvent= new CustomEvent("form-fullfilled", {composed: true});

                    this.dispatchEvent(event);
                    
                } catch (error) {
                    console.log(error);
                    alert("Error to upload the post");
                }
            } else {
                alert("something is missing")
            } 
        });

        const usernameInput = this.shadowRoot?.querySelector('username');
        const imageInput = this.shadowRoot?.querySelector('image');
        const descriptionInput = this.shadowRoot?.querySelector('description');

        usernameInput?.addEventListener("change", (event)=> {
            const value: string = (event.target as HTMLInputElement).value || "";
            this.username = value;
        });

        imageInput?.addEventListener("change", (event)=> {
            const value: string = (event.target as HTMLInputElement).value || "";
            this.image = value;
        });

        descriptionInput?.addEventListener("change", (event)=> {
            const value: string = (event.target as HTMLInputElement).value || "";
            this.description = value;
        });
        }

        render(){
            if(!this.shadowRoot) return;
            this.shadowRoot.innerHTML = 
            `
            <article>

            <link rel="stylesheet" href="./components/Form/style.css">
                <div class="input">
                    <input class="input__field" type="text" placeholders="Username" id="username"
                </div>

                <div class="input">
                <input class="input__field" type="text" placeholders="Image" id="image"
                </div>

                <div class="input">
                <input class="input__field" type="text" placeholders="Description" id="description"
                </div>

                <button type="submit">Add New Post</button>

            </article>
            `
        }
    }
    customElements.define("new-post", NewPost);

