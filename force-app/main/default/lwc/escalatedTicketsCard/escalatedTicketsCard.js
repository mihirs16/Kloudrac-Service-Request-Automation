import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class EscalatedTicketsCard extends NavigationMixin(LightningElement) {
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