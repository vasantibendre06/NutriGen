import React from 'react'
import { db } from "../utils/firebase";
import { ref, onValue, child } from "firebase/database";

const FoodApp = () => {
    const handleDB = async () => {
            const dbRef = ref(db, "recipies");
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
            });
    }
  return (
    <>
    <div className='flex items-center justify-center h-[30vh]'>
        <div className=''>
            <input className=' bg-gray-200 w-[40rem] outline-none px-2 rounded-md py-2 ' type="text" placeholder='search your recipeis' />
            <button onClick={handleDB} className='border px-2 py-2 bg-black text-white hover:shadow-xl cursor-pointer transition-all delay-100 duration-100'>Search</button>
        </div>
    </div>
    </>
  )
}

export default FoodApp
