/**
* @Name: TicketController
* @Author: Mihir Singh
* @CreateDate: 20/02/2021
* @Description: Controller for handling Ticket__c data
*/
public with sharing class TicketController {

    // list of tickets property 
    public List<Ticket__c> AllTicketsForThisUser {

        // get all tickets for the current user
        get {
            Id thisUserId = UserInfo.getUserId();
            return [SELECT 
                Id,
                Name, 
                Assigned_To__c, 
                Last_Modified_On__c, 
                Opened_On__c, 
                Status__c,
                Priority__c
                FROM Ticket__C
                WHERE CreatedById = :thisUserId];
        }

    }

}
