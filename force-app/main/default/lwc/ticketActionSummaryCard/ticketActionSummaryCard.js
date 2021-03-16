/**
* name: TicketActionSummaryCard
* author: Mihir Singh
* createDate: 02-03-2021
* for-desktop: yes
* for-mobile: yes
* description: child component for ticketActionSummary
*/
import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class TicketActionSummaryCard extends NavigationMixin(LightningElement) {
    @api ticket;

    redirectToRecord() {
        console.log(this.ticket.Id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.ticket.Id,
                objectApiName: 'Ticket__c',
                actionName: 'view'
            }
        });
    }
}