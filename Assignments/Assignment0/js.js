
/**
 * @author Alex Vasil
 * 
 * Calls both JSON and XML functions, shows
 * both XML and JSON server time.
 */
function makeAjaxCallBoth() {
    makeAjaxCallJson();
    makeAjaxCallXml();
}

/**
 * @author Alex Vasil
 * 
 * Makes an ajax call with JSON data, shows
 * the server time on the page.
 */
function makeAjaxCallJson() {
    $.ajax({
        type: "GET",
        url: "https://cstutoring.ca/servertime.php?format=JSON",
        datatype: "JSON",

        success: function (response) {
            _parsedJson = JSON.parse(response);
            document.getElementById("AjaxDates").innerHTML += 
            "JSON Date: " + _parsedJson.date + "<br>";

        }
    });
}

/** 
 * @author Alex Vasil
 * 
 * Makes an ajax call with XML data, shows
 * the server time on the page.
 */
function makeAjaxCallXml() {
    $.ajax({
        type: "GET",
        url: "https://cstutoring.ca/servertime.php",
        datatype: "xml",

        success: function (response) {
            var _date = $(response).find("date").text();
            document.getElementById("AjaxDates").innerHTML += 
            "XML Date: " + _date + "<br>";
        }
    });
}