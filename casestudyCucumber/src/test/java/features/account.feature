Feature: My Profile login/signup feature
Scenario Outline: Signup with details
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on Profile button
And click on signup 
And enter the Signup details

Examples:
|browser															|
|chrome																|

Scenario: login with details
Given inititalise the <browser> browser
When user is on "https://www.urbanladder.com/" site
Then close the popup
And click on Profile button
And click on login 
And enter the login details

