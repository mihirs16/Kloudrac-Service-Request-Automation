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
    @track filteredRecords;
    @track headers = [
        'Ticket Number',
        'Assigned To',
        'Opened On',
        'Status',
        'Priority'
    ];

    // function to fetch list data
    fetchRecords() {
        getTickets()
        .then((result) => {
            for (var i = 0; i < result.length; i++) {
                var thisOpenedOn = new Date(result[i].CreatedDate);
                result[i]['dateCache'] = thisOpenedOn.getFullYear().toString() + '-' + thisOpenedOn.getMonth().toString() + '-' + thisOpenedOn.getDate().toString();
                result[i].CreatedDate = thisOpenedOn.getDate().toString() + '-' + thisOpenedOn.getMonth().toString() + '-' + thisOpenedOn.getFullYear().toString(); 
            }
            this.listOfRecords = result;
            this.filteredRecords = this.listOfRecords;
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
            this.errorMessage(err);
        })
    }

    // fetch ticket data
    constructor() {
        super();
        this.fetchRecords();        
    }

    // filter displayed records
    filterRecords(event) {
        var filter = event.detail;
        this.filteredRecords = this.listOfRecords.filter((record) => {
            var fil = true;
            fil = filter.searchBy && filter.searchBy != '' ? record.Name.toLowerCase().includes(filter.searchBy.toLowerCase()) : fil;
            fil = filter.openedOnFrom ? fil && Date.parse(record.dateCache) >= Date.parse(filter.openedOnFrom) : fil;
            fil = filter.openedOnTo ? fil && Date.parse(record.dateCache) <= Date.parse(filter.openedOnTo) : fil;
            fil = filter.status ? fil && record.Status__c == filter.status : fil;
            fil = filter.priority ? fil && record.Priority__c == filter.priority : fil;
            return fil;
        });
    }

    // refresh list data on refresh event
    refreshRecords() {
        this.fetchRecords();
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