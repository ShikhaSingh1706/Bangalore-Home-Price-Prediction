// Functions to get selected values for BHK and Bathrooms
function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i in uiBathrooms) {
        if (uiBathrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i in uiBHK) {
        if (uiBHK[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

// Function to handle price estimation
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");
    
    // Validation check for empty fields
    if (sqft === "" || bhk === -1 || bathrooms === -1 || location === "") {
        alert("Please fill in all fields before estimating the price.");
        return;
    }

    var url = "http://127.0.0.1:5000/predict_home_price"; // Use this if you are using nginx

    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    }, function (data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2> ₹" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
}

// Function to load location names dynamically
function onPageLoad() {
    console.log("Document loaded");
    var url = "http://127.0.0.1:5000/get_location_names"; // Ensure full URL
    $.get(url, function (data, status) {
        console.log("Response from server:", data);
        if (data && data.locations) {
            var locations = data.locations;
            console.log("Locations received:", locations); // Debug log
            var uiLocations = document.getElementById("uiLocations");
            uiLocations.innerHTML = ""; // Clear existing options
            uiLocations.append(new Option("Choose a Location", "", true, true));
            for (var i = 0; i < locations.length; i++) {
                var opt = new Option(locations[i]);
                uiLocations.append(opt);
            }
        }
    }).fail(function (xhr, status, error) {
        console.error("Error fetching locations:", error);
    });
}

window.onload = onPageLoad;
