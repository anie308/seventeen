import { useTheme } from "../ThemeProvider";
import { FiShield, FiClock, FiUsers, FiAward } from "react-icons/fi";
import heroImg from "../../assets/hero.jpg";

function Hero() {
  const { theme } = useTheme();
  
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      
      <div className="relative grid lg:grid-cols-2 items-center gap-12 lg:p-[80px_40px] p-[50px_20px] ">
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <FiShield className="w-4 h-4" />
            <span>HIPAA Compliant Healthcare Platform</span>
          </div>
          
          <h1 className="text-[30px] lg:text-[50px] font-bold text-white leading-tight mb-2">
            Streamline Your <span className="text-primary-300">Healthcare</span> Operations
          </h1>
          
          <p className="text-surface-200 text-[14px] lg:text-[18px]  mb-8 max-w-2xl">
            Empower your medical team with <span className="font-semibold text-white">{theme.hospitalName}</span>'s 
            comprehensive management platform. From patient records to staff scheduling, 
            everything you need in one secure, intuitive system.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full">
            <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-lg p-4 text-center">
              <FiShield className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">HIPAA</div>
              <div className="text-surface-300 text-xs">Compliant</div>
            </div>
            <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-lg p-4 text-center">
              <FiClock className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">24/7</div>
              <div className="text-surface-300 text-xs">Support</div>
            </div>
            <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-lg p-4 text-center">
              <FiUsers className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">500+</div>
              <div className="text-surface-300 text-xs">Hospitals</div>
            </div>
            <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-lg p-4 text-center">
              <FiAward className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">99.9%</div>
              <div className="text-surface-300 text-xs">Uptime</div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 mb-8">
            <button className="bg-primary hover:bg-primary-700 text-white shadow-lg px-8 py-4 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-semibold rounded-xl transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 text-surface-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-surface-800/30 backdrop-blur-sm border border-surface-700 rounded-2xl p-6">
              <img 
                src={heroImg} 
                className="w-full lg:w-[90%] object-cover rounded-xl h-[300px] lg:h-[400px] shadow-2xl" 
                alt="Modern hospital management interface showing patient dashboard and medical data"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-surface-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-surface-700">System Online</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-surface-200">
                <div className="text-sm text-surface-600 mb-1">Active Patients</div>
                <div className="text-2xl font-bold text-surface-900">1,247</div>
                <div className="text-xs text-success">+12% this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
