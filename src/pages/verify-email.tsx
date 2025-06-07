import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMail, FiCheck, FiX, FiArrowRight, FiClock, FiShield } from "react-icons/fi";
import { ThemeProvider } from "../components/ThemeProvider";
import logo from "../assets/gt-logo.svg";

function VerifyEmailContent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email') || 'admin@hospital.com'; // fallback email
  
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error' | 'expired'>('pending');
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Verify email token on component mount
  useEffect(() => {
    if (token) {
      verifyEmailToken();
    }
  }, [token]);

  // Countdown timer for resend button
  useEffect(() => {
    if (!canResend && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const verifyEmailToken = async () => {
    try {
      // Simulate API call to verify email token
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate different responses for demo
      const random = Math.random();
      if (random > 0.8) {
        setVerificationStatus('expired');
      } else if (random > 0.1) {
        setVerificationStatus('success');
      } else {
        setVerificationStatus('error');
      }
    } catch (error) {
      console.error("Email verification failed:", error);
      setVerificationStatus('error');
    }
  };

  const handleResendEmail = async () => {
    setIsResending(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Resending verification email to:", email);
      setCountdown(60);
      setCanResend(false);
    } catch (error) {
      console.error("Resend failed:", error);
    } finally {
      setIsResending(false);
    }
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  const handleRequestNewLink = () => {
    navigate('/register');
  };

  // Pending verification (no token or waiting for verification)
  if (verificationStatus === 'pending' && !token) {
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

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <FiMail className="w-8 h-8 text-primary" />
            </div>

            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Verify your email</h2>
              <p className="text-surface-400">
                We've sent a verification link to{" "}
                <span className="text-white font-medium">{email}</span>
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-6 text-left space-y-4">
              <h3 className="text-white font-semibold">To complete your setup:</h3>
              <ol className="space-y-2 text-surface-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">1</span>
                  <span>Check your email inbox (and spam folder)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">2</span>
                  <span>Click the verification link in the email</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">3</span>
                  <span>Access your healthcare management dashboard</span>
                </li>
              </ol>
            </div>

            {/* Resend Option */}
            <div className="space-y-4">
              <p className="text-surface-400 text-sm">Didn't receive the email?</p>
              <button
                onClick={handleResendEmail}
                disabled={!canResend || isResending}
                className="w-full bg-surface-700 hover:bg-surface-600 disabled:bg-surface-700/50 text-white font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isResending ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : canResend ? (
                  <>
                    <FiMail className="w-5 h-5" />
                    <span>Resend verification email</span>
                  </>
                ) : (
                  <>
                    <FiClock className="w-5 h-5" />
                    <span>Resend in {countdown}s</span>
                  </>
                )}
              </button>
            </div>

            {/* Security Notice */}
            <div className="bg-surface-800/50 border border-surface-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-surface-300 text-sm">
                <FiShield className="w-4 h-4" />
                <span>Email verification is required for HIPAA compliance</span>
              </div>
            </div>

            {/* Support */}
            <div className="text-center pt-4 border-t border-surface-700">
              <p className="text-surface-400 text-sm">
                Need help?{" "}
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
      </div>
    );
  }

  // Token verification in progress
  if (verificationStatus === 'pending' && token) {
    return (
      <div className="bg-surface-900 font-poppins min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
          <p className="text-surface-400">Verifying your email...</p>
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
            <h1 className="text-white font-bold text-lg">Seventeen</h1>
            <p className="text-surface-400 text-sm">Healthcare Management</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Success State */}
          {verificationStatus === 'success' && (
            <>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <FiCheck className="w-8 h-8 text-success" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Email verified!</h2>
                <p className="text-surface-400">
                  Welcome to <span className="text-primary font-medium">Rapha Medicals</span>! 
                  Your email has been successfully verified and your account is now active.
                </p>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-lg p-6 space-y-3">
                <h3 className="text-success font-semibold">Account Setup Complete</h3>
                <div className="space-y-2 text-sm text-surface-300">
                  <div className="flex items-center space-x-2">
                    <FiCheck className="w-4 h-4 text-success" />
                    <span>HIPAA-compliant account created</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCheck className="w-4 h-4 text-success" />
                    <span>Security protocols activated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCheck className="w-4 h-4 text-success" />
                    <span>Healthcare dashboard ready</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Access Dashboard</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Expired State */}
          {verificationStatus === 'expired' && (
            <>
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                <FiClock className="w-8 h-8 text-warning" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Link expired</h2>
                <p className="text-surface-400">
                  This verification link has expired for security reasons. Please request a new verification email.
                </p>
              </div>

              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-warning text-sm">
                  Verification links expire after 24 hours to protect your healthcare data.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isResending ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiMail className="w-5 h-5" />
                      <span>Send new verification email</span>
                    </>
                  )}
                </button>
                
                <Link
                  to="/login"
                  className="block text-surface-400 hover:text-primary transition-colors"
                >
                  Back to login
                </Link>
              </div>
            </>
          )}

          {/* Error State */}
          {verificationStatus === 'error' && (
            <>
              <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto">
                <FiX className="w-8 h-8 text-error" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Verification failed</h2>
                <p className="text-surface-400">
                  We couldn't verify your email address. This could be due to an invalid or corrupted link.
                </p>
              </div>

              <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                <p className="text-error text-sm">
                  Please ensure you clicked the complete link from your email, or request a new verification email.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isResending ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiMail className="w-5 h-5" />
                      <span>Request new verification email</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleRequestNewLink}
                  className="w-full bg-surface-700 hover:bg-surface-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Start registration again
                </button>
              </div>
            </>
          )}

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
      </div>
    </div>
  );
}

function VerifyEmail() {
  return (
    <ThemeProvider>
      <VerifyEmailContent />
    </ThemeProvider>
  );
}

export default VerifyEmail;
