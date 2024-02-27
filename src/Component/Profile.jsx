import React, { useState } from "react";

const Profile = () => {
  const [personType, setpersonType] = useState("");
  return (
    <div className="flex items-center justify-center h-[100vh] w-[60%] mx-auto ">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <h1 className="text-center">To Complete Your Profile </h1>
        <div className="mt-4">
          <label htmlFor="">Full Name</label>
          <input
            className="block mt-2 outline-none px-2 rounded-md bg-gray-300 w-full py-1 "
            type="text"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Age</label>
          <input
            className="block outline-none px-2 rounded-md bg-gray-300 w-full py-1 mt-2"
            type="text"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Weight</label>
          <input
            className="block bg-gray-300 outline-none  w-full rounded-md py-1 mt-2"
            type="text"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">height</label>
          <input
            className="block bg-gray-300 outline-none  w-full rounded-md py-1 mt-2"
            type="text"
          />
        </div>
        <div className="mt-2">
          <label>Gender : </label>
          <select className="w-full rounded-md py-2 px-2 mt-2" name="" id="">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="">Person Type</label>
          <select
            onChange={(e) => setpersonType(e.currentTarget.value)}
            className="w-full py-2 px-2 mt-2"
            name=""
            id=""
          >
            <option value="">Chooose the value</option>
            <option value="Family">Family</option>
            <option value="Individual">Individual</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-bold" htmlFor="">
            Do you have any Health Issues
          </label>
          <div>
            <input type="checkbox" /> Thyroid
          </div>
          <div>
            <input type="checkbox" /> Blood Pressure
          </div>
          <div>
            <input type="checkbox" /> Diabetes
          </div>
        </div>
        {personType === "Family" && (
          <div
            className="
       mt-4"
          >
            <label htmlFor="">How Many Members</label>
            <input
              className="block w-full bg-gray-300 py-2 px-2 mt-2 outline-none"
              type="number"
              placeholder="enter your family member"
            />
          </div>
        )}
        {personType === "Family" && (
          <button className="border bg-purple-400 text-white py-2 mt-2 rounded-md px-2 w-full">
            Add person details
          </button>
        )}
        {personType === "Individual" && (
          <button className="border bg-purple-400 text-white py-2 mt-2 rounded-md px-2 w-full">Submit your details</button>
        )}
      </form>
    </div>
  );
};

export default Profile;
