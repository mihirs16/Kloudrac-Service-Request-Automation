/**
* name: supportDefault
* author: Mihir Singh
* create-date: 21-02-2021
* for-desktop: yes
* for-mobile: yes
* Description: default view for the support page
*/
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getTickets from '@salesforce/apex/DataService.getTickets';

export default class SupportDefault extends LightningElement {

    @track listOfRecords;   // list of records to pass to recordsListView
    @track headers = [
        'Ticket Number',
        'Assigned To',
        'Opened On',
        'Status',
        'Priority'
    ];

    // fetch ticket data
    constructor() {
        super();
        
        getTickets()
        .then((result) => {
            for (var i = 0; i < result.length; i++) {
                var thisOpenedOn = new Date(result[i].CreatedDate);
                result[i].CreatedDate = thisOpenedOn.getDate().toString() + '-' + thisOpenedOn.getMonth().toString() + '-' + thisOpenedOn.getFullYear().toString(); 
            }
            this.listOfRecords = result;
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
            this.errorMessage(err);
        })
    }

    // utility: error toast
    errorMessage(err) {
        this.dispatchEvent (
            new ShowToastEvent ({
                title: err.body.pageErrors[0].statusCode.split('_').join(' '),
                message: err.body.pageErrors[0].message,
                variant: 'error'
            })
        );
    }

}