import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  useEffect(() => {
    document.title = "DJ-login";
  }, []);

  return (
    <main className="bg-background-register font-roboto  bg-cover bg-center bg-no-repeat h-screen w-full text-white">
      <div className=" flex justify-center  flex-col items-center relative h-full">
        {/* Transparent card */}
        <div
          className="w-[57.688rem] h-[27.625rem] max-lg:w-[30rem] max-lg:h-[40rem] max-sm:w-[100%] max-sm:h-[40%]
           border border-[#FFFFFF] rounded-[76px] relative bg-trans-card"
        >
          <div
            className="flex   max-sm:hidden flex-col justify-center max-lg:relative  
             h-full text-black-dark ml-[3.563rem] flex-wrap"
          >
            <h2
              className="leading-[2.7rem]  max-lg:absolute  bottom-[1rem] font-bold w-[max-content] 
            max-sm:text-[2rem] text-[2.5rem] "
            >
              <span>Have</span> <span className="block">An Account?</span>
            </h2>
            <span className="leading-[3rem] max-lg:absolute bottom-[1rem] left-[15rem] w-[max-content]">
              <Link
                to="/register"
                className="border font-semibold transition-colors ease-in  duration-200 px-2 pb-1 w-full m-auto rounded hover:text-white
                 hover:bg-black-darkest hover:border-black-darkest"
              >
                Sign In
              </Link>
            </span>
          </div>
          {/* Form card */}
          <div
            className="bg-white absolute 2xl:w-[33.438rem] w-[30rem] min-h-[38rem] max-lg:right-[0rem] 
            max-lg:max-w-[100%] max-sm:w-[100%] max-sm:h-[70%] max-sm:top-[-11rem]
            2xl:h-auto  overflow-auto 2xl:top-[-10.5rem] right-[2.313rem]  top-[-6rem] max-lg:top-[-5.5rem]
           text-black-darkest font-bold z-10 rounded-[50px] max-sm:rounded-none"
          >
            <div
              className="flex justify-center  flex-nowrap 2xl:mt-[5.5rem] mt-[1rem] mb-[.5rem]
             items-center  "
            >
              <h3 className="text-[3.188rem]  font-bold font-roboto p-0 text-black-darkest">
                AMP
              </h3>

              <div className="ml-[0.666rem]">
                <div
                  className="w-[3.215rem] h-[3.169rem] flex flex-wrap justify-center 
                  items-center relative text-2xl leading-[1.2em] font-normal bg-blue text-white"
                >
                  <span className="absolute top-[0] tracking-widest">SP</span>
                  <span className="absolute bottom-0 tracking-widest">OT</span>
                </div>
              </div>
            </div>

            <div className="w-[28.25rem] max-sm:w-[90%] mx-auto">
              <div>
                <p className="text-center text-black-dark font-normal text-[1.25rem]">
                  Welcome back,
                </p>
                <h2 className="text-black-dark mt-4 2xl:text-[2.5rem] max-sm:text-[1.5rem] text-4xl text-center">
                  Login To Your Profile
                </h2>
              </div>
              <div className=" 2xl:w-[360px] w-[95%]  mx-auto mt-[2.063rem] max-sm:mt-4">
                <form className="w-full">
                  <div className="w-full mb-4">
                    <label htmlFor="email" className="text-black-dark">
                      Email <span className="text-red-light">*</span>
                    </label>
                    <input
                      className=" border border-gray text-gray outline-none 
                      rounded-3xl h-[3.125rem] pl-[24px] py-[15px] text-[0.875rem] w-full"
                      type="email"
                      placeholder="enter email"
                      id="email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-black-dark">
                      Password <span className="text-red-light">*</span>
                    </label>
                    <input
                      className=" border border-gray text-gray outline-none 
                      rounded-3xl h-[3.125rem] pl-[1.5rem] py-[0.938rem] text-[0.875rem] w-full"
                      type="Password"
                      placeholder="enter password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="flex flex-nowrap text-sm justify-between mt-4">
                    <div className="space-x-1 flex flex-nowrap justify-between items-center">
                      <input
                        className="checked:border-blue"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label
                        className="cursor-pointer text-[0.875rem]"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-blue text-[0.875rem] underline">
                      <Link to="#">Forget Password?</Link>
                    </div>
                  </div>
                  <button
                    className="w-full h-[3.125rem]
                    rounded-3xl bg-blue text-center 2xl:mt-16 mt-4  mb-4 text-white"
                  >
                    Login
                  </button>
                  <button
                    className="w-full h-[3.125rem] rounded-3xl 
                    font-bold space-x-1 text-normal flex justify-center 
                    items-center py-1 px-4 bg-purple-dark text-center text-white"
                  >
                    <img
                      className="w-[1rem]"
                      src="/assets/icons/google_icon.png"
                      alt="google icon"
                    />
                    <span>Login with google</span>
                  </button>
                </form>
                <span className="text-center block max-sm:mt-1 mt-8 mb-[0.781rem] text-sm space-x-1">
                  <span className="text-black-dark ">New here?</span>
                  <span>
                    <Link to="/register" className="text-blue underline">
                      Register now
                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
