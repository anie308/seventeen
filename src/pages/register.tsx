import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/gt-logo.svg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctors from '../assets/doctora.jpg'
import medtech from '../assets/medtech.jpg'
import support from '../assets/support.jpg'
interface FormData {
  companyName: string;
  email: string;
  phone: string;
  hospitalType: string;
  country: string;
  state: string;
  password: string;
  confirmPassword: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    email: "",
    phone: "",
    hospitalType: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.hospitalType)
      newErrors.hospitalType = "Hospital type is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (validate()) {
      console.log("Proceed to next step", formData);
      navigate('/login')
      // Implement navigation or form submission
    }
  };

  const onboardingSlides = [
    {
      title: "Welcome to Rapha",
      description:
        "Manage your hospital records and staff from one easy platform.",
      image: doctors,
    },
    {
      title: "Secure & Reliable",
      description: "We use end-to-end encryption to keep your data safe.",
      image: medtech,
    },
    {
      title: "Get Started Easily",
      description: "Setup your account in minutes and go live instantly.",
      image: support,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % onboardingSlides.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [onboardingSlides.length]);

  const renderInput = (
    name: keyof FormData,
    label: string,
    type: string = "text"
  ) => (
    <div>
      <p className="text-[15px]">{label}</p>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="bg-black font-poppins min-h-screen flex flex-col">
      <div className="p-[8px_20px]">
        <Link to="/">
          <img src={logo} className="h-[50px]" alt="Logo" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grow gap-[40px] p-[20px]">
        <div className="hidden lg:flex relative text-white rounded-[10px] overflow-hidden flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${onboardingSlides[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center text-center p-8">
                <h2 className="text-[28px] font-bold mb-2">
                  {onboardingSlides[currentSlide].title}
                </h2>
                <p className="text-[16px] text-start max-w-[400px] text-[#dddddd]">
                  {onboardingSlides[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-5 left-5 flex gap-2 z-10">
            {onboardingSlides.map((_, i) => (
              <div
                key={i}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "w-[20px] bg-white"
                    : "w-[8px] bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="text-white">
          <div className="font-[500] flex items-center justify-between">
            <p className="text-[20px] lg:text-[28px]">Account Setup</p>
          </div>

          <div className="mt-[20px]">
            <div>
              <p className="text-[20px] leading-[20px]">Hospital Details</p>
              <p className="text-[16px] text-[#888888]">
                Let’s get your account up and running
              </p>

              <div className="mt-[10px] grid gap-[20px]">
                {renderInput("companyName", "Company Name*")}

                <div className="grid grid-cols-2 gap-[20px]">
                  {renderInput("email", "Email Address*")}
                  {renderInput("phone", "Phone Number*")}
                </div>

                {renderInput("hospitalType", "Hospital Type*")}
              </div>

              <div className="mt-[20px] grid gap-[20px]">
                {renderInput("country", "Country")}
                {renderInput("state", "State")}

                <div className="grid grid-cols-2 gap-[20px]">
                  {renderInput("password", "Password", "password")}
                  {renderInput(
                    "confirmPassword",
                    "Confirm Password",
                    "password"
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="mt-[20px] bg-[#EAAF4E] rounded-[8px] text-black font-[500] p-[8px_20px]"
            >
              Sumbit
            </button>

            <p className="mt-[10px]">Already have an account? <Link className="text-[#EAAF4E]" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
