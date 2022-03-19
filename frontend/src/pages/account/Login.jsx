import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function Login() {
  // to navigate to login
  const navigate = useNavigate();

  // input state & error msg 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  // login user
  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Invalid Email !");
      return;
    }
    else if (password === "") {
      setError("Invalid Password !");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      // go to account page
    }
    catch (error) {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        setError("Invalid Email !");
      } else if (errorCode === 'auth/wrong-password') {
        setError("Wrong Password !");
      } else if (errorCode === 'auth/user-not-found') {
        setError("User Not Found !");
      } else {
        setError(errorCode);
      }
      setLoading(false);
    }
  }

  // forget password
  const handleLoginForgetPassowrd = (e) => {
    e.preventDefault();
    console.log("forget password");
  }

  // error message duration
  useEffect(() => {
    if (error !== "") {
      const errorDisplayTimer = () => { setTimeout(() => setError(""), 2000); }
      const timerId = errorDisplayTimer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [error]);

  return (
    <div className="md:flex md:justify-center md:items-center md:h-screen">
      <div className="wrapper container p-4 max-w-sm md:bg-gray-100 md:rounded-md">
        {/* Display error message */}
        <div className={"w-full py-2 border-2 border-red-300 text-red-700 text-center font-semibold bg-red-200 rounded transition-all duration-150 delay-50 "
          + (error === "" ? " h-0 overflow-hidden opacity-0 border-0 py-0 " : " opacity-1 ")
        }>
          {error}
        </div>
        {/* Login form */}
        <div className="flex flex-col justify-center items-center gap-4 ">
          {/* Title */}
          <h1 className="mt-4 text-2xl font-bold">
            Sign in
          </h1>
          {/* Login with email & password */}
          <form className="w-full flex flex-col gap-4 ">
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

            {/* Login button */}
            <button className="w-full py-2 text-white font-semibold bg-orange-500 rounded"
              type="submit"
              onClick={handleLoginClick}
              disabled={loading}
            >
              Login
            </button>
          </form>
          <div className="w-full text-right text-gray-400 text-sm"
            onClick={handleLoginForgetPassowrd}
          >
            Forget password?
          </div>

          {/* Login with other methods */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Or login with Text divider */}
            <div className="w-4/5 flex flex-row justify-center items-center">
              <div className="flex-1 border-t border-gray-300" />
              <span className="mx-2 text-gray-400 text-sm ">
                Or login with
              </span>
              <div className="flex-1 border-t border-gray-300" />
            </div>

            {/* Other login methods */}
            <div className="w-full py-2  bg-gray-200 text-center text-black rounded">
              Google
            </div>
            <div className="w-full py-2 bg-gray-200 text-center text-black rounded">
              Facebook
            </div>
          </div>
        </div>

        {/* Create account button */}
        <div className="mt-8 text-center flex flex-col gap-4 justify-center items-center ">
          {/* Sign Up */}
          <h1 className="text-sm text-gray-400">
            Does not have an account yet?
          </h1>
          <button className="w-full py-2 bg-black text-white text-lg font-bold rounded "
            onClick={() => (navigate("/register"))}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
