import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [profile, setProfile] = useState(null);
  

  useEffect(() => {
    !profile &&
    setProfile(JSON.parse(localStorage.getItem("userdetails")))
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* Display other profile information */}
    </div>
  );
}

export default UserProfile;