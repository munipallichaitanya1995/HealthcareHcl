import axios from "axios";

// Base API configuration
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  role: "patient" | "provider";
  token?: string;
}

export interface RegisterPatientRequest {
  name: string;
  email: string;
  password: string;
  age?: number;
  allergies?: string;
  medications?: string;
  height?: number;
  weight?: number;
  bloodgroup?: string;
  bodymass?: number;
}

export interface RegisterProviderRequest {
  name: string;
  email: string;
  password: string;
  specialization: string;
  licenseNumber: string;
  clinic?: string;
  phone?: string;
  experience?: number;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
  role: "patient" | "provider";
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// API functions
export const loginUser = async (
  credentials: LoginRequest & { role: "patient" | "provider" }
): Promise<LoginResponse> => {
  const loginEndpoint = credentials.role === "patient"
    ? "/auth/login/patient"
    : "/auth/login/provider";

  try {
    const response = await api.post(loginEndpoint, {
      email: credentials.email,
      password: credentials.password,
    });
    const data = response.data;

    return {
      id: data.user._id,
      name: data.user.name,
      email: data.user.email,
      role: credentials.role,
      token: data.token,
    };
  } catch {
    // If login fails, throw a user-friendly error
    throw new Error("Invalid email or password");
  }
};

export const registerPatient = async (
  data: RegisterPatientRequest
): Promise<RegisterResponse> => {
  const response = await api.post("/patients", data);
  const patientData = response.data;

  // Return simplified response since backend doesn't return token for registration
  return {
    id: patientData._id,
    name: patientData.name,
    email: patientData.email,
    role: "patient",
  };
};

export const registerProvider = async (
  data: RegisterProviderRequest
): Promise<RegisterResponse> => {
  const response = await api.post("/providers", data);
  const providerData = response.data;

  return {
    id: providerData._id,
    name: providerData.name,
    email: providerData.email,
    role: "provider",
  };
};

export const getUser = async (userId: number): Promise<User> => {
  const response = await api.get<User>(`/users/${userId}`);
  return response.data;
};

export default api;
