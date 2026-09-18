import { useEffect, useRef } from "react";

const MapMarker = ({ map, text, position }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (!map || !window.google) return;

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position,
      title: text,
    });

    markerRef.current = marker;

    return () => {
      marker.map = null;
    };
  }, [map, position, text]);

  return null;
};

export default MapMarker;
