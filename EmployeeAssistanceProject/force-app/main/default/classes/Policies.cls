public with sharing class Policies {
    public Policies() {

    }

    @AuraEnabled
    public static List<Project_Policy__c> showPolices(){
    try{
    list<Project_Policy__c> polist =[select Name,Policy_Number__c from Project_Policy__c ];
    return polist;
    }
    catch(Exception e){
    throw new AuraHandledException(e.getMessage());
    }
    }
}