/**
* name: TicketController
* author: Mihir Singh
* createDate: 22-02-2021
* description: controller for handling Ticket__c data
*/
public with sharing class TicketController {

    // current user details
    User ThisUser;

    // initialize current user details
    public TicketController() {
        Id thisUserId = UserInfo.getUserId();
        this.ThisUser = [
            SELECT 
                Id, 
                Name, 
                ProfileId, 
                Profile.Name 
            FROM User 
            WHERE Id = :thisUserId
        ][0];
    }

    // get list of tickets property 
    public List<Ticket__c> AllTicketsForThisUser {
        get {
            return [
                SELECT 
                    Id,
                    Name, 
                    Assigned_To__c, 
                    CreatedDate, 
                    Status__c,
                    Priority__c
                FROM Ticket__c
                WHERE CreatedById = :ThisUser.Id
            ];
        }
    }

    // get list of tickets with escalated status
    public List<Ticket__c> EscalatedTickets {
        get {
            return [
                SELECT
                    Id,
                    Name,
                    Assigned_To__c,
                    CreatedDate,
                    Status__c,
                    Priority__c
                FROM Ticket__c
                WHERE Status__c = 'Escalated'
            ];
        }
    }

    // get list of tickets with reply pending from customer
    public List<Ticket__c> PendingCustomerReplyTickets {
        get {
            String dynSOQL = 'SELECT Id, Name, Subject__c, Assigned_To__r.FirstName, CreatedDate, Status__c, Priority__c FROM Ticket__c ';
            String resolvedId = ThisUser.Id;

            if (ThisUser.Profile.Name == 'Standard User') {
                dynSOQL += 'WHERE CreatedById = :resolvedId AND Status__c = \'Pending Customer Reply\'';
            } else if (ThisUser.Profile.Name == 'System Administrator') {
                dynSOQL += 'WHERE Assigned_To__c = :resolvedId AND Status__c = \'Pending Customer Reply\'';
            }

            List<Ticket__c> ticketsToReturn = Database.query(dynSOQL);
            return ticketsToReturn;    
        }
    }

    // get list of tickets with reply pending from admins
    public List<Ticket__c> PendingAdminReplyTickets {
        get {
            String dynSOQL = 'SELECT Id, Name, Subject__c, Assigned_To__r.FirstName, CreatedDate, Status__c, Priority__c FROM Ticket__c ';
            String resolvedId = ThisUser.Id;

            if (ThisUser.Profile.Name == 'Standard User') {
                dynSOQL += 'WHERE CreatedById = :resolvedId AND Status__c = \'Customer Replied\'';
            } else if (ThisUser.Profile.Name == 'System Administrator') {
                dynSOQL += 'WHERE Assigned_To__c = :resolvedId AND Status__c = \'Customer Replied\'';
            }

            List<Ticket__c> ticketsToReturn = Database.query(dynSOQL);
            return ticketsToReturn;    
        }
    }

}
