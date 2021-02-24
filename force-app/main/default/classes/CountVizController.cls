/**
* name: CountVizController
* author: Mihir Singh
* createDate: 24-02-2021
* description: controller for countViz LWC
*/
public inherited sharing class CountVizController {

    // get count for displaying in countViz
    @AuraEnabled
    public static Integer getCountToDisplay(String objectName, String filterBy, String filter){

        // build SOQL dynamically
        String soqlQuery = String.format('SELECT Id FROM {0}', new List<String>{ objectName });
        if(filterBy != 'None') soqlQuery += String.format(' WHERE {0}=:filter', new List<String>{filterBy});

        // get and count query results for the dynamic soql
        List<SObject> queryResults = Database.query(soqlQuery);
        Integer queryCount = queryResults.size();

        return queryCount;
    }
    
}
