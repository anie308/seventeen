import { FiArrowRight, FiCalendar, FiPhone, FiPlay } from "react-icons/fi";
import ready from "../../assets/ready.svg";

function Ready() {

  const benefits = [
    "Setup your hospital in 24 hours",
    "Free onboarding and training",
    "HIPAA-compliant from day one",
    "24/7 healthcare support"
  ];

  return (
    <div className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ready to Transform your<span className="text-primary-300">Healthcare Services</span>?
              </h2>
              <p className="text-surface-300 text-lg lg:text-xl leading-relaxed">
                Join hundreds of healthcare facilities already using Seventeen to deliver 
                better patient care, reduce administrative burden, and improve operational efficiency.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-surface-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>Schedule Free Demo</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <FiPhone className="w-5 h-5" />
                  <span>Talk to Specialist</span>
                </button>
              </div>
              
              {/* Secondary CTA */}
              <div className="flex items-center space-x-4 text-surface-400">
                <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <FiPlay className="w-4 h-4" />
                  <span className="text-sm">Watch 2-minute demo</span>
                </button>
                <span className="text-surface-600">•</span>
                <span className="text-sm">No credit card required</span>
              </div>
            </div>

            {/* Urgency Message */}
            {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Limited Time Offer</h4>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Free setup and 3 months complimentary support for the first 100 hospitals. 
                    <span className="text-primary font-medium"> 23 spots remaining.</span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-surface-800/30 backdrop-blur-sm border border-surface-700 rounded-2xl p-8">
              <img 
                src={ready} 
                alt="Healthcare professionals using modern hospital management system"
                className="w-full h-auto"
              />
              
              {/* Floating Statistics */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-surface-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-surface-900">98%</div>
                  <div className="text-xs text-surface-600">Satisfaction Rate</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-surface-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-surface-900">3 Min</div>
                  <div className="text-xs text-surface-600">Avg. Check-in Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-16 text-center">
          <p className="text-surface-400 text-sm mb-4">Trusted by leading healthcare institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-surface-800/50 px-4 py-2 rounded-lg">
              <span className="text-surface-300 text-sm font-medium">Johns Hopkins Compatible</span>
            </div>
            <div className="bg-surface-800/50 px-4 py-2 rounded-lg">
              <span className="text-surface-300 text-sm font-medium">Mayo Clinic Standards</span>
            </div>
            <div className="bg-surface-800/50 px-4 py-2 rounded-lg">
              <span className="text-surface-300 text-sm font-medium">Cleveland Clinic Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
