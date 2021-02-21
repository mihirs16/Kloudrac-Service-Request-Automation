/**
* name: recordsListView
* author: Mihir Singh
* create-date: 2021-02-21
* for-desktop: yes
* for-mobile: yes
* Description: child component of recordsListView to display rows
*/
import { api, LightningElement } from 'lwc';

export default class RecordsListView extends LightningElement {

    @api headers = [];
    @api rows = [];

}