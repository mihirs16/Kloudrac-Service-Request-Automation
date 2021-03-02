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
    public static List<Ticket__c> recentTicketCommentsForThisUser(){
        TicketCommentController ticketCommentController = new TicketCommentController();
        return ticketCommentController.LatestTicketCommentsForLast90;
    }

    // get tickets according to pending replies
    @AuraEnabled
    public static Map<String, Object> ticketsWithPendingReplies(){
        TicketController ticketController = new TicketController();
        Map<String, Object> mapToReturn = new Map<String, Object> ();
        mapToReturn.put('PendingCustomerReplyTickets', ticketController.PendingCustomerReplyTickets);
        mapToReturn.put('PendingAdminReplyTickets', ticketController.PendingAdminReplyTickets);

        return mapToReturn;
    }
    
}
