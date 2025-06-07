import { FiUsers, FiCalendar, FiFileText, FiShield, FiBarChart  } from "react-icons/fi";
import seamless from '../../assets/seamless.svg'
import dashboard from '../../assets/dashboard.svg'
import scalable from '../../assets/scalable.svg'

function Features() {
  const features = [
    {
      icon: FiUsers,
      title: "Patient Management",
      description: "Comprehensive patient records, medical history, and appointment tracking in one secure platform",
      image: seamless,
      benefits: ["Electronic Health Records", "Patient Portal Access", "Medical History Tracking"]
    },
    {
      icon: FiBarChart,
      title: "Analytics Dashboard",
      description: "Real-time insights into hospital operations, patient flow, and performance metrics",
      image: dashboard,
      benefits: ["Real-time Analytics", "Custom Reports", "Performance Metrics"]
    },
    {
      icon: FiBarChart,
      title: "Clinical Workflows",
      description: "Streamlined clinical processes from admission to discharge with built-in safety protocols",
      image: scalable,
      benefits: ["Treatment Protocols", "Medication Management", "Safety Checklists"]
    }
  ];

  const additionalFeatures = [
    {
      icon: FiCalendar,
      title: "Appointment Scheduling",
      description: "Smart scheduling system with automated reminders and resource optimization"
    },
    {
      icon: FiFileText,
      title: "Documentation",
      description: "Digital forms, consent management, and automated compliance reporting"
    },
    {
      icon: FiShield,
      title: "Data Security",
      description: "Bank-level encryption with comprehensive audit trails and access controls"
    }
  ];

  return (
    <div className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <FiBarChart className="w-4 h-4 mr-2" />
            Healthcare Features
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Everything Your <span className="text-primary-300">Medical Team</span> Needs
          </h2>
          <p className="text-surface-300 text-lg max-w-3xl mx-auto">
            Seventeen provides comprehensive healthcare management tools designed specifically 
            for modern medical practices and hospitals.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Feature Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    className="w-full h-48 object-cover" 
                    alt={feature.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-surface-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-surface-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-surface-800/30 backdrop-blur-sm border border-surface-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Healthcare Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-surface-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Seamless Integration with Existing Systems
          </h3>
          <p className="text-surface-300 mb-6 max-w-2xl mx-auto">
            Connect with popular EHR systems, laboratory equipment, and imaging devices. 
            Our API-first approach ensures compatibility with your current infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-surface-400">
            <span className="bg-surface-800/50 px-3 py-1 rounded-full">Epic Integration</span>
            <span className="bg-surface-800/50 px-3 py-1 rounded-full">Cerner Compatible</span>
            <span className="bg-surface-800/50 px-3 py-1 rounded-full">HL7 FHIR</span>
            <span className="bg-surface-800/50 px-3 py-1 rounded-full">DICOM Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
