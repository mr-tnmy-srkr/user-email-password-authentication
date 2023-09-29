const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
            />
            <br />
            <input
              className="mb-4 w-3/4 py-2 px-4"
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
            <br />
            <input
              className="mb-4 w-3/4 btn btn-secondary"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
