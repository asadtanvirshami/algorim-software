import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import uploadApi from "@/service/documents";

interface DocumentProps {
  setStep: (step: number) => void;
}

const DocumentUpload: React.FC<DocumentProps> = ({ setStep }) => {
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    multiple: false,
  });

  const handleUpload = async () => {
    if (acceptedFiles.length === 0) {
      setUploadStatus("Please select a file first.");
      return;
    }
    try {
      setIsUploading(true);
      setUploadStatus(null);
      const uploadedDoc = uploadApi.document(file);
      if (uploadedDoc) {
        setUploadStatus("File uploaded successfully!");
        setStep(1); // Proceed to the next step after a successful upload
      }
    } catch (error) {
      setUploadStatus("Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upload a Document</h2>
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 border-gray-300 p-6 text-center cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">
          Drag & drop a file here, or{" "}
          <span className="text-blue-500 underline">click to select one</span>
        </p>
        <em className="text-sm text-gray-400">
          (Only *.pdf, *.doc, *.docx files are allowed)
        </em>
      </div>

      {acceptedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-medium">Selected File:</h4>
          <ul className="list-disc list-inside">
            {acceptedFiles.map((file) => (
              <li key={file.path} className="text-gray-600">
                {file.path} - {Math.round(file.size / 1024)} KB
              </li>
            ))}
          </ul>
          <button
            onClick={handleUpload}
            className={`mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
              isUploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Document"}
          </button>
        </div>
      )}

      {uploadStatus && (
        <p
          className={`mt-4 ${
            uploadStatus.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default DocumentUpload;
