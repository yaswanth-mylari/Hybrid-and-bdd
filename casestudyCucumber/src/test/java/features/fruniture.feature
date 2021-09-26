Feature: Furniture prices feature
Scenario Outline: To get minimum prices of all categories in furniture
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on all furniture
And click on study room tables
And get all minimum prices under popular categories


Examples:
|browser															|
|chrome																|
