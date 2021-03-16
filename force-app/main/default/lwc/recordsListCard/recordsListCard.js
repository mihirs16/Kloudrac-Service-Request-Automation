/**
* name: recordsListCard
* author: Mihir Singh
* create-date: 21-02-2021
* for-desktop: yes
* for-mobile: yes
* Description: child component of recordsListView to display each row
*/
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RecordsListCard extends NavigationMixin(LightningElement) {
    @api row;

    redirectToRecord() {
        console.log(this.row.Id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.row.Id,
                objectApiName: 'Ticket__c',
                actionName: 'view'
            }
        });
    }

}