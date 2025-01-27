import { useContext } from "react";
import { FaGooglePlusSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context";
import { toast } from "react-toastify";

function Register() {

  const { createUser, signinWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Password validation
    if (data.password !== data.Confirm_password) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("user created successfully")
        navigate("/login")

      }).catch((error) => {
        console.log(error);
        toast.error(error.message)

      });

  };

  const handleLoginWithGoogle = () => {
    signinWithGoogle().then((result) => {
      console.log(result)
      toast.success("Login success")
      navigate('/')

    })
      .catch((error) => {
        toast.error(error.message);
      });

  };

  return (
    <div className="max-w-2xl mx-auto pt-28 mb-8">
      <div className="bg-white space-y-5 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center my-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Name" name="name" required />
          </label>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" name="email" required />
          </label>

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="Password" name="password" required />
          </label>

          {/* Confirm Password Input */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm password"
              name="Confirm_password"
              required
            />
          </label>
          <div className="flex justify-between mt-3">
            <p className='text-xl'>Have an account?</p>
            <Link to="/login" className="text-xl font-bold hover:text-red-600 hover:text-2xl">
              Login
            </Link>
          </div>

          {/* Register Button */}
          <div className="d-grid gap-2 pt-6">
            <button
              className="btn btn-primary w-full text-2xl"
              type="submit"
            >
              Register
            </button>
          </div>


          {/* Google Login Button */}
          <div className="d-grid gap-2 mt-2">
            <button
              onClick={handleLoginWithGoogle}
              className="btn btn-light border-none w-full"
              type="button"
              style={{
                backgroundColor: "red",
                color: "white",
                borderColor: "#4285F4",
                fontWeight: "bold",
              }}
            >
              Login With Google <FaGooglePlusSquare className="ms-2" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Register;
