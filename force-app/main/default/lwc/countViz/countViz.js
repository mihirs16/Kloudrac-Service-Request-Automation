/**
* name: CountViz
* author: Mihir Singh
* createDate: 24-02-2021
* for-desktop: yes
* for-mobile: yes
* description: lwc component for visualising object dat
*/
import { api, LightningElement, track } from 'lwc';
import getCountToDisplay from '@salesforce/apex/CountVizController.getCountToDisplay';

export default class CountViz extends LightningElement {
    @api vizTitle = 'Tickets';
    @api vizSubtitle = 'By Priority';
    @api objName = 'Ticket__c';
    @api filterBy = 'None';
    @api filter = 'None';
    @track count = " ";

    renderedCallback() {
        getCountToDisplay({
            objectName: this.objName,
            filterBy: this.filterBy,
            filter: this.filter
        })
        .then((res) => {
            console.log(res);
            this.count = res;
        })
        .catch(err => console.log(err));
    }
}