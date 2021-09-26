
Feature: dropdowns feature
Scenario Outline: Verify dreamlite matress is present in matress by range
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on matress by range
And check if "Dreamlite Mattress" is present 

Examples:
|browser															|
|chrome																|

Scenario: Get the first mirror price in wall mirrors
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on wall mirrors
And click on instock only
And print first mirror name and cost

Scenario: filter the king size beds by Price
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on  kingsize beds
And Set any price limit to filter products

Scenario: get malabar sofa dimensions
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on wodden sofa sets under sale
And view malabar sofaset product
And get 3 seater dimensions in description
