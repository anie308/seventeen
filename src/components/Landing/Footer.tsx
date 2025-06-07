import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiShield } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";
import logo from '../../assets/gt-logo.svg';

function Footer() {
  const { theme } = useTheme();

  const footerSections = {
    platform: [
      { label: "Patient Management", href: "#" },
      { label: "Staff Dashboard", href: "#" },
      { label: "Analytics & Reports", href: "#" },
      { label: "Appointment System", href: "#" },
      { label: "Billing & Payments", href: "#" }
    ],
    healthcare: [
      { label: "For Hospitals", href: "#" },
      { label: "For Clinics", href: "#" },
      { label: "For Specialists", href: "#" },
      { label: "For Labs", href: "#" },
      { label: "For Pharmacies", href: "#" }
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Training Videos", href: "#" },
      { label: "Best Practices", href: "#" },
      { label: "Security Guide", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "HIPAA Compliance", href: "#" },
      { label: "Data Processing", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  };

  const complianceBadges = [
    "HIPAA Compliant",
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Ready"
  ];

  return (
    <footer className="bg-surface-900 border-t border-surface-700">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Seventeen Healthcare" className="h-12" />
                <div>
                  <h3 className="text-white font-bold text-lg">Seventeen</h3>
                  <p className="text-surface-400 text-sm">Healthcare Management</p>
                </div>
              </div>
              
              <p className="text-surface-300 leading-relaxed max-w-md">
                Empowering healthcare facilities with secure, compliant, and intuitive 
                management solutions. Trusted by {theme.hospitalName} and hundreds of other institutions.
              </p>
              
              <button className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>

              {/* Compliance Badges */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center">
                  <FiShield className="w-4 h-4 mr-2" />
                  Compliance & Security
                </h4>
                <div className="flex flex-wrap gap-2">
                  {complianceBadges.map((badge, index) => (
                    <span key={index} className="bg-surface-800 text-surface-300 text-xs px-2 py-1 rounded border border-surface-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3">
                {footerSections.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-surface-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthcare Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerSections.healthcare.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-surface-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerSections.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-surface-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal & Support</h4>
              <ul className="space-y-3 mb-6">
                {footerSections.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-surface-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-surface-400 text-sm">
                  <FiPhone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-surface-400 text-sm">
                  <FiMail className="w-4 h-4" />
                  <span>support@seventeen.health</span>
                </div>
                <div className="flex items-center space-x-2 text-surface-400 text-sm">
                  <FiMapPin className="w-4 h-4" />
                  <span>Healthcare District, Medical Plaza</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-surface-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-surface-400 text-sm">
              © 2024 Seventeen Healthcare Management. All rights reserved. 
              <span className="ml-2 text-surface-500">HIPAA & SOC 2 Compliant</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-surface-500 text-sm">Connect with us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-surface-400 hover:text-primary transition-colors">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-surface-400 hover:text-primary transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Support Banner */}
        {/* <div className="bg-gradient-to-r from-error/10 to-warning/10 border border-error/20 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">24/7 Emergency Healthcare IT Support Available</span>
            <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
