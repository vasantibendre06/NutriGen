import React,{useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Body = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              navigate("/nutrigen")
            } else {
              // User is signed out
              // ...
              navigate("/");
            }
          });
      }, []);
  return (
    <div>
      <h1>Welcome to the body</h1>
    </div>
  )
}

export default Body
