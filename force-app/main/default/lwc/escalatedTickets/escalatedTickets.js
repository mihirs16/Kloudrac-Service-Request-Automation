/**
* name: EscalatedTickets
* author: Mihir Singh
* createDate: 03-03-2021
* for-desktop: yes
* for-mobile: yes
* description: lwc to display a list of all escalated cases
*/
import { LightningElement, track } from 'lwc';
import getEscalatedLists from '@salesforce/apex/DataService.escalatedTickets';

export default class EscalatedTickets extends LightningElement {
    @track escalatedTickets;

    constructor() {
        super();

        getEscalatedLists()
        .then((result) => {
            for (var i = 0; i < result.length; i++) {
                var thisOpenedOn = new Date(result[i].CreatedDate);
                result[i].CreatedDate = thisOpenedOn.getDate().toString() + '-' + thisOpenedOn.getMonth().toString() + '-' + thisOpenedOn.getFullYear().toString(); 
            }
            this.escalatedTickets = result;
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}