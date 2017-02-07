function intialize() {
	jsAjax();
	jqueryAjax();
	console.log(ajaxRequest);
};

function jsAjax(){
	// create a request object
	var ajaxRequest = new XMLHttpRequest();
	console.log(ajaxRequest);

	// create an event handler for the request
	ajaxRequest.onreadystatechange = function(){
		console.log(ajaxRequest.readyState);
		if (ajaxRequest.readyState == 4){
			// call the callback
			console.log(ajaxRequest.response);
			// jsCallback(ajaxRequest.response);
		}
	};

	// open the ajax request
	ajaxRequest.open('GET', 'data/MegaCities.geojson');

	// set the response type of the data
	ajaxRequest.responseType = "json";

	// send the request to the server
	ajax.send();
};

function jsCallback() {
	// add response to page as plain text
	var htmlString = "<h3>JavaScript AJAX response text:</h3>";
	htmlString += data;
	// make paragraph to hold data
	var p = document.createElement("p");
	p.innerHTML = htmlString;
	document.getElementById("mydiv").appendChild(p);
};

// ajax demo using jquery
function jqueryAjax(){
	$.getJSON("data/MegaCities.geojson", jQueryCallback);
};

function jQueryCallback(data){
	console.log(data);
	var htmlString = "<h3>JavaScript AJAX response text:</h3>";
	htmlString += JSON.stringify(data);
	$('#mydiv').append("<p>"+htmlString+"</p>");
};

window.onload = intialize();