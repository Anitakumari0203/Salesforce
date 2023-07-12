import { LightningElement } from 'lwc';

import  pubsubSharedFile from 'c/pubsubSharedFile';

import showbyEid from '@salesforce/apex/EmployeeTeams.showbyEid';





export default class SubscribeGetProject extends LightningElement {




    pubmsg=0;

    tabcols=[

        {label:"Employee Name",fieldName:"Name" ,type:"text"},

        {label:"Email",fieldName:"Email__c" ,type:"Email"},

        {label:"Phone",fieldName:"Phone__c" ,type:"integer"},

        {label:"Employee Id",fieldName:"Employee_Id__c" ,type:"integer"},

        {label:"Employee No",fieldName:"Employee_No__r.Name"}

       

    ];

   




    appdata=[];




    connectedCallback(){




        this.register();




    }

   register(){




        pubsubSharedFile.register('simplevt',this.handleEvent.bind(this));




    }




    handleEvent(msgFromEvt){

      console.log('message from event'+this.msgFromEvt);

        this.pubmsg = msgFromEvt;

        console.log('message from pubmsg'+this.pubmsg);

        showbyEid({"emid":this.pubmsg}).then(result=>{this.appdata=result});




        console.log(this.appdata);




    }




}