$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
formatter.feature({
  "line": 1,
  "name": "My Profile login/signup feature",
  "description": "",
  "id": "my-profile-login/signup-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Signup with details",
  "description": "",
  "id": "my-profile-login/signup-feature;signup-with-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on signup",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter the Signup details",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "my-profile-login/signup-feature;signup-with-details;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "my-profile-login/signup-feature;signup-with-details;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "my-profile-login/signup-feature;signup-with-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Signup with details",
  "description": "",
  "id": "my-profile-login/signup-feature;signup-with-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on signup",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter the Signup details",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 3423377300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 2661526700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 9282267000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_profile_button()"
});
formatter.result({
  "duration": 153844400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_signup()"
});
formatter.result({
  "duration": 39237400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_signup_details()"
});
formatter.result({
  "duration": 2340858800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login with details",
  "description": "",
  "id": "my-profile-login/signup-feature;login-with-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter the login details",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrowser\u003e",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 1254411400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 3191713000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 8538003200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_profile_button()"
});
formatter.result({
  "duration": 167235200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_login()"
});
formatter.result({
  "duration": 34321900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_login_details()"
});
formatter.result({
  "duration": 1344192000,
  "status": "passed"
});
formatter.uri("delivery.feature");
formatter.feature({
  "line": 1,
  "name": "Available Delivery Locations",
  "description": "",
  "id": "available-delivery-locations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Verify if Guntur is present in Delivery locations",
  "description": "",
  "id": "available-delivery-locations;verify-if-guntur-is-present-in-delivery-locations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on more locations in delivery",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "check if \"Guntur\" is present in locations",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "available-delivery-locations;verify-if-guntur-is-present-in-delivery-locations;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "available-delivery-locations;verify-if-guntur-is-present-in-delivery-locations;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "available-delivery-locations;verify-if-guntur-is-present-in-delivery-locations;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify if Guntur is present in Delivery locations",
  "description": "",
  "id": "available-delivery-locations;verify-if-guntur-is-present-in-delivery-locations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on more locations in delivery",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "check if \"Guntur\" is present in locations",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2186540100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 2643446200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 9097955600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_more_locations_in_delivery()"
});
formatter.result({
  "duration": 41249200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guntur",
      "offset": 10
    }
  ],
  "location": "stepDefination.check_if_something_is_present_in_locations(String)"
});
formatter.result({
  "duration": 4624735500,
  "status": "passed"
});
formatter.uri("dropdowns.feature");
formatter.feature({
  "line": 2,
  "name": "dropdowns feature",
  "description": "",
  "id": "dropdowns-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify dreamlite matress is present in matress by range",
  "description": "",
  "id": "dropdowns-feature;verify-dreamlite-matress-is-present-in-matress-by-range",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on matress by range",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if \"Dreamlite Mattress\" is present",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "dropdowns-feature;verify-dreamlite-matress-is-present-in-matress-by-range;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "dropdowns-feature;verify-dreamlite-matress-is-present-in-matress-by-range;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "dropdowns-feature;verify-dreamlite-matress-is-present-in-matress-by-range;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify dreamlite matress is present in matress by range",
  "description": "",
  "id": "dropdowns-feature;verify-dreamlite-matress-is-present-in-matress-by-range;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "inititalise the chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on matress by range",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if \"Dreamlite Mattress\" is present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2067452900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 4002381800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 8045001600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_matress_by_range()"
});
formatter.result({
  "duration": 5213831300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dreamlite Mattress",
      "offset": 10
    }
  ],
  "location": "stepDefination.check_if_is_present(String)"
});
formatter.result({
  "duration": 49605500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the first mirror price in wall mirrors",
  "description": "",
  "id": "dropdowns-feature;get-the-first-mirror-price-in-wall-mirrors",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on wall mirrors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on instock only",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "print first mirror name and cost",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrowser\u003e",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2522089600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 3832798700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 9637075600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_wall_mirrors()"
});
formatter.result({
  "duration": 1644664300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_instock_only()"
});
formatter.result({
  "duration": 3386798400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.print_first_mirror_name_and_cost()"
});
formatter.result({
  "duration": 54357800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "filter the king size beds by Price",
  "description": "",
  "id": "dropdowns-feature;filter-the-king-size-beds-by-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on  kingsize beds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Set any price limit to filter products",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrowser\u003e",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2495783400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 11936891200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 5117375600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_kingsize_beds()"
});
formatter.result({
  "duration": 2833272600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.set_any_price_limit_to_filter_products()"
});
formatter.result({
  "duration": 469183000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "get malabar sofa dimensions",
  "description": "",
  "id": "dropdowns-feature;get-malabar-sofa-dimensions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click on wodden sofa sets under sale",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "view malabar sofaset product",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "get 3 seater dimensions in description",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrowser\u003e",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 1782617700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 2477130700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 9621587600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_wodden_sofa_sets_under_sale()"
});
formatter.result({
  "duration": 5262413200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.view_malabar_sofaset_product()"
});
formatter.result({
  "duration": 153778400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.get_3_seater_dimensions_in_description()"
});
formatter.result({
  "duration": 5357183500,
  "status": "passed"
});
formatter.uri("featuredLinks.feature");
formatter.feature({
  "line": 1,
  "name": "Header featurelinks feature",
  "description": "",
  "id": "header-featurelinks-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Verify if any email is present for contact",
  "description": "",
  "id": "header-featurelinks-feature;verify-if-any-email-is-present-for-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on help button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "go to contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify if \"sourcing@urbanladder.com\" is present",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "header-featurelinks-feature;verify-if-any-email-is-present-for-contact;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "header-featurelinks-feature;verify-if-any-email-is-present-for-contact;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "header-featurelinks-feature;verify-if-any-email-is-present-for-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify if any email is present for contact",
  "description": "",
  "id": "header-featurelinks-feature;verify-if-any-email-is-present-for-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on help button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "go to contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify if \"sourcing@urbanladder.com\" is present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2376348300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 5159873500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 8008701600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_help_button()"
});
formatter.result({
  "duration": 1171368500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.go_to_contact_us_page()"
});
formatter.result({
  "duration": 830339100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourcing@urbanladder.com",
      "offset": 11
    }
  ],
  "location": "stepDefination.verify_if_something_is_present(String)"
});
formatter.result({
  "duration": 63105600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get JPnagar store address",
  "description": "",
  "id": "header-featurelinks-feature;get-jpnagar-store-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on store",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on JPnagar card",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "get the address",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrowser\u003e",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2043297100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 3122529800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 9195630400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_store()"
});
formatter.result({
  "duration": 3882571100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_jpnagar_card()"
});
formatter.result({
  "duration": 2389292700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.get_the_address()"
});
formatter.result({
  "duration": 67888500,
  "status": "passed"
});
formatter.uri("fruniture.feature");
formatter.feature({
  "line": 1,
  "name": "Furniture prices feature",
  "description": "",
  "id": "furniture-prices-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "To get minimum prices of all categories in furniture",
  "description": "",
  "id": "furniture-prices-feature;to-get-minimum-prices-of-all-categories-in-furniture",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the \u003cbrowser\u003e browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on all furniture",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on study room tables",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "get all minimum prices under popular categories",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "furniture-prices-feature;to-get-minimum-prices-of-all-categories-in-furniture;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 12,
      "id": "furniture-prices-feature;to-get-minimum-prices-of-all-categories-in-furniture;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 13,
      "id": "furniture-prices-feature;to-get-minimum-prices-of-all-categories-in-furniture;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "To get minimum prices of all categories in furniture",
  "description": "",
  "id": "furniture-prices-feature;to-get-minimum-prices-of-all-categories-in-furniture;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "inititalise the chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on \"https://www.urbanladder.com/\" site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on all furniture",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on study room tables",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "get all minimum prices under popular categories",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "stepDefination.inititalise_the_browser(String)"
});
formatter.result({
  "duration": 2091559300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 12
    }
  ],
  "location": "stepDefination.user_is_on_something_site(String)"
});
formatter.result({
  "duration": 3536295000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_popup()"
});
formatter.result({
  "duration": 10149163300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_all_furniture()"
});
formatter.result({
  "duration": 4645680500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_study_room_tables()"
});
formatter.result({
  "duration": 230620900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.get_all_minimum_prices_under_popular_categories()"
});
formatter.result({
  "duration": 214704800,
  "status": "passed"
});
});