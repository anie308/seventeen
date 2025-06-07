import { FiShield, FiLock, FiAward, FiCheckCircle } from "react-icons/fi";

function Trusted() {
  const certifications = [
    {
      icon: FiShield,
      title: "HIPAA",
      subtitle: "Compliant",
      description: "Full compliance with healthcare privacy regulations"
    },
    {
      icon: FiLock,
      title: "SOC 2",
      subtitle: "Type II",
      description: "Security, availability, and confidentiality controls"
    },
    {
      icon: FiAward,
      title: "ISO",
      subtitle: "27001",
      description: "Information security management standards"
    },
    {
      icon: FiCheckCircle,
      title: "GDPR",
      subtitle: "Ready",
      description: "European data protection compliance"
    }
  ];

  const stats = [
    { number: "500+", label: "Healthcare Facilities" },
    { number: "1M+", label: "Patient Records Secured" },
    { number: "99.99%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Medical Support" }
  ];

  return (
    <div className="py-16 px-4 lg:px-8 bg-surface-800/30 border-y border-surface-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Trust Message */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Healthcare Professionals Worldwide
          </h2>
          <p className="text-surface-300 text-lg max-w-3xl mx-auto">
            Built with medical-grade security and compliance standards. 
            Your patient data is protected by the same standards used by major hospitals.
          </p>
        </div>

        {/* Compliance Certifications */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-surface-900/50 backdrop-blur-sm border border-surface-600 rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1 mb-3">
                <div className="text-lg font-bold text-white">{cert.title}</div>
                <div className="text-primary text-sm font-medium">{cert.subtitle}</div>
              </div>
              <p className="text-surface-400 text-xs leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-surface-300 text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="mt-16 bg-gradient-to-r from-surface-900/50 to-surface-800/50 border border-surface-600 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Enterprise-Grade Security Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <FiLock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">End-to-End Encryption</h4>
              <p className="text-surface-400 text-sm">AES-256 encryption for all data in transit and at rest</p>
            </div>
            <div>
              <FiShield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Multi-Factor Authentication</h4>
              <p className="text-surface-400 text-sm">Advanced authentication with biometric support</p>
            </div>
            <div>
              <FiCheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Audit Trails</h4>
              <p className="text-surface-400 text-sm">Complete activity logs for compliance and security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
