/**
* name: RecordsListModifier
* author: Mihir Singh
* createDate: 22-02-2021
* for-desktop: yes
* for-mobile: yes
* description: search and filter modifiers for recordsListView
*/
import { LightningElement, track } from 'lwc';

export default class RecordsListModifier extends LightningElement {

    @track isFilter;
    @track filter = {
        searchBy: null,
        openedOnFrom: null,
        openedOnTo: null,
        status: null,
        priority: null
    };
    
    get filterStatusOptions() {
        return [
            {label: 'To Be Assigned', value: 'To Be Assigned'},
            {label: 'In Progress', value: 'In Progress'},
            {label: 'Closed', value: 'Closed'},
            {label: 'Hold', value: 'Hold'},
            {label: 'Re-Opened', value: 'Re-Opened'},
            {label: 'Escalated', value: 'Escalated'},
            {label: 'In Pipeline', value: 'In Pipeline'},
            {label: 'Pending With Salesforce', value: 'Pending With Salesforce'},
            {label: 'Pending Customer Reply', value: 'Pending Customer Reply'},
            {label: 'Customer Replied', value: 'Customer Replied'},
        ];
    }

    get filterPriorityOptions() {
        return [
            {label: 'P1', value: 'P1'},
            {label: 'P2', value: 'P2'},
            {label: 'P3', value: 'P3'}
        ];
    }

    handleSearchInput(event) {
        this.filter[event.target.name] = event.target.value;
        if(this.filter.searchBy != null || this.filter.openedOnFrom || this.filter.openedOnTo || this.filter.status || this.filter.priority) {
            const filterEvent = new CustomEvent('filter', {
                detail: JSON.parse(JSON.stringify(this.filter))
            });
    
            this.dispatchEvent(filterEvent);
        }
    }

    toggleFilter() {
        this.isFilter = !this.isFilter;
    }

    handleRefresh() {
        this.filter = {
            searchBy: null,
            openedOnFrom: null,
            openedOnTo: null,
            status: null,
            priority: null
        };
        this.isFilter = false;
        const refreshEvent = new CustomEvent('refresh');
        this.dispatchEvent(refreshEvent);
    }

}