/**
* name: CreateTicketQuick
* author: Mihir Singh
* createDate: 23-02-2021
* for-desktop: yes
* for-mobile: yes
* description: component for creating a new ticket quickly
*/
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import TICKET_OBJECT from '@salesforce/schema/Ticket__c';
import TICKET_SUBJECT from '@salesforce/schema/Ticket__c.Subject__c';
import TICKET_DESCRIPTION from '@salesforce/schema/Ticket__c.Description__c';
import TICKET_PRIORITY from '@salesforce/schema/Ticket__c.Priority__c';

export default class CreateTicketQuick extends NavigationMixin(LightningElement) {

    @track ticketData = {
        subject: '',
        description: '',
        priority: ''
    };

    handleSubjectInput(event) {
        this.ticketData['subject'] = event.target.value;
    }

    handleDescriptionInput(event) {
        this.ticketData['description'] = event.target.value;
    }

    handlePriorityInput(event) {
        this.ticketData['priority'] = event.target.value;
    }

    get PRIORITY_OPTIONS() {
        return [
            { label: 'P1', value: 'P1' },
            { label: 'P2', value: 'P2' },
            { label: 'P3', value: 'P3' }
        ]; 
    }

    navigateToAllTickets() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Support_Page' 
            }
        });
    }

    navigateToNewTicket() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Ticket__c',
                actionName: 'new' 
            }
        });
    }

    newTicket() {
        if (this.ticketData.subject && this.ticketData.description && this.ticketData.priority) {
            const fields = {};
            fields[TICKET_SUBJECT.fieldApiName] = this.ticketData.subject;
            fields[TICKET_DESCRIPTION.fieldApiName] = this.ticketData.description;
            fields[TICKET_PRIORITY.fieldApiName] = this.ticketData.priority;
            createRecord({ apiName: TICKET_OBJECT.objectApiName, fields })
            .then((res) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'New Ticket Raised!',
                        message: `Ticket ${res.fields.Name.value} was raised successfully!`,
                        variant: 'success'
                    })
                );
            })
            .catch((err) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Couldn\'t Raise Ticket!',
                        message: err.body.message,
                        variant: 'error'
                    })
                );
            })
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Couldn\'t Raise Ticket!',
                    message: 'All fields are mandatory',
                    variant: 'error'
                })
            );
        }
    }
}