import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/components.css";

function MapView({ locations }) {
  useEffect(() => {
    const map = L.map("map").setView([41.9028, 12.4964], 5); // Italia come default

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    if (locations) {
      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lng]).addTo(map)
          .bindPopup(`<b>${loc.title}</b><br>${loc.author}`);
      });
    }

    return () => {
      map.remove();
    };
  }, [locations]);

  return <div id="map" style={{ height: "400px", margin: "20px 0" }}></div>;
}

export default MapView;