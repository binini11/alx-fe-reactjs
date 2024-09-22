import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const ProfileRoutes = () => (
  <Routes>
    <Route path="/" element={<Profile />}>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
  </Routes>
);

export default ProfileRoutes;
