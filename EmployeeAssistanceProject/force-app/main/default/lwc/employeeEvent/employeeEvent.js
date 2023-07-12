import { LightningElement } from 'lwc';

export default class EmployeeEvent extends LightningElement {
    
    param="";
    enterid(event){
     this.param=event.target.value;

      var ev =new CustomEvent("eevent",{detail:this.param});
      this.dispatchEvent(ev);

    }
}