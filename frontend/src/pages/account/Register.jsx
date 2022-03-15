import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function Register() {
  // to navigate to login
  const navigate = useNavigate();

  // input state & error msg 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  // register user
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Invalid Email !");
      return;
    }
    else if (password === "") {
      setError("Invalid Password !");
      return;
    }
    else if (password !== passwordConfirm) {
      setError("Passwords do not match !");
      return;
    }

    setLoading(true);
    try {
      await signup(email, password);
      // go to account page
    }
    catch (error) {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        setError("Invalid Email !");
      } else if (errorCode === 'auth/email-already-in-use') {
        setError("Email is already in use !");
      } else if (errorCode === 'auth/weak-password') {
        setError("Password must be at least 6 letters !");
      } else {
        setError(errorCode);
      }
    }
    setLoading(false);
  }

  // error message duration
  useEffect(() => {
    if (error !== "") {
      let errorDisplayTimer = setTimeout(() => setError(""), 3000);
      return () => {
        clearTimeout(errorDisplayTimer);
      };
    }
  }, [error]);


  return (
    <div className="container p-4 mt-4">
      {/* Register form */}
      <div className="flex flex-col justify-center items-center gap-8">
        {/* Title */}
        <h1 className="text-2xl font-bold">
          Sign up
        </h1>

        {/* Register with email & password */}
        <form className="w-full flex flex-col gap-4 ">
          {/* Display error message */}
          <div className={"w-full py-2 border-2 border-red-300 text-red-700 text-center font-semibold bg-red-200 rounded transition-all duration-150 delay-50 "
            + (error === "" ? " h-0 overflow-hidden opacity-0 " : " opacity-1 ")
          }>
            {error}
          </div>
          {/* Email */}
          <input className="w-full px-4 py-2 border border-gray-300 rounded "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password */}
          <input className="w-full px-4 py-2 border border-gray-300 rounded "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Confirm Password */}
          <input className="w-full px-4 py-2 border border-gray-300 rounded "
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {/* Register button */}
          <button className="w-full py-2 text-white font-bold bg-orange-500 rounded"
            onClick={handleRegisterClick}
            disabled={loading}
          >
            Register
          </button>
        </form>

        {/* Register with other methods */}
        <div className="w-full flex flex-col items-center gap-4">
          {/* Or login with Text divider */}
          <div className="w-4/5 flex flex-row justify-center items-center">
            <div className="flex-1 border-t border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm ">
              Or Signup with
            </span>
            <div className="flex-1 border-t border-gray-300" />
          </div>

          {/* Other registration methods */}
          <div className="w-full py-2  bg-gray-200 text-center text-black rounded">
            Google
          </div>
          <div className="w-full py-2 bg-gray-200 text-center text-black rounded">
            Facebook
          </div>
        </div>
      </div >

      {/* Signin account button */}
      < div className="mt-16 text-center flex flex-col gap-4 justify-center items-center " >
        {/* Sign Up */}
        < h1 className="text-sm text-gray-400" >
          Already have an account ?
        </h1 >
        <button className="w-full py-2 bg-black text-white text-lg font-bold rounded "
          onClick={() => (navigate("/login"))}
        >
          Sign in
        </button>
      </div >
    </div >

  )
}

export default Register