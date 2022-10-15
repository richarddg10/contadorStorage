"use strict";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.count = Number(localStorage.getItem("currentCount")) || 0;
        this.attachShadow({ mode: 'open' });
        this.increase = this.increase.bind(this);
    }
    increase() {
        const newNumber = this.count + 1;
        this.count = newNumber;
        localStorage.setItem("currentCount", String(newNumber));
        this.mount();
    }
    connectedCallback() {
        this.mount();
    }
    mount() {
        var _a;
        this.render();
        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        button === null || button === void 0 ? void 0 : button.addEventListener("click", this.increase);
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <h1>${this.count}</h1>
            <button>Incrementar</button>
            `;
        }
    }
}
customElements.define("app-container", AppContainer);
