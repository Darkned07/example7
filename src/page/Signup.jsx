import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const { signup, sign } = useSignup();

  const handleSign = () => {
    signup();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    sign(name.current.value, email.current.value, password.current.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#CEB992] py-[30px] px-[30px] shadow-2xl rounded-[20px]">
        <h2 className="text-2xl text-center text-white font-extrabold mb-[50px]">
          Sign up
        </h2>
        <div>
          <form onSubmit={handleSignUp} className="flex flex-col gap-[30px]">
            <label className="flex flex-col">
              <span className="text-[20px] font-bold text-white ml-[10px]">
                Name:
              </span>
              <input
                ref={name}
                className="py-[10px] px-[15px] md:w-[400px] rounded-[20px] text-[20px] text-black hover:text-white hover:bg-black ease-in-out duration-1000 "
                type="text"
                name="name"
                placeholder="writing name!"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[20px] font-bold text-white ml-[10px]">
                Email:
              </span>
              <input
                ref={email}
                className="py-[10px] px-[15px] md:w-[400px] rounded-[20px] text-[20px] text-black hover:text-white hover:bg-black ease-in-out duration-1000 "
                type="email"
                name="name"
                placeholder="writing email!"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[20px] font-bold text-white ml-[10px]">
                Password:
              </span>
              <input
                ref={password}
                className="py-[10px] px-[15px] md:w-[400px] rounded-[20px] text-[20px] text-black hover:text-white hover:bg-black ease-in-out duration-1000 "
                type="password"
                name="name"
                placeholder="*******"
              />
            </label>
            <button className="py-[10px] hover:bg-black hover:text-white ease-in-out duration-1000 px-[16px] bg-white rounded-[16px] text-[20px]">
              Sign up
            </button>
          </form>
        </div>
        <div className="flex flex-row  mt-[20px] mb-[20px] items-center gap-[10px] ">
          <hr className="w-full h-[2px]" />
          <span className="text-white text-[18px] mb-[5px]">or</span>
          <hr className="w-full h-[2px]" />
        </div>
        <div className="flex flex-col gap-[5px] mt-[10px]">
          <button
            onClick={() => handleSign()}
            className="flex flex-row gap-[5px ] hover:bg-black hover:text-white ease-in-out duration-1000 justify-center items-center text-[20px] bg-[#ffffff]  px-[12px] py-[6px] rounded-[16px]"
          >
            <img
              className="w-[40px] h-[40px]"
              src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/google-icon.png"
              alt=""
            />
            sign in with google
          </button>

          <Link
            to="/login"
            className="text-center px-[12px] hover:bg-black hover:text-white ease-in-out duration-1000 py-[6px] text-[20px] bg-[#ffffff]  rounded-[16px]"
          >
            Do you have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
