import { LightningElement } from 'lwc';
import  pubsubSharedFile from 'c/pubsubSharedFile';
export default class PublisherGetProject extends LightningElement {
   
    userinput=0;
    onchangehandler(event){
     this.userinput=event.target.value;
    }

    clickme(){
        //userEnterEmpId = this.target.querySelector(".E1").value;

        console.log(this.userinput);
        //let message ={"message":'hello pubsub'}
        pubsubSharedFile.fire('simplevt',this.userinput);
       console.log('Event fired');

    }
}