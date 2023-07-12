import { LightningElement } from 'lwc';
import searchId from '@salesforce/apex/EmployeeTeams.searchId';
import {NavigationMixin} from 'lightning/navigation';
export default class EmployeeSearchById extends NavigationMixin(LightningElement) {
    edata=[];
    clickp;
    //defaultoff=false;
    displayTable = false;
    msg;
    tabcols=[
        {label:"Employee Name",fieldName:"Name",type:"text"},
        {label:"Employee Id",fieldName:"Employee_Id__c",type:"integer"},
        {label:"Status",fieldName:"Email__c",type:"text"},
        {label:"Phone",fieldName:"Phone__c",type:"phone"},
        {type:"action",typeAttributes:{rowActions:[{label:"Edit",name:"Edit"}]}}

    ];
    handleevent(event){
        
        this.clickp=event.detail;
       
        
    }

    showbutton(){
        
        
        searchId({"eid":this.clickp}).then(result=>{
            if(Array.isArray(result) && result.length > 0){
                
                //this.defaultoff=true;
                this.displayTable = true;
                this.edata=result;
                console.log(JSON.stringify(this.edata));
            }else{
                this.displayTable = false;
                this.msg = 'Enter Valid EmpId';
                console.log('Entered Else block:');
                
            }

           }).catch(error => {
            this.displayTable = false;
            console.log('Apex method error:');
              this.msg = 'Enter Valid EmpId';
            console.error('Apex method error:', error);
        });

        
    }

    

    
    

  empactions(event){
        var tabrowid = event.detail.row.Id;
        if(event.detail.action.name=="Edit"){
          var poseditpage = {type:"standard__recordPage",attributes:{recordId:tabrowid,actionName:"edit"}};
        this[NavigationMixin.Navigate](poseditpage);
        }
       
         }

         rerender(){
            searchId({"eid":this.clickp}).then(result=>{
               
                this.edata=result;
                
            });
        }

        
}