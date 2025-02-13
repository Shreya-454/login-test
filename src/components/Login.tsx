"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import CommonInput from "./common/CommonInput";

const Login: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: "" },
    }));
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email: string; password: string } = {
    email: !isValidEmail(formData.email) ? "Enter a valid email address" : "",
    password: formData.password.length < 6 ? "Password must be at least 6 characters" : "",
  };

    if (errors.email || errors.password) {
      setFormData((prev) => ({ ...prev, errors }));
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    Swal.fire("Successfully Submitted", "You have logged in successfully!", "success");
    router.push("/dashboard");
  };

  return (
    <div className="py-5 max-w-[1920px] min-h-screen mx-auto">
      <div className="container max-w-[1597px] mx-auto px-8 max-sm:px-[35px]">
        <div className="flex xl:gap-[120px] gap-5 lg:gap-10 md:justify-end justify-center">
          <div className="flex items-center w-full max-w-[456px]">
            <div className="flex flex-col gap-10 w-full sm:gap-14 lg:gap-[100px] xl:gap-[138px] justify-between">
              <Image width={163} height={31} src="/assets/images/svg/logo.svg" alt="logo" />
              <div>
                <h3 className="font-semibold text-3xl leading-194 text-light-blue tracking-sm">
                  Welcome Back
                </h3>
                <p className="font-normal text-sm leading-214 text-light-grey pb-8">
                  Welcome back! Please enter your details.
                </p>
                <form onSubmit={handleSubmit}>
                  <p className="font-medium text-base leading-125 text-light-black pb-1.5">Email</p>
                  <CommonInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    error={formData.errors.email}
                    onChange={handleChange}
                    value={formData.email}
                  />

                  <p className="font-medium text-base leading-125 text-light-black mt-[18px] pb-1.5">Password</p>
                  <CommonInput
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    error={formData.errors.password}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 mt-[18px]">
                      <input type="checkbox" className="size-5 border border-solid border-off-grey rounded-[6px]" />
                      <p className="font-inter font-normal leading-normal text-off-grey-100 text-base">
                        Remember for 30 days
                      </p>
                    </div>
                    <a href="#" className="font-inter text-base font-normal leading-normal text-off-blue">
                      Forgot password
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="font-medium text-sm leading-171 hover:bg-blue duration-300 text-white bg-light-black rounded-[9px] py-[10px] px-3 w-full mt-[33px] mb-1.5"
                  >
                    Sign In
                  </button>
                </form>
                <button className="font-medium text-sm leading-171 text-light-black border border-solid border-off-grey flex items-center w-full py-[10px] px-3 justify-center gap-[10px] rounded-[9px]">
                  <Image width={22} height={22} src="/assets/images/svg/google-icon.svg" alt="google-icon" />
                  Sign in with Google
                </button>
                <div className="flex items-center gap-[10px] mt-[18px] justify-center">
                  <p className="font-inter font-normal text-base leading-normal text-off-grey-100">
                    Don’t have an account?
                  </p>
                  <a href="#" className="text-off-blue font-normal text-base leading-normal">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden">
            <div className="w-full xl:w-[759px] flex justify-center flex-col items-center bg-blue xl:h-[899px] rounded-[20px] h-full">
              <Image
                width={617}
                height={541}
                src="/assets/images/webp/blue-logo.webp"
                alt="ellipse"
                className="w-full max-w-[617px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
