import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Importing toast for notification and Toaster component for displaying toasts
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaGlobe,
  FaLocationArrow,
  FaEdit,
} from "react-icons/fa"; // Importing FontAwesome icons for user interface
import { MdManageAccounts } from "react-icons/md"; // Importing Material Design icon for account management
import { useSelector } from "react-redux"; // Importing useSelector from Redux for accessing the store
import { store } from "./Redux/store"; // Importing the Redux store

const EditProfile = () => {
  const item = useSelector((store) => store.profile.userData); // Selecting user data from Redux store
  const notify = () => toast("Data Edited Successfully"); // Function to display a success notification

  // console.log(item);

  const [editMode, setEditMode] = useState(false); // State to toggle between edit and view mode
  const [userData, setUserData] = useState(); // State to store user data

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value }); // Updating user data based on input changes
  };

  const toggleEditMode = () => {
    notify(); // Show notification when toggling edit mode
    setEditMode(!editMode); // Toggle edit mode
  };

  useEffect(() => {
    if (item) {
      // console.log(item);
      setUserData(item); // Set initial user data from Redux store
    }
  }, [item]); // Effect runs when the item changes

  // console.log(userData);

  return (
    <div className="flex lg:px-0 px-2 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Account</h2>
        {editMode ? ( // Conditionally render form or display data based on edit mode
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                <FaUser className="inline-block mr-2" /> First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={userData.firstname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                <FaUser className="inline-block mr-2" /> Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastname"
                value={userData?.lastname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="age">
                <MdManageAccounts size={21} className="inline-block mr-2" />
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={userData?.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                <FaEnvelope className="inline-block mr-2" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData?.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="mobile">
                <FaPhone className="inline-block mr-2" /> Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="number"
                value={userData?.mobile}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="city">
                <FaCity className="inline-block mr-2" /> City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={userData?.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="state">
                <FaLocationArrow className="inline-block mr-2" /> State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={userData?.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="country">
                <FaGlobe className="inline-block mr-2" /> Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={userData?.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={toggleEditMode}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-gray-700">
                <FaUser className="inline-block mr-2" /> First Name:{" "}
                {userData?.firstname}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                <FaUser className="inline-block mr-2" /> Last Name:{" "}
                {userData?.lastname}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                <MdManageAccounts size={21} className="inline-block mr-2" />{" "}
                Age: {userData?.age}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                <FaEnvelope className="inline-block mr-2" /> Email:{" "}
                {userData?.email}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                <FaPhone className="inline-block mr-2" /> Mobile:{" "}
                {userData?.mobile}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <FaCity className="inline-block mr-2" /> City: {userData?.city}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <FaLocationArrow className="inline-block mr-2" /> State:{" "}
                {userData?.state}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <FaGlobe className="inline-block mr-2" /> Country:{" "}
                {userData?.country}
              </p>
            </div>
            <button
              type="button"
              onClick={toggleEditMode}
              className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
            >
              <FaEdit className="inline-block mr-2" /> Edit
            </button>
            <Toaster />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
