import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getHealthTopics } from "../api/healthInfo";
import type { HealthTopic } from "../api/healthInfo";

const HealthInformation = () => {
  const navigate = useNavigate();

  const {
    data: healthTopics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["healthTopics"],
    queryFn: getHealthTopics,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold">
            Error loading health information
          </p>
          <p className="text-sm mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Healthcare Portal
          </h1>
          <nav className="flex justify-center space-x-8 mt-8">
            <a
              href="#home"
              className="text-white hover:text-blue-100 transition duration-150"
            >
              Home
            </a>
            <a
              href="#health-topics"
              className="text-white hover:text-blue-100 transition duration-150"
            >
              Health Topics
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-100 transition duration-150"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-100 transition duration-150"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Latest Health Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Health Information
        </h2>

        {/* Health Topic Cards Grid */}
        <div className="space-y-6">
          {healthTopics?.map((topic: HealthTopic) => (
            <div
              key={topic.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {topic.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">
                      {new Date(topic.publishedDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {topic.description}
                  </p>

                  <button
                    onClick={() => navigate(`/health-info/${topic.id}`)}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {healthTopics && healthTopics.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No health information available
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthInformation;
