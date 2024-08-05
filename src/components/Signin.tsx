import { User } from "lucide-react";

export default function Signin() {
  return (
    <>
      <section className="w-full h-[450px] bg-background_secondary max-w-[450px] rounded-lg p-4 flex flex-col gap-2 items-center justify-center text-white">
        <div className="w-full flex flex-col items-start ml-[10px] mt-4 gap-1">
          <div className="w-full max-w-[40px] h-10 rounded-lg border-2 flex items-center justify-center bg-background_main">
            <User color="white" size={30} />
          </div>
          <h1>Welcome Back</h1>
        </div>
        <form
          className="bg-background_main h-full rounded-lg w-full flex flex-col items-center justify-center gap-2"
          action=""
        >
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-[370px]">
              <h1 className="text-[13px] ml-3 mb-1">Email</h1>
              <input
                className="input_main"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full max-w-[370px]">
              <h1 className="text-[13px] ml-3 mb-1">Password</h1>
              <input
                className="input_main"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="w-full flex justify-end mr-[40px] ">
            <h1 className="cursor-pointer hover:underline">Forgot Password?</h1>
          </div>
          <button className="bnt_main">Sign In</button>
          <div>
            <h1>
              Are you new?{" "}
              <span className="cursor-pointer hover:underline text-main_Color hover:text-main_Color_Hover duration-150">
                Create an Account
              </span>
            </h1>
          </div>
        </form>
      </section>
    </>
  );
}
