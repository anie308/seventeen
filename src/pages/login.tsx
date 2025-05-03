import { Link } from "react-router-dom";
import logo from "../assets/gt-logo.svg";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      console.log("Logging in with", formData);
      // TODO: Replace with real authentication logic
    }
  };

  return (
    <div className="bg-black font-poppins min-h-screen flex flex-col">
      <div className="p-[8px_20px]">
        <Link to="/">
          <img src={logo} className="h-[50px]" alt="Logo" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 grow gap-[40px] p-[20px]">
        <div className="hidden lg:block bg-[#2B349A] text-white rounded-[10px] p-[10px]">
          Welcome back! Please log in to your account.
        </div>

        <div className="text-white">
          <div className="font-[500] flex items-center justify-between">
            <p className="text-[20px] lg:text-[28px]">Login</p>
          </div>

          <div className="mt-[20px]">
            <div>
              <p className="text-[20px] leading-[20px]">Welcome Back</p>
              <p className="text-[16px] text-[#888888]">
                Enter your email and password to access your account
              </p>

              <div className="mt-[10px] grid gap-[20px]">
                <div>
                  <p className="text-[15px]">Email Address*</p>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <p className="text-[15px]">Password*</p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="mt-[20px] bg-[#EAAF4E] rounded-[8px] text-black font-[500] p-[8px_20px]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
