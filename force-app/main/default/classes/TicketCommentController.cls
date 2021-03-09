/**
* name: TicketCommentController
* author: Mihir Singh
* create-date: 2021-02-28
* description: controller for handling Ticket_Comments__c data
*/
public inherited sharing class TicketCommentController {

    // get latest comments for all tickets created in the past 90 days
    public List<Ticket__c> LatestTicketCommentsForLast90 {
        get {
            Id thisUserId = UserInfo.getUserId();
            return [
                SELECT
                    Id,
                    Name,
                    Status__c,
                    Priority__c,
                    CreatedDate,
                    (
                        SELECT
                            Id,
                            Name,
                            Subject__c,
                            Content__c,
                            CreatedDate,
                            Days_Ago__c,
                            Ticket__r.Name,
                            CreatedBy.Name
                        FROM Ticket_Comment__r
                        ORDER BY CreatedDate DESC 
                        LIMIT 1
                    )
                FROM Ticket__c
                WHERE CreatedById = :thisUserId
                AND CreatedDate = LAST_N_DAYS:90
            ];
        }
    }

}
