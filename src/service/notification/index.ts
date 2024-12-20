import axios from "axios";
interface Notification {
  type: "status" | "approval" | "active" | "completion";
  userId: string;
  projectId: string;
  value: string | boolean;
  // Add other fields based on your backend response
}
interface PaginatedResponse<T> {
  data: T[];
  total: number; // Total number of items in the database
}
const notificationApi = {
  get: async (userId: string): Promise<Notification> => {
    const response = await axios.get<any>(
      (process.env.NEXT_PUBLIC_API_URL as string) + `notifications/get?userId=${userId}`,
    );
    return response.data;
  },

  update: async (data: Notification): Promise<Notification> => {
    const response = await axios.post<Notification>(
      (process.env.NEXT_PUBLIC_API_URL as string) + "notifications/bulk-create",
      data
    );
    return response.data;
  },
};

export { notificationApi };
