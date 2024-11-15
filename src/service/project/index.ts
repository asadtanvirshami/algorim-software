import axios from "axios";
interface Project {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  // Add other fields based on your backend response
}
interface PaginatedResponse<T> {
  data: T[];
  total: number; // Total number of items in the database
}
const projectApi = {
  getAll: async (
    page: number,
    limit: number,
    status?: string,
    id?: string
  ): Promise<PaginatedResponse<Project>> => {
    const response = await axios.get<PaginatedResponse<Project>>(
      (process.env.NEXT_PUBLIC_API_URL as string) +
        `project/get?userId=${'35dc6896-855c-4d56-9f3c-3096c6f710fb'}&page=${page}&limit=${limit}&status=${status}`
    );
    return response.data;
  },
};

export { projectApi };
