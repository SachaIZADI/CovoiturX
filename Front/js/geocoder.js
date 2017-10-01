function LocaliserDepart(etat) {
    if (etat==true){
        navigator.geolocation.getCurrentPosition(onSuccessDepart, onError, {maximumAge: 10000, timeout: 3000, enableHighAccuracy: true});
    }
    else{
        navigator.geolocation.getCurrentPosition(onSuccessDepart_d, onError, {maximumAge: 10000, timeout: 3000, enableHighAccuracy: true});
    }
}
function LocaliserArrivee(etat) {
    if (etat==true){
        navigator.geolocation.getCurrentPosition(onSuccessArrivee, onError, {maximumAge: 10000, timeout: 3000, enableHighAccuracy: true});
    }
    else{
        navigator.geolocation.getCurrentPosition(onSuccessArrivee_d, onError, {maximumAge: 10000, timeout: 3000, enableHighAccuracy: true});
    }
    }
function onSuccessDepart_d(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    coordinates_to_address(lat, lng,'#d_depart');
}
function onSuccessDepart(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    coordinates_to_address(lat, lng,'#depart');
}
function onSuccessArrivee(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    coordinates_to_address(lat, lng,'#arrivee');
}
function onSuccessArrivee_d(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    coordinates_to_address(lat, lng,'#d_arrivee');
}
function onError() {
    alert('Impossible de vous localiser');
}

function coordinates_to_address(lat, lng, id) {
    var geocoder = new google.maps.Geocoder;
    var latlng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({'latLng': latlng}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

                $(id).val(results[1].formatted_address);
            } else {
                alert('No results found');
            }
        } else {
            var error = {
                'ZERO_RESULTS': ''
            }

            // alert('Geocoder failed due to: ' + status);
            $('#potentiel_message_erreur').html('<span class="color-red">' + error[status] + '</span>');
        }
    });
}

