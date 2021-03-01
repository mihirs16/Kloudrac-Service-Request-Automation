/**
* name: TicketCommentController
* author: Mihir Singh
* create-date: 2021-02-28
* description: controller for handling Ticket_Comments__c data
*/
public inherited sharing class TicketCommentController {

    public Integer numberOfRecentComments;      // number of recent comments to retrieve

    // constructor for getting recent Tickets
    public TicketCommentController(Integer num) {
        this.numberOfRecentComments = num;
    }

    // get the most recent tickets for current user
    public List<Ticket_Comments__c> RecentTicketCommentsForThisUser {
        get {
            Id thisUserId = UserInfo.getUserId();
            return [
                SELECT
                    Id,
                    Name,
                    Content__c,
                    CreatedDate,
                    Days_Ago__c,
                    Ticket__r.Name,
                    CreatedBy.Name
                FROM Ticket_Comments__c
                WHERE Ticket__r.CreatedById = :thisUserId
                ORDER BY Created_On__c
                LIMIT :this.numberOfRecentComments
            ];
        }
    }

}
