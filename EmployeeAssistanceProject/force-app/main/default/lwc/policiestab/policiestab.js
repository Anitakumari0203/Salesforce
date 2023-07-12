import { LightningElement } from 'lwc';
import showPolices from '@salesforce/apex/Policies.showPolices';
import {NavigationMixin} from 'lightning/navigation';

export default class Policiestab extends NavigationMixin(LightningElement)  {
    podata=[];

    tabcols=[
        {label:"Policy Name",fieldName:"podata",type:"url",typeAttributes:{label:{fieldName:"Name"},tooltip:{fieldName:"Name"}}},
        {label:"Policy Number",fieldName:"Policy_Number__c",type:"text"}
      
       

    ];


connectedCallback(){
    showPolices().then(result=>{ 
        for(var i=0;i<result.length;i++){
        result[i].podata="/"+result[i].Id;
    }
        
        this.podata=result;})
}


    


}