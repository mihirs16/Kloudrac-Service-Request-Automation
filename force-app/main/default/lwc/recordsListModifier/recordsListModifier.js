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
    
    handleSearchInput(event) {
        this.filter.searchBy = event.target.value;
        this.handleSearch(false);
    }

    handleSearch (event) {
        if(event) event.preventDefault();
        if(this.filter.searchBy || this.filter.openedOnFrom || this.filter.openedOnTo || this.filter.status || this.filter.priority) {
            const filterEvent = new CustomEvent('filter', {
                detail: JSON.parse(JSON.stringify(this.filter)) 
            });
    
            this.dispatchEvent(filterEvent);
        }
    }

    toggleFilter() {
        this.isFilter = !this.isFilter;
    }

}