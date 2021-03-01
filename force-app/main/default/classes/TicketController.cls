/**
* name: TicketController
* author: Mihir Singh
* createDate: 22-02-2021
* description: controller for handling Ticket__c data
*/
public with sharing class TicketController {

    // get list of tickets property 
    public List<Ticket__c> AllTicketsForThisUser {
        get {
            Id thisUserId = UserInfo.getUserId();
            return [
                SELECT 
                    Id,
                    Name, 
                    Assigned_To__c, 
                    Last_Modified_On__c, 
                    CreatedDate, 
                    Status__c,
                    Priority__c
                FROM Ticket__C
                WHERE CreatedById = :thisUserId
            ];
        }
    }

}
