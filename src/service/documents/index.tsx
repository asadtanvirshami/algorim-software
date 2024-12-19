import axios from "axios";

const uploadApi = {
  document: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}documents/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};

export default uploadApi;