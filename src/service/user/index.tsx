import axios from "axios";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  // Add other fields based on your backend response
}
interface PaginatedResponse<T> {
  data: T[];
  total: number; // Total number of items in the database
}
const userApi = {
  update: async (data: User): Promise<User> => {
    const response = await axios.post<User>(
      (process.env.NEXT_PUBLIC_API_URL as string) + "user/update",
      data
    );
    return response.data;
  },
};

export { userApi };
