import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {

    const [registerError, setRegisterError] = useState("");
    const [errorCode, setErrorCode] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState("");

    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        //add validation
 //reset error
 setRegisterError("");
 setErrorCode("");
 setRegistrationSuccess("");


        // firebase theke
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            // const user = userCredential.user;
            // ...
            console.log(result.user);
            setRegistrationSuccess("Logged in successful")
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error(error);
            setRegisterError(error.message)
            setErrorCode(error.code)
          });
    }
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                
            {errorCode && <p className="text-yellow-800">Error: {errorCode}</p>}

{registerError && <p className="text-red-700">{registerError}</p>}

{registrationSuccess && (
  <p className="text-green-600">{registrationSuccess}</p>
)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
