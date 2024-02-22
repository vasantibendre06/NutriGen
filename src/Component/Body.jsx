import React,{useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { db } from '../utils/firebase';
import { ref , onValue, child } from 'firebase/database';

const Body = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              navigate("/nutrigen")
            } else {
              // User is signed out
              // ...
              navigate("/");
            }
          });
      }, []);

      const handleDB = async () => {
        const dbRef = ref(db, "recipies");
        onValue(dbRef, (snapshot) => {
          let record = []
          snapshot.forEach(childSnapShot => {
            let keyName = childSnapShot.key;
            let data = childSnapShot.val();
            console.log(data);
          })
        });
      }
  return (
    <div>
      <h1 onClick={handleDB}>Welcome to the body</h1>
    </div>
  )
}

export default Body
