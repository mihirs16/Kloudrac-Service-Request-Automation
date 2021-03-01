/**
* name: recentCommentsCard
* author: Mihir Singh
* createDate: 26-02-2021
* for-desktop: yes
* for-mobile: yes
* description: child of recentComments for displaying each recent comment
*/
import { api, LightningElement, track } from 'lwc';

export default class RecentCommentsCard extends LightningElement {
    @api ticket;
}