import axios from "axios";

const authApi = {
  login: (email: string, password: string) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/login",
      {
        email,
        password,
      }
    );
  },
  signup: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/signup",
      {
        firstName,
        lastName,
        email,
        password,
        blocked: false,
      }
    );
  },
  verfication: (token: string) => {
    return axios.get(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/verify-session",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  googleSignin: (tokenResponse: string) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "auth/google-signin",
      {
        token: tokenResponse?.credential,
      }
    );
  },
};

export { authApi };
