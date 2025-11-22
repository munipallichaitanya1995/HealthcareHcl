import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyConsent = () => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedHipaa, setAcceptedHipaa] = useState(false);

  const handleContinue = () => {
    if (!acceptedTerms || !acceptedPrivacy || !acceptedHipaa) {
      alert("Please accept all terms and policies to continue");
      return;
    }

    // Store consent in localStorage
    localStorage.setItem("privacyConsent", "true");
    localStorage.setItem("consentDate", new Date().toISOString());

    // Navigate to dashboard
    navigate("/dashboard");
  };

  const handleDecline = () => {
    // Clear auth and go back to landing
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">
              Privacy & Data Consent
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Please review and accept our policies to continue
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Terms of Service */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 cursor-pointer"
                />
                <div className="ml-4 flex-1">
                  <label
                    htmlFor="terms"
                    className="font-semibold text-gray-900 text-lg cursor-pointer"
                  >
                    Terms of Service
                  </label>
                  <p className="text-sm text-gray-600 mt-2">
                    I have read and agree to the Terms of Service, including:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Use of healthcare services in accordance with medical
                        standards
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Responsibility for accuracy of personal health
                        information provided
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Understanding that online consultations do not replace
                        emergency services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Compliance with payment terms and conditions</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm mt-3 inline-block"
                  >
                    Read full Terms of Service →
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 cursor-pointer"
                />
                <div className="ml-4 flex-1">
                  <label
                    htmlFor="privacy"
                    className="font-semibold text-gray-900 text-lg cursor-pointer"
                  >
                    Privacy Policy
                  </label>
                  <p className="text-sm text-gray-600 mt-2">
                    I understand how my personal data will be collected, used,
                    and protected:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Collection of personal and health information for
                        medical purposes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Secure storage with encryption and access controls
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Sharing with authorized healthcare providers only
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Right to access, modify, or delete personal data
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm mt-3 inline-block"
                  >
                    Read full Privacy Policy →
                  </a>
                </div>
              </div>
            </div>

            {/* HIPAA Consent */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition bg-blue-50">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hipaa"
                  checked={acceptedHipaa}
                  onChange={(e) => setAcceptedHipaa(e.target.checked)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 cursor-pointer"
                />
                <div className="ml-4 flex-1">
                  <label
                    htmlFor="hipaa"
                    className="font-semibold text-gray-900 text-lg cursor-pointer flex items-center"
                  >
                    HIPAA Authorization
                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      Required
                    </span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2">
                    I authorize the use and disclosure of my protected health
                    information (PHI):
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        For treatment, payment, and healthcare operations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Disclosure to authorized healthcare providers in my care
                        team
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Electronic transmission of health records as permitted
                        by HIPAA
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Understanding my rights under HIPAA privacy regulations
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>Note:</strong> You may revoke this authorization
                      at any time by contacting our Privacy Officer. Revocation
                      will not affect any actions already taken based on this
                      authorization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Processing Notice */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Data Processing Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <strong>HIPAA Compliant</strong>
                    <p className="text-gray-600">
                      All data encrypted and protected
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <div>
                    <strong>Secure Storage</strong>
                    <p className="text-gray-600">256-bit encryption at rest</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <strong>GDPR Certified</strong>
                    <p className="text-gray-600">
                      European data protection compliant
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <div>
                    <strong>Access Controls</strong>
                    <p className="text-gray-600">Role-based data access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                By continuing, you acknowledge that you have read and understood
                all policies above.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleDecline}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  Decline & Logout
                </button>
                <button
                  onClick={handleContinue}
                  disabled={
                    !acceptedTerms || !acceptedPrivacy || !acceptedHipaa
                  }
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  Accept & Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Questions about our privacy policies?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our Privacy Officer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsent;
