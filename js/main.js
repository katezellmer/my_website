// javascript code

// initialize function called when script is loaded
function initialize(){
    loadGeoJSON();
};

// function to load 
function loadGeoJSON() {
    $.getJSON("data/MegaCities.geojson", jQueryCallback);
}

// run script once page is loaded
window.onload = initialize();
