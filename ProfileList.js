import { useEffect, useState } from "react";
import axios from "axios";

const ProfileList = ({ onSelect }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setProfiles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} onClick={() => onSelect(profile)}>
            {profile.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
