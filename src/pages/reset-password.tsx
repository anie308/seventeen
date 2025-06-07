import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiLock, FiEye, FiEyeOff, FiArrowRight, FiShield, FiCheck, FiX } from "react-icons/fi";
import { ThemeProvider } from "../components/ThemeProvider";
import logo from "../assets/gt-logo.svg";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordFormErrors {
  password?: string;
  confirmPassword?: string;
}

function ResetPasswordContent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ResetPasswordFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [passwordChanged, setPasswordChanged] = useState(false);

  // Password strength requirements
  const passwordRequirements = [
    { text: "At least 8 characters", check: (password: string) => password.length >= 8 },
    { text: "Contains uppercase letter", check: (password: string) => /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", check: (password: string) => /[a-z]/.test(password) },
    { text: "Contains a number", check: (password: string) => /\d/.test(password) },
    { text: "Contains special character", check: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  // Validate token on component mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsTokenValid(false);
        return;
      }

      try {
        // Simulate API call to validate token
        await new Promise(resolve => setTimeout(resolve, 1000));
        // In real implementation, check if token is valid and not expired
        setIsTokenValid(true);
      } catch (error) {
        console.error("Token validation failed:", error);
        setIsTokenValid(false);
      }
    };

    validateToken();
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ResetPasswordFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ResetPasswordFormErrors = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const failedRequirements = passwordRequirements.filter(req => !req.check(formData.password));
      if (failedRequirements.length > 0) {
        newErrors.password = "Password does not meet security requirements";
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Password reset for token:", token);
        setPasswordChanged(true);
      } catch (error) {
        console.error("Password reset failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  // Loading state while validating token
  if (isTokenValid === null) {
    return (
      <div className="bg-surface-900 font-poppins min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
          <p className="text-surface-400">Validating reset link...</p>
        </div>
      </div>
    );
  }

  // Invalid token state
  if (isTokenValid === false) {
    return (
      <div className="bg-surface-900 font-poppins min-h-screen flex flex-col">
        <div className="p-6 border-b border-surface-700">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} className="h-12" alt="Seventeen Healthcare" />
            <div>
              <h1 className="text-white font-bold text-lg">Rapha Medical</h1>
              <p className="text-surface-400 text-sm">Healthcare Management</p>
            </div>
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md text-center space-y-6">
            <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto">
              <FiX className="w-8 h-8 text-error" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Invalid reset link</h2>
              <p className="text-surface-400">
                This password reset link is invalid or has expired. Please request a new one.
              </p>
            </div>
            <div className="space-y-3">
              <Link
                to="/forgot-password"
                className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors inline-block"
              >
                Request new reset link
              </Link>
              <Link
                to="/login"
                className="block text-surface-400 hover:text-primary transition-colors"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {!passwordChanged ? (
            // Reset Password Form
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiLock className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-white">Set new password</h2>
                <p className="text-surface-400">
                  Create a secure password for your  account
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">New Password</label>
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
                  {errors.password && (
                    <p className="text-error text-sm">{errors.password}</p>
                  )}
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4">
                    <h4 className="text-white text-sm font-medium mb-3">Password requirements:</h4>
                    <div className="space-y-2">
                      {passwordRequirements.map((requirement, index) => {
                        const isValid = requirement.check(formData.password);
                        return (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              isValid ? 'bg-success' : 'bg-surface-600'
                            }`}>
                              {isValid && <FiCheck className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`text-sm ${
                              isValid ? 'text-success' : 'text-surface-400'
                            }`}>
                              {requirement.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-200">Confirm New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
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
                  {errors.confirmPassword && (
                    <p className="text-error text-sm">{errors.confirmPassword}</p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Update password</span>
                      <FiArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Security Notice */}
              <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <FiShield className="w-5 h-5 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-white text-sm font-medium">Security Notice</h4>
                    <p className="text-surface-400 text-sm leading-relaxed">
                      After updating your password, you'll be automatically signed out of all devices for security. Please sign in again with your new credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Success State
            <div className="space-y-8 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <FiCheck className="w-8 h-8 text-success" />
              </div>

              {/* Header */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Password updated!</h2>
                <p className="text-surface-400">
                  Your password has been successfully updated. You can now sign in with your new credentials.
                </p>
              </div>

              {/* Success Message */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <p className="text-success text-sm">
                  For security, you've been signed out of all devices. Please sign in again to access your  dashboard.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleBackToLogin}
                  className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Sign in with new password</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>

                {/* Support */}
                <div className="text-center pt-4 border-t border-surface-700">
                  <p className="text-surface-400 text-sm">
                    Having trouble signing in?{" "}
                    <a
                      href="mailto:support@seventeen.health"
                      className="text-primary hover:text-primary-400 font-medium transition-colors"
                    >
                      Contact healthcare support
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResetPassword() {
  return (
    <ThemeProvider>
      <ResetPasswordContent />
    </ThemeProvider>
  );
}

export default ResetPassword;
