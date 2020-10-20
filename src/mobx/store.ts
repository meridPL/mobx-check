import { action, configure, observable } from "mobx"

// configure({ enforceActions: "always" })

class Store {
    @observable testowy : string = "dsafdfsdfs"
    @observable numer: number = 0
    @action setTestowy(text: string){
        console.log("Store -> @actionsetTestowy -> setTestowy")
        this.testowy = text
    }
}


const store = new Store()
export default store