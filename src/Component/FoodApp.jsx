import React from "react";
import { db } from "../utils/firebase";
import { get, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/RecipieSlice";

const FoodApp = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.recipie.recipieData);
  const handleDB = () => {
    get(ref(db)).then((snapshot) => {
      dispatch(addData(snapshot.val()));
    });
  };
  return (
    <>
      <div className="flex items-center justify-center h-[30vh]">
        <div className="">
          <input
            className=" bg-gray-200 w-[40rem] outline-none px-2 rounded-md py-2 "
            type="text"
            placeholder="search your recipeis"
          />
          <button
            onClick={handleDB}
            className="border px-2 py-2 bg-black text-white hover:shadow-xl cursor-pointer transition-all delay-100 duration-100"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center px-5 py-5">
        <div className="left bg-orange-300 w-[350px] h-[50vh]">
          <div className="flex items-center space-x-3">
            <img
              className="w-[40px] h-[40px] rounded-full  "
              src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
              alt=""
            />
            <div>
              <h1>Hello image</h1>
              <h2>by Vasanti Beadre</h2>
            </div>
          </div>
        </div>
        <div className="right bg-black w-[350px] h-[50vh]  "></div>
      </div>
    </>
  );
};

export default FoodApp;
