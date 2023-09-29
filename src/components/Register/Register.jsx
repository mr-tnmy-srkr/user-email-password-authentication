import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

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
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const user = result.user;
        console.log(result.user);
        setRegistrationSuccess("User created successfully");

        // ...
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
    <div className="w-[60vw] mx-auto">
      <div className="mx-auto">
        <h2 className="text-3xl my-4">Register</h2>
        <div>
          <form onSubmit={handleRegister}>
            <input
              className="mb-4 w-3/4 py-2 px-4"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
              required
            />
            <br />
            <input
              className="mb-4 w-3/4 py-2 px-4 relative"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute top-[31%] right-[36%]">
              {showPassword ? (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              ) : (
                <AiFillEye></AiFillEye>
              )}
            </span>
            <br />
            <input
              className="mb-4 w-3/4 btn btn-secondary"
              type="submit"
              value="Register"
            />
          </form>
          {errorCode && <p className="text-yellow-800">Error: {errorCode}</p>}

          {registerError && <p className="text-red-700">{registerError}</p>}

          {registrationSuccess && (
            <p className="text-green-600">{registrationSuccess}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
