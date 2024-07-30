import React, { useState } from "react";

import { register } from "./Redux/profile/ProfileSlice"; // Importing the register action from the profile slice
import { useDispatch } from "react-redux"; // Importing useDispatch hook from Redux
import toast, { Toaster } from "react-hot-toast"; // Importing toast for notifications and Toaster component for displaying toasts

const Registration = () => {
  const dispatch = useDispatch(); // Initializing the dispatch function
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    number: "",
    city: "",
    state: "",
    country: "",
  }); // State to store the form data

  const notifySuccess = () => toast("Account Created Successfully"); // Function to display a success notification
  const notifyError = () => toast("Please enter all required data"); // Function to display an error notification if required fields are missing
  // console.log(userData);

  function SaveData(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const missingFields = Object.keys(userData).filter((key) => !userData[key]);

    if (!missingFields.length) {
      // Check if the 'country' field is filled
      dispatch(register(userData)); // Dispatch the register action with the user data
      notifySuccess(); // Display success notification
    } else {
      notifyError(); // Display error notification if 'country' is not filled
    }
  }

  return (
    <div className="flex lg:px-0 px-2 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={(e) => SaveData(e)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                value={userData.firstname}
                onChange={(e) =>
                  setUserData({ ...userData, firstname: e.target.value })
                }
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
                type="text"
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="age">
                Age
              </label>
              <input
                value={userData.age}
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
                name="age"
                type="number"
                id="age"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Age"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                value={userData.number}
                onChange={(e) =>
                  setUserData({ ...userData, number: e.target.value })
                }
                type="tel"
                id="mobile"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="city">
                City
              </label>
              <input
                value={userData.city}
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
                type="text"
                id="city"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="City"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="state">
                State
              </label>
              <input
                value={userData.state}
                onChange={(e) =>
                  setUserData({ ...userData, state: e.target.value })
                }
                type="text"
                id="state"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="State"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="country">
                Country
              </label>
              <input
                value={userData.country}
                onChange={(e) =>
                  setUserData({ ...userData, country: e.target.value })
                }
                type="text"
                id="country"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Country"
              />
            </div>
          </div>
          <button
            // onClick={notify}
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Registration;
