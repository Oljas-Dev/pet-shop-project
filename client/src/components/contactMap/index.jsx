import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "350px",
  borderRadius: "12px",
};

const center = {
  lat: 52.50228,
  lng: 13.358545,
};

const API_KEY = "AIzaSyDMxg1Wilzdq3w7ygV-ZLSZWy6AbqfkY18";

function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      <>
        <Marker
          position={{
            lat: center.lat,
            lng: center.lng,
          }}
        />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default ContactMap;
