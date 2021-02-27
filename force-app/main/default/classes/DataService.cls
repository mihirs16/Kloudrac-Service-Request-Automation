/**
* name: DataService
* author: Mihir Singh
* create-date: 2021-02-21
* description: data service module for sr automation
*/
public with sharing class DataService {

    // get all Ticket__c for this user
    @AuraEnabled
    public static List<Ticket__c> getTickets() {
        TicketController ticketController = new TicketController();
        return ticketController.AllTicketsForThisUser;
    }

    // get most recently added Ticket_Comments__c for this user
    @AuraEnabled
    public static List<Ticket_Comments__c> recentTicketCommentsForThisUser(Integer numberOfRecentComments){
        TicketCommentController ticketCommentController = new TicketCommentController(numberOfRecentComments);
        return ticketCommentController.RecentTicketCommentsForThisUser;
    }

}
