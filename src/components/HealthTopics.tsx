import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getHealthTopics } from "../api/healthTopics";
import type { HealthTopic } from "../api/healthTopics";

const HealthTopics = () => {
  const navigate = useNavigate();

  const {
    data: healthTopics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["healthTopicsList"],
    queryFn: getHealthTopics,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading health topics...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold mb-2">
            Error loading health topics
          </p>
          <p className="text-sm">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive information about common health conditions,
            their symptoms, treatments, and prevention strategies.
          </p>
        </div>

        {/* Health Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTopics?.map((topic: HealthTopic) => (
            <div
              key={topic.id}
              onClick={() => navigate(`/health-topics/${topic.id}`)}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-400"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl">{topic.icon}</div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {topic.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {topic.title}
              </h3>

              {/* Summary */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {topic.summary}
              </p>

              {/* Prevalence Badge */}
              <div className="flex items-center text-xs text-gray-500 mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
                <span>{topic.prevalence}</span>
              </div>

              {/* Learn More Button */}
              <div className="flex items-center text-blue-600 font-semibold text-sm group">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200"
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

        {/* Empty State */}
        {healthTopics && healthTopics.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No health topics available
            </h3>
            <p className="text-gray-600">
              Check back later for updated health information.
            </p>
          </div>
        )}

        {/* Info Footer */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Evidence-Based
              </h4>
              <p className="text-sm text-gray-600">
                All information is backed by medical research and expert review
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🩺</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Comprehensive
              </h4>
              <p className="text-sm text-gray-600">
                Detailed coverage of symptoms, treatments, and prevention
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Updated Regularly
              </h4>
              <p className="text-sm text-gray-600">
                Content reviewed and updated with latest medical guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTopics;
