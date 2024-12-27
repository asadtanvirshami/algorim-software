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
}
interface PaginatedResponse<T> {
  data: T[];
  total: number;
}
const userApi = {
  getUser: async (
    id: string,
    token: string
  ): Promise<PaginatedResponse<User>> => {
    const response = await axios.get<PaginatedResponse<User>>(
      `${process.env.NEXT_PUBLIC_API_URL as string}auth/get-user/${id}`, // API URL
      {
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Return the response data
  },
  update: async (data: User): Promise<User> => {
    const response = await axios.put<User>(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/update/data?.id",
      data
    );
    return response.data;
  },

  resetPassword: async (data: any): Promise<any> => {
    console.log(data);

    const response = await axios.post<User>(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/reset-password",
      {
        old_password: data.old_password,
        new_password: data.new_password,
        id: data.id,
      }
    );
    return response.data;
  },
};

export { userApi };
