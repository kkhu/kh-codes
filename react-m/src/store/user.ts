import { observable, action } from "mobx";
import APIs from '../http/APIs';
class User {
  @observable name?: string = '';

  @action
  setName(name: string) {
    this.name = name;
  } 
}

export default new User();
