/**
* name: recentCommentsCard
* author: Mihir Singh
* createDate: 26-02-2021
* for-desktop: yes
* for-mobile: yes
* description: child of recentComments for displaying each recent comment
*/
import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RecentCommentsCard extends NavigationMixin(LightningElement) {
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