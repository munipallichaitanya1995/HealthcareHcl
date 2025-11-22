import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getHealthTopicDetail } from "../api/healthTopics";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HealthTopicDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: topic,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["healthTopicDetail", id],
    queryFn: () => getHealthTopicDetail(Number(id)),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading details...</p>
        </div>
      </div>
    );
  }

  if (isError || !topic) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold mb-4">
            Error loading health topic
          </p>
          <button
            onClick={() => navigate("/health-topics")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Health Topics
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/health-topics")}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Health Topics
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 md:p-12 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{topic.icon}</span>
                <div>
                  <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {topic.category}
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {topic.title}
              </h1>
              <p className="text-xl text-blue-100 mb-4">{topic.summary}</p>
              <div className="flex items-center text-sm">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Affects: {topic.prevalence}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">📋</span>
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {topic.description}
              </p>
            </div>

            {/* Statistics & Trends */}
            {topic.statistics && topic.statistics.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Statistics & Trends
                </h2>

                {/* Area Chart */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Cases Over Time
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={topic.statistics}>
                      <defs>
                        <linearGradient
                          id="colorCases"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: number) => value.toLocaleString()}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="cases"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorCases)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Line Chart for Deaths/Recoveries */}
                {topic.statistics[0].deaths !== undefined && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                      Mortality & Recovery Trends
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={topic.statistics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip
                          formatter={(value: number) => value.toLocaleString()}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="deaths"
                          stroke="#ef4444"
                          strokeWidth={3}
                          dot={{ fill: "#ef4444", r: 5 }}
                        />
                        {topic.statistics[0].recoveries !== undefined && (
                          <Line
                            type="monotone"
                            dataKey="recoveries"
                            stroke="#10b981"
                            strokeWidth={3}
                            dot={{ fill: "#10b981", r: 5 }}
                          />
                        )}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Bar Chart Comparison */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Year-over-Year Comparison
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topic.statistics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: number) => value.toLocaleString()}
                      />
                      <Legend />
                      <Bar
                        dataKey="cases"
                        fill="#8b5cf6"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Causes */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔬</span>
                Causes & Risk Factors
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Primary Causes
                  </h3>
                  <ul className="space-y-3">
                    {topic.causes.map((cause, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Risk Factors
                  </h3>
                  <ul className="space-y-3">
                    {topic.riskFactors.map((factor, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚕️</span>
                Signs & Symptoms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.symptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatments & Cures */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💊</span>
                Treatments & Medications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Treatment Options
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {topic.treatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-green-50 p-4 rounded-lg"
                      >
                        <svg
                          className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-800 text-sm">
                          {treatment}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Common Medications
                  </h3>
                  <div className="space-y-3">
                    {topic.medications.map((medication, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition"
                      >
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                          💊
                        </div>
                        <span className="text-gray-800 font-medium">
                          {medication}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                Prevention & Lifestyle
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Preventive Measures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topic.prevention.map((measure, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          ✓
                        </span>
                        <span className="text-gray-800">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {topic.lifestyle && topic.lifestyle.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Lifestyle Recommendations
                    </h3>
                    <div className="space-y-3">
                      {topic.lifestyle.map((tip, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                        >
                          <span className="text-2xl mr-3">🏃</span>
                          <span className="text-gray-800">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* When to See a Doctor */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                When to See a Doctor
              </h3>
              <ul className="space-y-3">
                {topic.whenToSeeDoctor.map((warning, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-red-900"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  Emergency? Call 911
                </button>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔍</span>
                Diagnosis Methods
              </h3>
              <ul className="space-y-3">
                {topic.diagnosis.map((method, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complications */}
            {topic.complications && topic.complications.length > 0 && (
              <div className="bg-orange-50 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚠️</span>
                  Possible Complications
                </h3>
                <ul className="space-y-2">
                  {topic.complications.map((complication, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-800"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{complication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Articles */}
            {topic.relatedArticles && topic.relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📚</span>
                  Related Resources
                </h3>
                <div className="space-y-3">
                  {topic.relatedArticles.map((article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition group"
                    >
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500">{article.source}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTopicDetailPage;
