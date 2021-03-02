/**
* name: TicketActionSummaryCard
* author: Mihir Singh
* createDate: 02-03-2021
* for-desktop: yes
* for-mobile: yes
* description: child component for ticketActionSummary
*/
import { api, LightningElement } from 'lwc';

export default class TicketActionSummaryCard extends LightningElement {
    @api ticket;
}