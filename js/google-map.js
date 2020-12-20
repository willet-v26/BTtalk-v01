function initMap(){
  // Map options
  var options = {
    zoom:12,
    center:{lat:51.138216,lng:17.084644}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // // Listen for click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //   // Add marker
  //   addMarker({coords:event.latLng});
  // });

  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */

  // Array of markers
  var markers = [
    {
      coords:{lat:51.1441425,lng:17.1310770},
      iconImage:'img/buttons/BTtalk-google-map.png',
      content:'<h3>Zespół Szkolno - Przedszkolny nr 3</h3><h4>ul. Inflancka 13</h4>'
    },
    {
      coords:{lat:51.132868,lng:17.079374},
      iconImage:'img/buttons/BTtalk-google-map.png',
      content:'<h3>Szkoła Podstawowa nr 7</h3> <h4>Aleja Brücknera 12</h4>'
    },
    // {
    //   coords:{lat:51.120636,lng:17.055739},
    //   iconImage:'img/buttons/BTtalk-google-map.png',
    //   // iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //   content:'<h3>Szkoła Podstawowa nr 1</h3><h4>ul. Nowowiejska 78</h4>'
    // },
  ];

  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}
