Feature: Header featurelinks feature
Scenario Outline: Verify if any email is present for contact
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on help button
And go to contact us page
And verify if "sourcing@urbanladder.com" is present

Examples:
|browser															|
|chrome																|

Scenario: Get JPnagar store address
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on store
And click on JPnagar card
And get the address

