import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  howItWorks: string[];
  benefits: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: "📋",
    title: "Patient Registration / Profile",
    description:
      "Complete patient registration with comprehensive health information and secure profile management.",
    features: [
      "Personal Details (Name, DOB, Gender, Contact)",
      "Address and Emergency Contacts",
      "Complete Health History",
      "Secure Password Setup",
      "Profile Photo Upload",
      "Insurance Information",
    ],
    howItWorks: [
      "Click on Registration",
      "Fill in personal and contact details",
      "Add health history and medical conditions",
      "Set up secure password",
      "Verify email/phone",
    ],
    benefits: [
      "One-time registration for all services",
      "Secure data storage with encryption",
      "Easy profile updates anytime",
      "Quick access to all portal features",
    ],
  },
  {
    id: 2,
    icon: "🔐",
    title: "Patient Login / Authentication",
    description:
      "Secure JWT-based authentication system for safe access to your health records.",
    features: [
      "Email/Phone Login",
      "Health ID Login",
      "Two-Factor Authentication",
      "Biometric Login Support",
      "Password Recovery",
      "Session Management",
    ],
    howItWorks: [
      "Enter credentials (email/phone/health ID)",
      "Complete 2FA if enabled",
      "Access your dashboard",
      "Automatic session timeout for security",
    ],
    benefits: [
      "Bank-level security with JWT tokens",
      "Multiple login options",
      "Secure session management",
      "Quick and easy access",
    ],
  },
  {
    id: 3,
    icon: "🩹",
    title: "Medical History Management",
    description:
      "Comprehensive digital medical history storage for better healthcare decisions.",
    features: [
      "Previous Diagnoses Record",
      "Medication History",
      "Allergy Information",
      "Surgery Records",
      "Medical Reports Storage",
      "Family Medical History",
    ],
    howItWorks: [
      "Add medical conditions and diagnoses",
      "Upload or link medical reports",
      "Update medication and allergy lists",
      "Share history with doctors",
    ],
    benefits: [
      "Complete health history in one place",
      "Easy sharing with healthcare providers",
      "Better informed medical decisions",
      "Track health progression over time",
    ],
  },
  {
    id: 4,
    icon: "📅",
    title: "Appointments Booking",
    description:
      "Book appointments with doctors and hospitals seamlessly online or offline.",
    features: [
      "Online Appointment Booking",
      "Offline/Walk-in Scheduling",
      "Doctor Availability Calendar",
      "Appointment Reminders",
      "Rescheduling Options",
      "Cancellation Management",
    ],
    howItWorks: [
      "Search for doctor/hospital",
      "Select preferred date and time",
      "Confirm appointment",
      "Receive confirmation and reminders",
    ],
    benefits: [
      "24/7 booking availability",
      "No more waiting in queues",
      "Automated reminders",
      "Easy rescheduling",
    ],
  },
  {
    id: 5,
    icon: "👨‍⚕️",
    title: "Doctor Search & Filter",
    description:
      "Find the right healthcare provider based on specialization, location, and ratings.",
    features: [
      "Search by Specialization",
      "Filter by City/Location",
      "Doctor Ratings & Reviews",
      "Availability Status",
      "Experience & Qualifications",
      "Languages Spoken",
    ],
    howItWorks: [
      "Enter specialization or doctor name",
      "Apply filters (location, rating, availability)",
      "View detailed doctor profiles",
      "Book appointment directly",
    ],
    benefits: [
      "Find specialists easily",
      "Read verified patient reviews",
      "Compare doctors and ratings",
      "Make informed choices",
    ],
  },
  {
    id: 6,
    icon: "💊",
    title: "Prescription Viewer",
    description:
      "Access and manage digital prescriptions shared by your healthcare providers.",
    features: [
      "Digital Prescription Access",
      "Prescription History",
      "Medicine Details & Dosage",
      "Refill Reminders",
      "Download/Print Options",
      "Pharmacy Integration",
    ],
    howItWorks: [
      "Doctors share prescriptions digitally",
      "View in your patient portal",
      "Download or print prescriptions",
      "Order medicines online",
    ],
    benefits: [
      "Never lose prescriptions",
      "Easy medicine ordering",
      "Track medication history",
      "Refill reminders",
    ],
  },
  {
    id: 7,
    icon: "🧪",
    title: "Lab Reports Access",
    description:
      "View, download, and share your laboratory test results securely.",
    features: [
      "Test Results Viewer",
      "Report Download (PDF)",
      "Historical Test Data",
      "Result Comparison",
      "Share with Doctors",
      "Result Notifications",
    ],
    howItWorks: [
      "Labs upload results to portal",
      "Receive notification",
      "View reports online",
      "Download or share with doctors",
    ],
    benefits: [
      "Instant access to results",
      "Digital storage of all reports",
      "Easy result tracking",
      "Secure sharing capabilities",
    ],
  },
  {
    id: 8,
    icon: "💰",
    title: "Billing & Payments",
    description:
      "Transparent billing and secure online payment options for medical services.",
    features: [
      "Invoice Viewing",
      "Online Payments",
      "Payment History",
      "Insurance Claims",
      "Multiple Payment Methods",
      "Payment Receipts",
    ],
    howItWorks: [
      "View invoices after consultation/tests",
      "Select payment method",
      "Complete secure payment",
      "Receive digital receipt",
    ],
    benefits: [
      "Cashless transactions",
      "Transparent billing",
      "Payment tracking",
      "Insurance integration",
    ],
  },
  {
    id: 9,
    icon: "💬",
    title: "Chat / Consult Online",
    description:
      "Connect with doctors through teleconsultation for remote medical advice.",
    features: [
      "Video Consultation",
      "Text Chat Support",
      "Scheduled Consultations",
      "Real-time Messaging",
      "File Sharing",
      "Consultation History",
    ],
    howItWorks: [
      "Book online consultation",
      "Join video/chat at scheduled time",
      "Discuss health concerns",
      "Receive prescription digitally",
    ],
    benefits: [
      "Consult from home",
      "Save time and travel",
      "Access specialists remotely",
      "Convenient follow-ups",
    ],
  },
  {
    id: 10,
    icon: "🗓️",
    title: "Treatment Tracking",
    description:
      "Monitor ongoing treatments, medications, and follow-up appointments.",
    features: [
      "Treatment Plans",
      "Medication Reminders",
      "Follow-up Tracking",
      "Progress Monitoring",
      "Compliance Tracking",
      "Treatment History",
    ],
    howItWorks: [
      "Doctor creates treatment plan",
      "View plan in your dashboard",
      "Receive medication reminders",
      "Track progress and follow-ups",
    ],
    benefits: [
      "Better treatment adherence",
      "Automated reminders",
      "Track recovery progress",
      "Improved health outcomes",
    ],
  },
  {
    id: 11,
    icon: "🧠",
    title: "Personal Health Dashboard",
    description:
      "Track vital health metrics with visual charts and trends over time.",
    features: [
      "Weight Tracking",
      "Blood Pressure Monitoring",
      "Blood Sugar Levels",
      "Heart Rate Tracking",
      "Visual Charts & Trends",
      "Goal Setting",
    ],
    howItWorks: [
      "Log health metrics regularly",
      "View charts and trends",
      "Set health goals",
      "Track progress over time",
    ],
    benefits: [
      "Visualize health trends",
      "Early warning signs",
      "Motivate healthy habits",
      "Share data with doctors",
    ],
  },
  {
    id: 12,
    icon: "🛑",
    title: "Emergency / SOS Support",
    description: "Quick access to emergency services and ambulance requests.",
    features: [
      "One-Click Emergency Call",
      "Ambulance Request",
      "Emergency Contacts",
      "Location Sharing",
      "Medical Alert System",
      "24/7 Support",
    ],
    howItWorks: [
      "Click SOS button",
      "System calls emergency services",
      "Shares your location automatically",
      "Notifies emergency contacts",
    ],
    benefits: [
      "Immediate emergency response",
      "Automatic location sharing",
      "Peace of mind",
      "Quick ambulance dispatch",
    ],
  },
  {
    id: 13,
    icon: "📍",
    title: "Nearby Hospitals / Labs",
    description:
      "Interactive map showing nearest healthcare facilities and services.",
    features: [
      "Hospital Locator",
      "Lab Finder",
      "Pharmacy Locator",
      "Clinic Search",
      "Map View with Directions",
      "Facility Details & Ratings",
    ],
    howItWorks: [
      "Enable location services",
      "View nearby facilities on map",
      "Filter by type (hospital/lab/pharmacy)",
      "Get directions to facility",
    ],
    benefits: [
      "Find nearest healthcare quickly",
      "Compare facilities",
      "Get directions instantly",
      "View operating hours",
    ],
  },
  {
    id: 14,
    icon: "🌿",
    title: "Health Tips / Bulletins",
    description:
      "Daily health tips and disease awareness information for wellness.",
    features: [
      "Daily Health Tips",
      "Disease Awareness Articles",
      "Seasonal Health Advice",
      "Nutrition Guidelines",
      "Exercise Recommendations",
      "Mental Health Resources",
    ],
    howItWorks: [
      "Browse health topics",
      "Read daily tips",
      "Subscribe to newsletters",
      "Get personalized recommendations",
    ],
    benefits: [
      "Stay informed about health",
      "Learn prevention strategies",
      "Evidence-based information",
      "Regular health updates",
    ],
  },
  {
    id: 15,
    icon: "📈",
    title: "Vaccination & Immunization Records",
    description:
      "Track completed vaccinations and receive reminders for pending ones.",
    features: [
      "Vaccination History",
      "Immunization Schedule",
      "Reminder Notifications",
      "Digital Vaccination Card",
      "Child Immunization Tracker",
      "Travel Vaccination Guide",
    ],
    howItWorks: [
      "Add completed vaccinations",
      "View upcoming vaccination schedule",
      "Receive reminder notifications",
      "Download digital vaccination card",
    ],
    benefits: [
      "Never miss a vaccination",
      "Complete immunization record",
      "Travel ready documentation",
      "Child health tracking",
    ],
  },
  {
    id: 16,
    icon: "📤",
    title: "Upload Reports / Files",
    description:
      "Upload medical reports, images, and documents for doctor review.",
    features: [
      "Document Upload",
      "Image Upload",
      "PDF Support",
      "File Organization",
      "Secure Cloud Storage",
      "Easy Sharing",
    ],
    howItWorks: [
      "Click upload button",
      "Select files (PDF/images)",
      "Add description/date",
      "Share with healthcare providers",
    ],
    benefits: [
      "Centralized document storage",
      "Easy access anytime",
      "Secure cloud backup",
      "Share with multiple doctors",
    ],
  },
  {
    id: 17,
    icon: "🔔",
    title: "Reminders & Notifications",
    description:
      "Stay updated with appointment reminders, medication alerts, and health news.",
    features: [
      "Appointment Reminders",
      "Medicine Alerts",
      "Test Result Notifications",
      "Follow-up Reminders",
      "Health News Updates",
      "Custom Reminders",
    ],
    howItWorks: [
      "System automatically sets reminders",
      "Receive notifications via app/email/SMS",
      "Customize notification preferences",
      "Snooze or dismiss reminders",
    ],
    benefits: [
      "Never miss appointments",
      "Medication adherence",
      "Stay informed",
      "Customizable alerts",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const handleContactClick = () => {
    closeModal();
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to make your medical
            journey seamless and efficient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-400"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="text-6xl mr-4">{selectedService.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold">
                      {selectedService.title}
                    </h2>
                    <p className="text-blue-100 mt-2">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✨</span>
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-blue-50 p-3 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🔄</span>
                  How It Works
                </h3>
                <div className="space-y-3">
                  {selectedService.howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-green-50 p-4 rounded-lg"
                    >
                      <span className="text-2xl mr-3">✓</span>
                      <span className="text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us for More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
