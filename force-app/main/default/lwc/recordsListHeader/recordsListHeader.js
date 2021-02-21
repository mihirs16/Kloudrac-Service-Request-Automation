/**
* name: recordsListHeader
* author: Mihir Singh
* create-date: 2021-02-21
* for-desktop: Yes
* for-mobile: Yes
* Description: child component of recordsListView to display headers
*/
import { LightningElement, api, track } from 'lwc';

export default class RecordsListHeader extends LightningElement {
    
    @api headers = [];

}