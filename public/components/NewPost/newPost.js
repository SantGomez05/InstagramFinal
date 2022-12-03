var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost } from "../../services/db.js";
export class NewPost extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.image = "";
        this.description = "";
        this.attachShadow({ mode: "open" });
    }
    connectedcallback() {
        var _a, _b, _c, _d;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.image && this.description) {
                const postInfo = {
                    username: this.username,
                    image: this.image,
                    description: this.description
                };
                try {
                    yield addPost(postInfo);
                    alert("Post created");
                    const event = new CustomEvent("form-fullfilled", { composed: true });
                    this.dispatchEvent(event);
                }
                catch (error) {
                    console.log(error);
                    alert("Error to upload the post");
                }
            }
            else {
                alert("something is missing");
            }
        }));
        const usernameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('username');
        const imageInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('image');
        const descriptionInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('description');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.username = value;
        });
        imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.image = value;
        });
        descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.description = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
            `;
    }
}
customElements.define("new-post", NewPost);
