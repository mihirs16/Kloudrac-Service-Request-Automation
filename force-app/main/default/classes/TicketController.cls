/**
* name: TicketController
* author: Mihir Singh
* createDate: 22-02-2021
* description: controller for handling Ticket__c data
*/
public with sharing class TicketController {

    // get list of tickets property 
    @AuraEnabled public List<Ticket__c> AllTicketsForThisUser {
        get {
            Id thisUserId = UserInfo.getUserId();
            return [
                SELECT 
                    Id,
                    Name, 
                    Assigned_To__c, 
                    Last_Modified_On__c, 
                    Opened_On__c, 
                    Status__c,
                    Priority__c
                FROM Ticket__C
                WHERE CreatedById = :thisUserId
            ];
        }
    }

    // method for list of recent comments by list size
    @AuraEnabled public static List<Ticket_Comments__c> recentTicketCommentsForThisUser(Integer numberOfRecentComments) {
        Id thisUserId = UserInfo.getUserId();
        return [
            SELECT
                Id,
                Name,
                Content__c,
                Created_On__c,
                Ticket__c
            FROM Ticket_Comments__c
            WHERE Ticket__r.CreatedById = :thisUserId
            ORDER BY Created_On__c
            LIMIT :numberOfRecentComments
        ];
    }

}
