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
    
    @track listOfRecentComments;
    @api numOfRecentComments = 5;

    constructor() {
        super();
        
        getRecentComments({ numberOfRecentComments: this.numOfRecentComments ? this.numOfRecentComments : 5 })
        .then((result) => {
            for (var i = 0; i < result.length; i++) {
                var Created_On__c = new Date(result[i].Opened_On__c);
                result[i].Opened_On__c = Created_On__c.getDate().toString() + '-' + Created_On__c.getMonth().toString() + '-' + Created_On__c.getFullYear().toString(); 
            }
            this.listOfRecentComments = result;
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