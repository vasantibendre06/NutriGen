import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { db } from "../utils/firebase";
import { ref, onValue, child } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/nutrigen");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);

  if (user != null) {
    setTimeout(() => {
      setShowModal(true);
    }, 5000); // 5
  }
  const handleDB = async () => {
    const dbRef = ref(db, "recipies");
    onValue(dbRef, (snapshot) => {
      let record = [];
      snapshot.forEach((childSnapShot) => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        console.log(data);
      });
    });
  };

  const ModalComponent = () => {
    return <div>This is the modal content.</div>;
  };
  return (
    <div>
      <Header />
      {showModal && <ModalComponent />}
    </div>
  );
};

export default Body;
