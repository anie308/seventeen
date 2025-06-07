import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff, FiShield, FiLock, FiUser, FiMail, FiPhone, FiMapPin,  FiArrowRight, FiCheck } from "react-icons/fi";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
import logo from "../assets/gt-logo.svg";
import doctors from '../assets/doctora.jpg';
import medtech from '../assets/medtech.jpg';
import support from '../assets/support.jpg';

interface FormData {
  hospitalName: string;
  email: string;
  phone: string;
  hospitalType: string;
  country: string;
  state: string;
  password: string;
  confirmPassword: string;
  adminName: string;
  agreeToTerms: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function RegisterContent() {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    hospitalName: "",
    email: "",
    phone: "",
    hospitalType: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "",
    adminName: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hospitalTypes = [
    "General Hospital",
    "Specialty Hospital",
    "Teaching Hospital",
    "Psychiatric Hospital",
    "Rehabilitation Hospital",
    "Emergency Care Center",
    "Clinic",
    "Diagnostic Center",
    "Other"
  ];

  const validate = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.hospitalName) newErrors.hospitalName = "Hospital name is required";
      if (!formData.adminName) newErrors.adminName = "Administrator name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.hospitalType) newErrors.hospitalType = "Hospital type is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
    }

    if (step === 3) {
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleNext = () => {
    if (validate(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    if (validate(3)) {
      setIsLoading(true);
      try {
        // Set the hospital theme based on the hospital name
        setTheme({
          hospitalName: formData.hospitalName,
          theme: 'default'
        });

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Registering hospital:", formData);
        navigate('/verify-email');
      } catch (error) {
        console.error("Registration failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onboardingSlides = [
    {
      title: "Join Healthcare Leaders",
      subtitle: "Trusted by 500+ Institutions",
      description: "Join hospitals and clinics worldwide that trust Seventeen for their healthcare management needs.",
      image: doctors,
      stats: ["500+ Hospitals", "1M+ Patients", "99.9% Uptime"]
    },
    {
      title: "HIPAA Compliant Setup",
      subtitle: "Security from Day One",
      description: "Your data is protected with enterprise-grade security, ensuring full HIPAA compliance from the moment you sign up.",
      image: medtech,
      stats: ["HIPAA Compliant", "SOC 2 Certified", "ISO 27001"]
    },
    {
      title: "Quick Implementation",
      subtitle: "Go Live in 24 Hours",
      description: "Our dedicated healthcare specialists will have your system configured and your team trained within 24 hours.",
      image: support,
      stats: ["24hr Setup", "Free Training", "Expert Support"]
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % onboardingSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [onboardingSlides.length]);

  const stepTitles = [
    "Hospital Information",
    "Location & Type", 
    "Security Setup"
  ];

  return (
    <div className="bg-surface-900 font-poppins min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-surface-700">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Seventeen Healthcare" />
          <div>
            <h1 className="text-white font-bold text-lg">Rapha Medical</h1>
            <p className="text-surface-400 text-sm">Healthcare Management</p>
          </div>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 flex-1">
        {/* Left Side - Onboarding Slides */}
        <div className="hidden lg:flex relative bg-surface-800 border-r border-surface-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${onboardingSlides[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-surface-900/85 to-black/80">
                <div className="absolute inset-0 bg-surface-900/60"></div>
                <div className="flex flex-col justify-center h-full p-12 max-w-lg">
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary text-sm font-medium">
                        {onboardingSlides[currentSlide].subtitle}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {onboardingSlides[currentSlide].title}
                    </h2>
                    <p className="text-surface-300 text-lg leading-relaxed">
                      {onboardingSlides[currentSlide].description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {onboardingSlides[currentSlide].stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-600 rounded-lg p-3">
                          <div className="text-sm font-medium text-primary">{stat}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex space-x-2">
                    {onboardingSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? "w-8 bg-primary"
                            : "w-2 bg-surface-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Progress Steps */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step < currentStep
                          ? "bg-primary text-white"
                          : step === currentStep
                          ? "bg-primary text-white"
                          : "bg-surface-700 text-surface-400"
                      }`}
                    >
                      {step < currentStep ? <FiCheck className="w-4 h-4" /> : step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-16 h-0.5 ${
                          step < currentStep ? "bg-primary" : "bg-surface-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stepTitles[currentStep - 1]}</h2>
                <p className="text-surface-400">Step {currentStep} of 3</p>
              </div>
            </div>

            {/* Step 1: Hospital Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Hospital Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMapPin className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="text"
                      name="hospitalName"
                      value={formData.hospitalName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter hospital name"
                    />
                  </div>
                  {errors.hospitalName && <p className="text-error text-sm">{errors.hospitalName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Administrator Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="text"
                      name="adminName"
                      value={formData.adminName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.adminName && <p className="text-error text-sm">{errors.adminName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  {errors.email && <p className="text-error text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiPhone className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-error text-sm">{errors.phone}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Location & Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Hospital Type</label>
                  <select
                    name="hospitalType"
                    value={formData.hospitalType}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-surface-800 border border-surface-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select hospital type</option>
                    {hospitalTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.hospitalType && <p className="text-error text-sm">{errors.hospitalType}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Country</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMapPin className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter country"
                    />
                  </div>
                  {errors.country && <p className="text-error text-sm">{errors.country}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">State/Province</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter state or province"
                  />
                  {errors.state && <p className="text-error text-sm">{errors.state}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Security Setup */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Create a secure password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-surface-400 hover:text-surface-200"
                    >
                      {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-error text-sm">{errors.password}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-surface-400 hover:text-surface-200"
                    >
                      {showConfirmPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-error text-sm">{errors.confirmPassword}</p>}
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-primary bg-surface-800 border-surface-600 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-surface-300 leading-relaxed">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary-400">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary-400">
                        Privacy Policy
                      </Link>
                      . I understand that patient data will be handled in compliance with HIPAA regulations.
                    </span>
                  </label>
                  {errors.agreeToTerms && <p className="text-error text-sm">{errors.agreeToTerms}</p>}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 bg-surface-700 hover:bg-surface-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={isLoading}
                className="flex-1 bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{currentStep === 3 ? "Create Account" : "Continue"}</span>
                    <FiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-surface-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-primary-400 font-medium transition-colors"
              >
                Sign In
              </Link>
            </p>

            {/* Security Notice */}
            <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-surface-300 text-sm">
                <FiShield className="w-4 h-4" />
                <span>HIPAA compliant • SOC 2 certified • Enterprise security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Register() {
  return (
    <ThemeProvider>
      <RegisterContent />
    </ThemeProvider>
  );
}

export default Register;
