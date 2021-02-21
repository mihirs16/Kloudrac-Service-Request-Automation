/**
* name: recordsListCard
* author: Mihir Singh
* create-date: 21-02-2021
* for-desktop: yes
* for-mobile: yes
* Description: child component of recordsListView to display each row
*/
import { LightningElement, api } from 'lwc';

export default class RecordsListCard extends LightningElement {
    @api row;
}