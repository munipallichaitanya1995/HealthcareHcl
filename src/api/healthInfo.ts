import axios from "axios";

// Base API configuration
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface HealthTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  publishedDate: string;
}

export interface HealthTopicDetail extends HealthTopic {
  content: string;
  author: string;
  readTime: number;
  tags: string[];
  statistics?: {
    year: string;
    value: number;
    percentage?: number;
  }[];
  tips?: string[];
  symptoms?: string[];
  prevention?: string[];
}

// Mock health information data based on posts
export const getHealthTopics = async (): Promise<HealthTopic[]> => {
  // Using JSONPlaceholder posts as mock data
  const response = await api.get("/posts?_limit=6");

  interface PostData {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  // Transform posts to health topics
  const healthTopics: HealthTopic[] = response.data.map(
    (post: PostData, index: number) => {
      const topics = [
        {
          title: "COVID-19 Updates",
          description:
            "Stay informed about the latest COVID-19 guidelines and vaccination information.",
          category: "Infectious Disease",
        },
        {
          title: "Seasonal Flu Prevention",
          description:
            "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.",
          category: "Prevention",
        },
        {
          title: "Mental Health Awareness",
          description:
            "Explore resources and support options for maintaining good mental health.",
          category: "Mental Health",
        },
        {
          title: "Heart Health Essentials",
          description:
            "Everything you need to know about maintaining a healthy heart and preventing cardiovascular disease.",
          category: "Cardiology",
        },
        {
          title: "Diabetes Management",
          description:
            "Learn about effective strategies for managing diabetes and maintaining healthy blood sugar levels.",
          category: "Endocrinology",
        },
        {
          title: "Nutrition and Wellness",
          description:
            "Discover the importance of balanced nutrition and how it impacts your overall wellness.",
          category: "Nutrition",
        },
      ];

      const topic = topics[index] || topics[0];

      return {
        id: post.id,
        title: topic.title,
        description: topic.description,
        category: topic.category,
        publishedDate: new Date(
          Date.now() - index * 24 * 60 * 60 * 1000
        ).toISOString(),
      };
    }
  );

  return healthTopics;
};

// Get detailed information about a specific health topic
export const getHealthTopicDetail = async (
  id: number
): Promise<HealthTopicDetail> => {
  const response = await api.get(`/posts/${id}`);

  // Mock detailed health information
  const detailData: { [key: number]: Partial<HealthTopicDetail> } = {
    1: {
      title: "COVID-19 Updates",
      description:
        "Stay informed about the latest COVID-19 guidelines and vaccination information.",
      category: "Infectious Disease",
      content: `
        <h2>Latest COVID-19 Guidelines</h2>
        <p>The COVID-19 pandemic continues to evolve, and staying informed about the latest guidelines is crucial for protecting yourself and others. Recent data shows significant progress in vaccination rates and understanding of the virus.</p>
        
        <h3>Vaccination Recommendations</h3>
        <p>The CDC recommends that everyone ages 6 months and older stay up to date with COVID-19 vaccines. This includes getting boosters when eligible. Studies show that vaccination significantly reduces the risk of severe illness, hospitalization, and death.</p>
        
        <h3>Prevention Measures</h3>
        <p>While vaccines are our best defense, combining vaccination with other preventive measures provides the strongest protection. Wearing masks in crowded indoor settings, maintaining good ventilation, and practicing good hygiene remain important tools.</p>
        
        <h3>Current Statistics</h3>
        <p>Recent data indicates that vaccination coverage has improved significantly, with breakthrough infections typically resulting in milder symptoms among vaccinated individuals.</p>
      `,
      author: "Dr. Sarah Johnson",
      readTime: 8,
      tags: ["COVID-19", "Vaccination", "Prevention", "Guidelines"],
      statistics: [
        { year: "2020", value: 15000000, percentage: 20 },
        { year: "2021", value: 45000000, percentage: 60 },
        { year: "2022", value: 68000000, percentage: 85 },
        { year: "2023", value: 75000000, percentage: 92 },
        { year: "2024", value: 78000000, percentage: 95 },
      ],
      tips: [
        "Get vaccinated and stay up to date with boosters",
        "Wear a mask in crowded indoor spaces",
        "Practice good hand hygiene",
        "Maintain physical distance when possible",
        "Stay home if you feel unwell",
      ],
      symptoms: [
        "Fever or chills",
        "Cough",
        "Shortness of breath",
        "Fatigue",
        "Body aches",
        "Loss of taste or smell",
      ],
    },
    2: {
      title: "Seasonal Flu Prevention",
      description:
        "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.",
      category: "Prevention",
      content: `
        <h2>Understanding Seasonal Flu</h2>
        <p>Seasonal influenza (flu) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to death. The best way to prevent flu is by getting vaccinated each year.</p>
        
        <h3>When to Get Vaccinated</h3>
        <p>September and October are generally good times to get vaccinated. Ideally, everyone should be vaccinated by the end of October. However, getting vaccinated later can still be beneficial.</p>
        
        <h3>Who Should Get Vaccinated</h3>
        <p>Everyone 6 months of age and older should get a flu vaccine every season with rare exceptions. Vaccination is particularly important for people who are at high risk of serious complications from influenza.</p>
      `,
      author: "Dr. Michael Chen",
      readTime: 6,
      tags: ["Influenza", "Vaccination", "Prevention", "Seasonal"],
      statistics: [
        { year: "2020", value: 38000000, percentage: 45 },
        { year: "2021", value: 42000000, percentage: 52 },
        { year: "2022", value: 48000000, percentage: 58 },
        { year: "2023", value: 52000000, percentage: 63 },
        { year: "2024", value: 55000000, percentage: 68 },
      ],
      tips: [
        "Get annual flu vaccination",
        "Avoid close contact with sick people",
        "Wash hands frequently",
        "Avoid touching your face",
        "Clean and disinfect surfaces",
      ],
      prevention: [
        "Annual flu vaccine",
        "Good hygiene practices",
        "Healthy lifestyle choices",
        "Adequate sleep",
        "Regular exercise",
      ],
    },
    3: {
      title: "Mental Health Awareness",
      description:
        "Explore resources and support options for maintaining good mental health.",
      category: "Mental Health",
      content: `
        <h2>The Importance of Mental Health</h2>
        <p>Mental health is just as important as physical health. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.</p>
        
        <h3>Common Mental Health Conditions</h3>
        <p>Mental health conditions are common. In fact, about 1 in 5 adults experience mental illness each year. Early intervention and treatment can help manage these conditions effectively.</p>
        
        <h3>Self-Care Strategies</h3>
        <p>Practicing self-care can help improve your mental health and outlook. This includes getting regular exercise, maintaining a healthy diet, getting enough sleep, and staying connected with others.</p>
        
        <h3>Seeking Help</h3>
        <p>If you're struggling with mental health issues, remember that help is available. Don't hesitate to reach out to mental health professionals, support groups, or crisis helplines.</p>
      `,
      author: "Dr. Emily Rodriguez",
      readTime: 10,
      tags: ["Mental Health", "Wellness", "Support", "Self-Care"],
      statistics: [
        { year: "2020", value: 52000000, percentage: 20 },
        { year: "2021", value: 57000000, percentage: 22 },
        { year: "2022", value: 61000000, percentage: 23 },
        { year: "2023", value: 64000000, percentage: 24 },
        { year: "2024", value: 67000000, percentage: 25 },
      ],
      tips: [
        "Practice mindfulness and meditation",
        "Stay connected with friends and family",
        "Exercise regularly",
        "Get adequate sleep",
        "Seek professional help when needed",
        "Limit social media use",
      ],
    },
  };

  const mockData = detailData[id] || detailData[1];

  return {
    id: response.data.id,
    publishedDate: new Date().toISOString(),
    ...mockData,
  } as HealthTopicDetail;
};

export default api;
