import React, { useRef, useState } from "react";
import { Gender, HealthIssues, personType } from "../utils/constant";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { db2 } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [selectedHealthIssues, setSelectedHealthIssues] = useState([]);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const height = useRef(null);
  const familyMembers = useRef(null);
  const weight = useRef(null);
  const genderType = useRef(null);
  const familyType = useRef(null);

  const handleHealthIssueChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedHealthIssues((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedHealthIssues((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleDatabase = () => {
    if (firstName.current.value === "") {
      alert("please complete your profile");
    } else {
      addDoc(collection(db2, "users"), {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        userWeight: weight.current.value,
        userHeight: height.current.value,
        gender: genderType.current.value,
        issues: selectedHealthIssues,
        email: user.email,
      });
      alert("data successfully added");
      navigate("/nutrigen/app");
    }
  };

  return (
    <>
      <div className="flex items-center font-poppins justify-center min-h-[100vh] h-auto w-full">
        <div className=" w-[30rem] px-5 py-5">
          <h1 className="text-center capitalize text-2xl font-bold">
            please complete your profile
          </h1>
          <form className="mt-5" onSubmit={(e) => e.preventDefault()} action="">
            <div>
              <label className="font-bold" htmlFor="">
                First Name
              </label>
              <input
                ref={firstName}
                className="block bg-gray-300 rounded-md w-full mt-2 px-2 py-2 outline-none"
                type="text"
                placeholder="first Name"
              />
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                Last Name
              </label>
              <input
                ref={lastName}
                className="block bg-gray-300 rounded-md  mt-2 w-full px-2 py-2 outline-none"
                type="text"
                placeholder="last Name"
              />
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                E-mail
              </label>
              <input
                className="block bg-gray-300 rounded-md  mt-2 w-full px-2 py-2"
                type="email"
                readOnly
                placeholder={user === null ? "NA" : user.email}
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                Height
              </label>
              <input
                ref={height}
                className="block bg-gray-300 rounded-md  mt-2 w-full px-2 py-1"
                type="number"
                placeholder="Height in CM"
              />
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                Weight
              </label>
              <input
                ref={weight}
                className="block bg-gray-300 rounded-md  mt-2 w-full px-2 py-1"
                type="number"
                placeholder="Weight in Kg"
              />
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                Gender
              </label>
              <select
                ref={genderType}
                className="w-full bg-gray-300 rounded-md  py-2 px-2 mt-2 outline-none "
                name="gender"
              >
                {Gender.map((items) => {
                  return (
                    <option key={items.id} value={items.genderType}>
                      {items.genderType}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                Do you have any health Issues ?
              </label>
              {HealthIssues.map((items) => {
                return (
                  <div key={items.id}>
                    <input
                      value={items.issue}
                      onChange={handleHealthIssueChange}
                      type="checkbox"
                      name={items.issue}
                    />
                    <label className="ml-2">{items.issue}</label>
                  </div>
                );
              })}
            </div>
            <div className="mt-3">
              <label className="font-bold" htmlFor="">
                Family Type
              </label>
              <select
                ref={familyType}
                className="w-full bg-gray-300 rounded-md  py-2 px-2 mt-2 outline-none "
                name="gender"
              >
                {personType.map((items) => {
                  return (
                    <option key={items.id} value={items.personType}>
                      {items.personType}
                    </option>
                  );
                })}
              </select>
            </div>
            {familyType.current && familyType.current.value === "Family" && (
              <div className="mt-3">
                <label className="font-bold" htmlFor="">
                  How Many Members ?{" "}
                </label>
                <input
                  ref={familyMembers}
                  className="block bg-gray-300 rounded-md  mt-2 w-full px-2 py-1"
                  type="number"
                  placeholder="Members"
                />
              </div>
            )}
            <button
              onClick={handleDatabase}
              className="mt-4 ml-2 border w-[20%] bg-purple-500 rounded-md  text-white cursor-pointer px-2 py-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
