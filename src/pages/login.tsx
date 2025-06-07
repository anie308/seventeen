import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff, FiShield, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
import logo from "../assets/gt-logo.svg";
import doctors from '../assets/doctora.jpg';
import medtech from '../assets/medtech.jpg';
import support from '../assets/support.jpg';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

function LoginContent() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Logging in with", formData);
        navigate('/dashboard');
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onboardingSlides = [
    {
      title: "Welcome to Seventeen",
      subtitle: "Healthcare Management System",
      description: "Secure, compliant, and intuitive platform designed specifically for modern healthcare facilities.",
      image: doctors,
      features: ["HIPAA Compliant", "Real-time Analytics", "24/7 Support"]
    },
    {
      title: "Enterprise Security",
      subtitle: "Bank-level Protection",
      description: "End-to-end encryption, multi-factor authentication, and comprehensive audit trails protect your sensitive data.",
      image: medtech,
      features: ["AES-256 Encryption", "SOC 2 Certified", "Multi-factor Auth"]
    },
    {
      title: "Expert Support",
      subtitle: "Healthcare IT Specialists",
      description: "Our team of medical IT experts provides round-the-clock support tailored to healthcare workflows.",
      image: support,
      features: ["24/7 Availability", "Medical Expertise", "Instant Response"]
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % onboardingSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [onboardingSlides.length]);

  return (
    <div className="bg-surface-900 font-poppins min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-surface-700">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Seventeen Healthcare" />
          <div>
            <h1 className="text-white font-bold text-lg">Seventeen</h1>
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

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {onboardingSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FiShield className="w-5 h-5 text-primary" />
                        <span className="text-surface-200">{feature}</span>
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

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
              <p className="text-surface-400">
                Sign in to access <span className="text-primary font-medium">{theme.hospitalName}</span>'s dashboard
              </p>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-200">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-surface-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-error text-sm flex items-center space-x-1">
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
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
                    className="w-full pl-10 pr-12 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-surface-400 hover:text-surface-200"
                  >
                    {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-error text-sm flex items-center space-x-1">
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:text-primary-400 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <FiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-surface-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:text-primary-400 font-medium transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-surface-300 text-sm">
                <FiShield className="w-4 h-4" />
                <span>Protected by enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  );
}

export default Login;
