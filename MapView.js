import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ selectedProfile }) => {
  if (!selectedProfile) return <p>Select a profile to see the location</p>;

  const { lat, lng } = selectedProfile.address.geo;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>{selectedProfile.name}'s Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
