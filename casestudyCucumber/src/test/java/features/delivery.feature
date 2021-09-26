Feature: Available Delivery Locations
Scenario Outline: Verify if Guntur is present in Delivery locations
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on more locations in delivery
And check if "Guntur" is present in locations


Examples:
|browser															|
|chrome																|
