/**
* name: supportDefaultHeader
* author: Mihir Singh
* createDate: 22-02-2021
* for-desktop: yes
* for-mobile: yes
* description: default page header for the Support Page
*/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SupportDefaultHeader extends NavigationMixin(LightningElement) {
    navigateToNewTicket() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Ticket__c',
                actionName: 'new'
            }
        });
    }
}