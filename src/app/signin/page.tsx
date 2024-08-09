"use client";
import { User } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function Signin() {
  const formSchema = z.object({
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z.string().min(6, {
      message: "Password is needed",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Function Run here
    console.log(values);
  }

  return (
    <>
      <section className="w-full h-full min-h-screen flex items-center justify-center bg-background_main">
        <section className="w-full h-[470px] bg-background_secondary max-w-[450px] rounded-lg p-4 flex flex-col gap-2 items-center justify-center text-white">
          <div className="w-full flex flex-col items-start ml-[10px] mt-4 gap-1">
            <Link
              href="/"
              className="w-full max-w-[40px] h-10 rounded-lg border-2 flex items-center justify-center bg-background_main"
            >
              <User color="white" size={30} />
            </Link>
            <h1>Welcome Back</h1>
          </div>
          <form
            className="container mx-auto bg-background_main h-full rounded-lg w-full flex flex-col items-center justify-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="w-full flex items-start ml-10" htmlFor="_email">
              Email
            </label>
            <input
              className="input_main"
              defaultValue=""
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <span className="w-full flex items-start ml-10 text-red-500">
                {errors.email.message}
              </span>
            )}

            <label
              className="w-full flex items-start ml-10"
              htmlFor="_password"
            >
              Password
            </label>
            <input
              className="input_main"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="w-full flex items-start ml-10 text-red-500">
                {errors.password.message}
              </span>
            )}
            <span className="w-full flex justify-end hover:underline">
              <Link href="/forgetpassword">Forgot Password?</Link>
            </span>

            <input
              className="bnt_main cursor-pointer"
              type="submit"
              value={"Sign in"}
            />

            <div>
              <p>
                Are you new?{" "}
                <Link
                  href={"/signup"}
                  className="cursor-pointer hover:underline text-main_Color hover:text-main_Color_Hover duration-150"
                >
                  Create an Account
                </Link>
              </p>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
