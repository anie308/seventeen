import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMail, FiArrowLeft, FiArrowRight, FiShield, FiClock, FiCheck } from "react-icons/fi";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
// import logo from "../assets/gt-logo.svg";

interface ForgotPasswordFormData {
  email: string;
}

interface ForgotPasswordFormErrors {
  email?: string;
}

function ForgotPasswordContent() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [errors, setErrors] = useState<ForgotPasswordFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ForgotPasswordFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ForgotPasswordFormErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Password reset requested for:", formData.email);
        setEmailSent(true);
      } catch (error) {
        console.error("Password reset failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Resending email to:", formData.email);
    } catch (error) {
      console.error("Resend failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-surface-900 font-poppins min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-surface-700">
        <Link to="/" className="flex items-center space-x-3">
          {/* <img src={logo} className="h-12" alt="Seventeen Healthcare" /> */}
          <div>
            <h1 className="text-white font-bold text-lg">Rapha Medical</h1>
            <p className="text-surface-400 text-sm">Healthcare Management</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {!emailSent ? (
            // Request Reset Form
            <div className="space-y-8">
              {/* Back to Login */}
              <Link
                to="/login"
                className="inline-flex items-center space-x-2 text-surface-400 hover:text-primary transition-colors"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to login</span>
              </Link>

              {/* Header */}
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-white">Forgot your password?</h2>
                <p className="text-surface-400 max-w-sm mx-auto">
                  No worries! Enter your email address and we'll send you a secure link to reset your password.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">
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
                      className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-error text-sm flex items-center space-x-1">
                      <span>{errors.email}</span>
                    </p>
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
                      <span>Send reset link</span>
                      <FiArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Additional Help */}
                <div className="text-center">
                  <p className="text-surface-400 text-sm">
                    Remember your password?{" "}
                    <Link
                      to="/login"
                      className="text-primary hover:text-primary-400 font-medium transition-colors"
                    >
                      Sign in instead
                    </Link>
                  </p>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <FiShield className="w-5 h-5 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-white text-sm font-medium">Security Notice</h4>
                    <p className="text-surface-400 text-sm leading-relaxed">
                      For security reasons, we'll only send the reset link to email addresses associated with registered {theme.hospitalName} accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Email Sent Confirmation
            <div className="space-y-8 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FiCheck className="w-8 h-8 text-primary" />
              </div>

              {/* Header */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Check your email</h2>
                <p className="text-surface-400 max-w-sm mx-auto">
                  We've sent a password reset link to{" "}
                  <span className="text-white font-medium">{formData.email}</span>
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-6 text-left space-y-4">
                <h3 className="text-white font-semibold">Next steps:</h3>
                <ol className="space-y-2 text-surface-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">1</span>
                    <span>Check your email inbox (and spam folder)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">2</span>
                    <span>Click the secure password reset link</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">3</span>
                    <span>Create a new secure password</span>
                  </li>
                </ol>
              </div>

              {/* Security Info */}
              <div className="bg-gradient-to-r from-warning/10 to-error/10 border border-warning/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-warning text-sm">
                  <FiClock className="w-4 h-4" />
                  <span>This link will expire in 15 minutes for security</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  className="w-full bg-surface-700 hover:bg-surface-600 disabled:bg-surface-700/50 text-white font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiMail className="w-5 h-5" />
                      <span>Resend email</span>
                    </>
                  )}
                </button>

                <Link
                  to="/login"
                  className="inline-flex items-center space-x-2 text-surface-400 hover:text-primary transition-colors mx-auto"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  <span>Back to login</span>
                </Link>
              </div>

              {/* Support */}
              <div className="text-center pt-4 border-t border-surface-700">
                <p className="text-surface-400 text-sm">
                  Still having trouble?{" "}
                  <a
                    href="mailto:support@seventeen.health"
                    className="text-primary hover:text-primary-400 font-medium transition-colors"
                  >
                    Contact healthcare support
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ForgotPassword() {
  return (
    <ThemeProvider>
      <ForgotPasswordContent />
    </ThemeProvider>
  );
}

export default ForgotPassword;
