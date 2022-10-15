class AppContainer extends HTMLElement{
    count = Number(localStorage.getItem("currentCount")) || 0;

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.increase = this.increase.bind(this)
    }

    increase(){
        const newNumber = this.count + 1;
        this.count = newNumber;
        localStorage.setItem("currentCount", String(newNumber))

        this.mount()
    }

    connectedCallback(){
        this.mount()
    }
    
    mount() {
        this.render()
        const button = this.shadowRoot?.querySelector("button")
        button?.addEventListener("click", this.increase)
    }

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <h1>${this.count}</h1>
            <button>Incrementar</button>
            `
        }

    }
}

customElements.define("app-container",AppContainer)