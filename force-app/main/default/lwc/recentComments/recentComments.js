/**
* name: RecentComments
* author: Mihir Singh
* createDate: 26-02-2021
* for-desktop: yes
* for-mobile: yes
* description: list view of recent comments for home page
*/
import { api, LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getRecentComments from '@salesforce/apex/DataService.recentTicketCommentsForThisUser';

export default class RecentComments extends LightningElement {
    
    @track listOfTickets;

    constructor() {
        super();
        
        getRecentComments()
        .then((result) => {
            this.listOfTickets = result;
            console.log(result);
        })
        .catch(err => console.log(err));
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