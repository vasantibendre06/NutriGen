import React, { useEffect, useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate();
  const password = useRef(null);
  const [isSignUpForm, setisSignUpForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState();
  const handleToggle = () => {
    setisSignUpForm(!isSignUpForm);
  };

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

  const handleAuthentication = () => {
    const message = checkValidate(email.current.value, password.current.value);
    seterrorMessage(message);

    if (isSignUpForm === true) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
        });
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={(e) => e.preventDefault()} className="w-[20%]">
          <h1 className="text-center text-2xl">Welcome to the Nutirgen</h1>
          <h2 className="text-center text-lg">
            {isSignUpForm ? "Please Signed Up" : "Login "}
          </h2>
          <div>
            <label htmlFor="">Email</label>
            <input
              ref={email}
              className="block bg-gray-300 w-full  px-2 py-1 mt-2 rounded-md"
              type="email"
            />
          </div>
          {isSignUpForm && (
            <div className="mt-4">
              <label htmlFor="">Name</label>
              <input
                ref={name}
                className="block bg-gray-300 w-full  px-2 py-1 mt-2 rounded-md"
                type="email"
              />
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="">Password</label>
            <input
              ref={password}
              className="block bg-gray-300 w-full px-2 py-1 mt-2 rounded-md"
              type="password"
            />
          </div>
          <button
            onClick={handleAuthentication}
            className="bg-purple-300 py-2 w-full mt-2 text-white"
          >
            {isSignUpForm ? "SignUp" : "Login"}
          </button>
          <p>{errorMessage}</p>
          <p className="mt-4 text-center">
            {isSignUpForm
              ? "Already have an Account ? "
              : "Please Create an Account ? "}{" "}
            <span
              onClick={handleToggle}
              className="hover:underline cursor-pointer"
            >
              {isSignUpForm ? "Login" : "Sign Up "}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
