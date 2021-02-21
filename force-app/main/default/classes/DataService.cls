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

}
