
import { observable, action } from "mobx";
interface Local {
  [key: string]: any
}
class Local {
  @observable bookLeading: boolean = localStorage.getItem('bookLeading') !== 'false'
<<<<<<< HEAD
=======
  @observable bookLeadingVoice: boolean = localStorage.getItem('bookLeadingVoice') === 'true'
  @observable bookLeadingShake: boolean = localStorage.getItem('bookLeadingShake') === 'true'
>>>>>>> 7d22b7f223aeec513332a1c3d795db098690418f
  @action
  setLocal(local: object = {}) {
    Object.entries(local).forEach(([k, v]) => {
      this[k] = v
      localStorage.setItem(k, String(v))
    })
  }
}

export default new Local();
