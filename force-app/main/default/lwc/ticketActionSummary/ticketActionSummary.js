/**
* name: TicketActionSummary
* author: Mihir Singh
* createDate: 02-03-2021
* for-desktop: yes
* for-mobile: yes
* description: component to help track pending actions for customer / admin
*/
import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getTicketsWithPendingReply from '@salesforce/apex/DataService.ticketsWithPendingReplies';

export default class TicketActionSummary extends LightningElement {
    
    @track kloudracTickets;
    @track customerTickets;

    @wire(getRecord, {recordId: 'm005g000000flbLAAQ', fields: ['Customer_Setting__mdt.DeveloperName']}) metadataName;

    get customerName() {
        return this.metadataName.data.fields.DeveloperName.value;
    }

    constructor() {
        super();

        getTicketsWithPendingReply()
        .then((res) => {
            console.log(res);
            this.kloudracTickets = res.PendingAdminReplyTickets;
            this.customerTickets = res.PendingCustomerReplyTickets;
            console.log(JSON.parse(JSON.stringify(this.customerTickets)), JSON.parse(JSON.stringify(this.kloudracTickets)));            
        })
        .catch((err) => {
            console.log(err);
        })
    }


}