jQuery(document).ready(function ($) {
    //set your google maps parameters
    var $latitude = 49.286344,
        $longitude = 1.005455,
        $map_zoom = 15;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var $marker_url = new google.maps.MarkerImage('../img/marker.png', null, null, null, new google.maps.Size(40,40));

    //define the basic color of your map, plus a value for saturation and brightness
    var $main_color = '#13c4a3',
        $saturation = -20,
        $brightness = 5;

    //we define here the style of the map
    var style = [
        {
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [
                {
                    saturation: $saturation
                }
			]
		},
        { //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {
                    visibility: "off"
                }
	        ]
	    },
        {
            //don't show local road lables on the map
            featureType: "road.local",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show arterial road lables on the map
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
		//style different elements on the map
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "landscape",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]

		},
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		}
	];

    //set google map options
    var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map				
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.284909, 1.005187),
        title: 'IUT de Rouen (Elbeuf)',
        map: map,
        visible: true,
        icon: $marker_url,
        animation: google.maps.Animation.DROP,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
            map.setZoom(map.getZoom() - 1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading"><b>IUT de Rouen (Site Elbeuf)</b></h1>' +
        '<div id="bodyContent">' +
        '<p>Université de Rouen </p>' +
        '<p>24 Cours Gambetta, 76500 Elbeuf</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);
});