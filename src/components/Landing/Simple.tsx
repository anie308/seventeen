import { FiArrowRight, FiUsers, FiMonitor, FiHeart } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";
import medtech from "../../assets/medtech.jpg";
import support from "../../assets/support.jpg";
import doctors from "../../assets/doctora.jpg";

function Simple() {
  const { theme } = useTheme();

  const workflows = [
    {
      step: "01",
      title: "Patient Registration",
      description: "Quick check-in with digital forms and insurance verification",
      time: "2 minutes"
    },
    {
      step: "02", 
      title: "Clinical Assessment",
      description: "Digital documentation with automated clinical decision support",
      time: "5 minutes"
    },
    {
      step: "03",
      title: "Treatment Planning",
      description: "Evidence-based protocols with medication interaction checks",
      time: "3 minutes"
    },
    {
      step: "04",
      title: "Discharge & Follow-up",
      description: "Automated discharge instructions and appointment scheduling",
      time: "1 minute"
    }
  ];

  return (
    <div className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Call to Action Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Simple Implementation, <span className="text-primary-300">Powerful Results</span>
          </h2>
          <p className="text-surface-300 text-lg mb-8 max-w-3xl mx-auto">
            Get your hospital up and running with Seventeen in just 24 hours. 
            Free setup for the first 100 early adopters.
          </p>
          <button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Register {theme.hospitalName} Today
          </button>
        </div>

        {/* Workflow Demonstration */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Streamlined Healthcare Workflow
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <div key={index} className="relative group">
                <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-bold text-lg">{workflow.step}</span>
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">{workflow.time}</span>
                  </div>
                  <h4 className="font-semibold text-white mb-3">{workflow.title}</h4>
                  <p className="text-surface-300 text-sm leading-relaxed">{workflow.description}</p>
                </div>
                {index < workflows.length - 1 && (
                  <FiArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary w-6 h-6 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Built for Healthcare Professionals, Backed by Expertise
            </h3>
            <p className="text-surface-300 text-lg max-w-4xl mx-auto">
              Seventeen is designed by healthcare and technology experts who understand the 
              daily challenges of hospital management. Every feature is crafted to make your work 
              easier, faster, and more secure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <img
                    src={doctors}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    alt="Medical professionals collaborating"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm rounded-lg p-2">
                    <FiHeart className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Built with Medical Expertise</h4>
              <p className="text-surface-300 leading-relaxed">
                Developed in collaboration with doctors, nurses, lab scientists, and hospital managers 
                to ensure clinical relevance and usability.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <img
                    src={medtech}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    alt="Advanced medical technology"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm rounded-lg p-2">
                    <FiMonitor className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Future-Proof Technology</h4>
              <p className="text-surface-300 leading-relaxed">
                Built on modern cloud infrastructure with regular updates to meet evolving 
                healthcare standards and regulatory requirements.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <img
                    src={support}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    alt="Dedicated healthcare support team"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm rounded-lg p-2">
                    <FiUsers className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Dedicated Healthcare Support</h4>
              <p className="text-surface-300 leading-relaxed">
                24/7 support from healthcare IT specialists who understand medical workflows 
                and can assist with both technical and clinical questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simple;
