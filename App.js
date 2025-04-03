import { useState } from "react";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="app-container">
      <ProfileList onSelect={setSelectedProfile} />
      <MapView selectedProfile={selectedProfile} />
    </div>
  );
}

export default App;
