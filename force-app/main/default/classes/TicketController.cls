public with sharing class TicketController {

    public List<Ticket__c> Tickets {
        get {
            System.debug(UserInfo.getUserId());
            return [SELECT Id, Name, Assigned_To__c, Last_Modified_On__c, Opened_On__c, Status__c FROM Ticket__C];
        }
    }

}
