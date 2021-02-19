/**
 * custom component for displaying 
 * any given list of records as cards
 * ---------------------------------
 * desktop | mobile
 * ---------------------------------
 * Mihir Singh
 */
import { api, LightningElement } from 'lwc';

export default class RecordsListView extends LightningElement {

    @api recordData;

}