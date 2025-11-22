import api from './auth';

export interface Goal {
  _id: string;
  patientId: string;
  title: string;
  description: string;
  targetDate: string;
  status: 'active' | 'completed' | 'cancelled';
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface Reminder {
  _id: string;
  patientId: string;
  title: string;
  description: string;
  type: 'medication' | 'appointment' | 'general';
  scheduledDate: string;
  isActive: boolean;
  recurrence?: 'daily' | 'weekly' | 'monthly' | 'none';
  createdAt: string;
  updatedAt: string;
}

export interface CreateGoalRequest {
  title: string;
  description: string;
  targetDate: string;
}

export interface UpdateGoalRequest {
  title?: string;
  description?: string;
  targetDate?: string;
  status?: 'active' | 'completed' | 'cancelled';
  progress?: number;
}

export interface CreateReminderRequest {
  title: string;
  description: string;
  type: 'medication' | 'appointment' | 'general';
  scheduledDate: string;
  recurrence?: 'daily' | 'weekly' | 'monthly' | 'none';
}

// Goals API functions
export const getPatientGoals = async (): Promise<Goal[]> => {
  const response = await api.get('/goals');
  return response.data;
};

export const getPatientGoal = async (goalId: string): Promise<Goal> => {
  const response = await api.get(`/goals/${goalId}`);
  return response.data;
};

export const createPatientGoal = async (goalData: CreateGoalRequest): Promise<Goal> => {
  const response = await api.post('/goals', goalData);
  return response.data;
};

export const updatePatientGoal = async (goalId: string, updateData: UpdateGoalRequest): Promise<Goal> => {
  const response = await api.put(`/goals/${goalId}`, updateData);
  return response.data;
};

export const deletePatientGoal = async (goalId: string): Promise<void> => {
  await api.delete(`/goals/${goalId}`);
};

// Reminders API functions
export const getPatientReminders = async (): Promise<Reminder[]> => {
  const response = await api.get('/reminders');
  return response.data;
};

export const getPatientReminder = async (reminderId: string): Promise<Reminder> => {
  const response = await api.get(`/reminders/${reminderId}`);
  return response.data;
};

export const createPatientReminder = async (reminderData: CreateReminderRequest): Promise<Reminder> => {
  const response = await api.post('/reminders', reminderData);
  return response.data;
};

export const updatePatientReminder = async (reminderId: string, updateData: Partial<CreateReminderRequest & { isActive: boolean }>): Promise<Reminder> => {
  const response = await api.put(`/reminders/${reminderId}`, updateData);
  return response.data;
};

export const deletePatientReminder = async (reminderId: string): Promise<void> => {
  await api.delete(`/reminders/${reminderId}`);
};

export default {
  getPatientGoals,
  getPatientGoal,
  createPatientGoal,
  updatePatientGoal,
  deletePatientGoal,
  getPatientReminders,
  getPatientReminder,
  createPatientReminder,
  updatePatientReminder,
  deletePatientReminder,
};
