
import { observable, action } from "mobx";
interface Local {
  [key: string]: any
}
class Local {
  @observable bookLeading: boolean = localStorage.getItem('bookLeading') !== 'false'
  @action
  setLocal(local: object = {}) {
    Object.entries(local).forEach(([k, v]) => {
      this[k] = v
      localStorage.setItem(k, String(v))
    })
  }
}

export default new Local();
