public with sharing class EmployeeTeams {
    public EmployeeTeams() {

    }

    
  

    @AuraEnabled
    public static list<Employee__c> searchId(integer eid){
    try{
    
    list<Employee__c> emplist =[select Name,Employee_Id__c,Email__c,Phone__c from Employee__c where Employee_Id__c=:eid];
    return emplist;
    }
    catch(Exception e){
    throw new AuraHandledException(e.getMessage());
    }
    }

     @AuraEnabled 
    public static list<Employee__c> showbyEid(integer emid){
    try{
      
      list<Employee__c> empRecord = [select id,Name,Email__c,Phone__c,Employee_Id__c,Employee_No__c from Employee__c where Employee_Id__c=:emid];
       system.debug('EmpRecord'+empRecord);
       String projectID = empRecord[0].Employee_No__c;
       List<Employee__c> lemp= [select id,Name,Email__c,Phone__c,Employee_Id__c,Employee_No__c,Employee_No__r.Name from Employee__c where  Employee_No__c=:projectID];
      
           return lemp;
    }
    catch(Exception e){
    throw new AuraHandledException(e.getMessage());
    }
    }
}