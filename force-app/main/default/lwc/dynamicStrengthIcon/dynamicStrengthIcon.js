/**
* name: DynamicStrengthIcon
* author: Mihir Singh
* create-date: 21-02-2021
* for-desktop: yes
* for-mobile: yes
* Description: independent child component for displaying strength as per priority
*/
import { api, LightningElement, track } from 'lwc';
import p1Icon from './p1.html';
import p2Icon from './p2.html';
import p3Icon from './p3.html';

export default class DynamicStrengthIcon extends LightningElement {
    @api priority;
    
    render () {
        switch(this.priority) {
            case 'P1': return p1Icon;
            case 'P2': return p2Icon;
            case 'P3': return p3Icon;
            default: break;
        }
    }
}