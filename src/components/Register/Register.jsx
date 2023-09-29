import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name,email, password, accepted);

    //reset error
    setRegisterError("");
    setErrorCode("");
    setRegistrationSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      return setRegisterError(
        "Your password should be at least one upper case character."
      );
    } else if (!accepted) {
      setRegisterError("Please accept our T&C");
      return;
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const user = result.user;
        console.log(result.user);
        setRegistrationSuccess("User created successfully");

// update profile
updateProfile(result.user, {
  displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  console.log('profile updated');
}).catch((error) => {
  // An error occurred
  console.log(error);
});

        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("please check your email and verify your account");
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        setRegisterError(error.message);
        setErrorCode(error.code);
        // ..
      });
  };

  return (
    <div className="w-[60vw] mt-24 mx-auto">
      <div className="mx-auto ">
        <h2 className="text-3xl text-center my-4">Register Now</h2>
        <div className="">
          <form onSubmit={handleRegister}>
          <input
              className="mb-4 w-full py-2 px-4 rounded-lg"
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
              required
            />
          <br />
            <input
              className="mb-4 w-full py-2 px-4 rounded-lg"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
              required
            />
            <br />
            <div className="relative">
              <input
                className="mb-4 w-full py-2 px-4  rounded-lg"
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                placeholder="Enter password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-2xl absolute top-[15%] right-[3%]"
              >
                {showPassword ? (
                  <AiFillEyeInvisible></AiFillEyeInvisible>
                ) : (
                  <AiFillEye></AiFillEye>
                )}
              </span>
            </div>

            <div
              className="
            mb-3"
            >
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="ml-2">
                <a href="">Accept our t&c</a>
              </label>
            </div>

            <div>
              <input
                className="mb-4 w-full btn btn-secondary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          {errorCode && <p className="text-yellow-800">Error: {errorCode}</p>}

          {registerError && <p className="text-red-700">{registerError}</p>}

          {registrationSuccess && (
            <p className="text-green-600">{registrationSuccess}</p>
          )}
          <p>
            Already <h5></h5>ave an account? please{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
