import React from 'react'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-10 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div>
          <p className="text-lg"><strong>Email:</strong> {user.email}</p>
          {/* Add more user fields as needed */}
        </div>
      ) : (
        <p className="text-lg text-red-500">User data not available.</p>
      )}
    </div>
  );
}

export default Profile

