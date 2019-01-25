//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========

function test_checkHumbrId(testValue, expResult) {
    "use strict";

    let isValid = checkHumbrId(testValue);
    let resultString = "";
    let resultArea = document.getElementById("data");

    resultString += "Value tested: " + testValue + " Expected result: " + expResult;

    if (isValid == expResult) {
        resultString += " <span class=\"pass\">" + "==PASSED=="  + "</span><br>";
    }
    else {
        resultString += " <span class=\"fail\">" + "==FAILED==" + "</span><br>";
    }

    data.innerHTML += resultString;
}

function initPage() {
    // TEST TO PASS
    test_checkHumbrId("n00000000", false);
    test_checkHumbrId("N00000000", true);

    // TEST TO FAIL
    test_checkHumbrId("N000000000", false);
    test_checkHumbrId("aaaaa", false);

    // BOUNDARY TESTING
    test_checkHumbrId("n0000000", false);
    test_checkHumbrId("n9999999", false);
    test_checkHumbrId("a00000000", false);
    test_checkHumbrId("a99999999", false);
    test_checkHumbrId("NN00000000", false);
    test_checkHumbrId("nn99999999", false);
}

window.onload = initPage;