/**
* name: DynamicStrengthIcon
* author: Mihir Singh
* create-date: 21-02-2021
* for-desktop: yes
* for-mobile: yes
* Description: independent child component for displaying strength as per priority
*/
import { api, LightningElement, track } from 'lwc';

export default class DynamicStrengthIcon extends LightningElement {
    @api priority;
    @track strength;

    renderedCallback() {
        switch(this.priority) {
            case 'P1': this.strength = 1; break;
            case 'P2': this.strength = 2; break;
            case 'P3': this.strength = 3; break;
            default: this.strength = 0;
        }
    }
}