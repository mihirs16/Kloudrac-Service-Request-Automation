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
        .then((res) => {
            this.escalatedTickets = res;
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}