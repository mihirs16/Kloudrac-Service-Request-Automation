/**
* name: CreateTicketQuick
* author: Mihir Singh
* createDate: 23-02-2021
* for-desktop: yes
* for-mobile: yes
* description: component for creating a new ticket quickly
*/
import { LightningElement, track } from 'lwc';

export default class CreateTicketQuick extends LightningElement {
    get ORG_TYPE_OPTIONS() {
        return [
            { label: 'Production', value: 'Production' },
            { label: 'Sandbox', value: 'Sandbox' },
        ];
    }

    get PRIORITY_OPTIONS() {
        return [
            { label: 'P1', value: 'P1' },
            { label: 'P2', value: 'P2' },
            { label: 'P3', value: 'P3' }
        ]; 
    }
}