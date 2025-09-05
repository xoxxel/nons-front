"use client";
import Cookies from "@/utils/cookie";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState, ChangeEvent, DragEvent, useEffect } from "react";
import toast from "react-hot-toast";
import ImageBox from "./imageBox";
import ProductModel from "@/models/Product";

type UploadedFiles = {
  file: File;
  status: "uploading" | "successful" | "unsuccessful";
  progress: number;
  id?: number;
  image?: string;
};

const DragAndDropBox = ({
  onChange,
  alreadyUploadedMedia,
  setAlreadyUploadedMedia,
}: {
  onChange: (arg: number[]) => void;
  alreadyUploadedMedia: ProductModel["gallery"] | null;
  setAlreadyUploadedMedia: React.Dispatch<React.SetStateAction<ProductModel["gallery"] | null>>,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles[]>([]);

  useEffect(() => {
    if(uploadedFiles?.length > 0){
    const successfulIds = uploadedFiles
      .filter((file) => file.status === "successful" && file.id !== -1)
      .map((file) => file.id)
      .filter((id) => id !== undefined) as number[];

    onChange(successfulIds);}
  }, [uploadedFiles]);

  const handleFileFormat = (file: File) => {
    const allowedFormats = ["png", "jpg", "jpeg", "svg", "gif"];
    const fileName = file?.name?.split(".");
    const fileFormat = fileName[fileName?.length - 1]?.toLowerCase();
    if (!allowedFormats?.includes(fileFormat)) {
      toast.error("فرمت فایل مورد نظر پشتیبانی نمی شود");
      return false;
    }
    return true;
  };

  const sendFile = (file: File, index: number) => {
    const formData = new FormData();
    formData.append("file_type", "Image");
    formData.append("image", file);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/products/dashboard/create-image/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );

              // Update the progress of the specific file being uploaded
              setUploadedFiles((prevFiles) =>
                prevFiles.map((uploadedFile, i) =>
                  i === index
                    ? { ...uploadedFile, progress: percentCompleted }
                    : uploadedFile
                )
              );
            }
          },
        }
      )
      .then((res) => {
        setUploadedFiles((prevFiles) =>
          prevFiles.map((uploadedFile, i) =>
            i === index
              ? { ...uploadedFile, status: "successful", id: res?.data?.id }
              : uploadedFile
          )
        );
      })
      .catch((err) => {
        console.log("err:", err);
        // Update the status of the file to 'unsuccessful'
        setUploadedFiles((prevFiles) =>
          prevFiles.map((uploadedFile, i) =>
            i === index
              ? { ...uploadedFile, status: "unsuccessful" }
              : uploadedFile
          )
        );
      });
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);

    // Filter to get only allowed format files
    const validFiles = droppedFiles.filter((file) => handleFileFormat(file));

    // Check if there are any valid files
    if (validFiles.length > 0) {
      // Update the state with all valid files
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);

      // Create an array of new uploading files
      const newUploadingFiles: UploadedFiles[] = validFiles.map((file) => ({
        file,
        status: "uploading",
        progress: 0,
      }));

      // Update the uploaded files state
      setUploadedFiles((prev) => [...prev, ...newUploadingFiles]);

      // Upload each valid file
      validFiles.forEach((file, index) => {
        sendFile(file, uploadedFiles.length + index); // Pass the correct index
      });
    }

    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter((file) => handleFileFormat(file));

    if (validFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      const newUploadingFiles: UploadedFiles[] = validFiles.map((file) => ({
        file,
        status: "uploading",
        progress: 0,
        id: -1,
      }));

      setUploadedFiles((prev) => [...prev, ...newUploadingFiles]);

      validFiles.forEach((file, index) => {
        sendFile(file, uploadedFiles.length + index);
      });
    }
    e.target.value = "";
  };

  const handleDeleteUploadedFile = (index: number) => {
    const updatedUploadedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedUploadedFiles);
  };
  
  const handleDeleteAlreadyUploadedFile = (id: number) => {
    const updatedUploadedFiles = alreadyUploadedMedia?.filter((item) => item?.id !== id)||[];
    setAlreadyUploadedMedia(updatedUploadedFiles);
  };

  const handleAddFileToInput = (file: File, index: number) => {
    handleDeleteUploadedFile(index);
    setTimeout(() => {
      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;
      const event = new Event("change", { bubbles: true });
      fileInput.dispatchEvent(event);
    }, 10);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          border: "0.5px solid",
          borderColor: isDragging ? "button.main" : "border.main",
          borderRadius: "12px",
          px: 3,
          py: 2,
          textAlign: "center",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F2F4F7",
              border: "5px solid #F9FAFB",
            }}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.16699 13.3333L10.5003 10M10.5003 10L13.8337 13.3333M10.5003 10V17.5M17.167 13.9524C18.1849 13.1117 18.8337 11.8399 18.8337 10.4167C18.8337 7.88536 16.7816 5.83333 14.2503 5.83333C14.0682 5.83333 13.8979 5.73833 13.8054 5.58145C12.7187 3.73736 10.7124 2.5 8.41699 2.5C4.96521 2.5 2.16699 5.29822 2.16699 8.75C2.16699 10.4718 2.8632 12.0309 3.98945 13.1613"
                stroke="#475467"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <span
                style={{
                  color: "#0961DC",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                آپلود کنید
              </span>{" "}
            </label>
            و یا بکشید و رها کنید
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              color: "text.secondary",
            }}
          >
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Typography>
          <input
            type="file"
            multiple
            onChange={handleFileInputChange}
            accept=".png, .jpg, .jpeg, .svg, .gif"
            style={{
              opacity: "0",
              position: "absolute",
              top: 0,
              height: "100%",
              backgroundColor: "red",
            }}
            id="file-upload"
          />
        </Box>
      </Box>
      {files?.length > 0 && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column-reverse",
            gap: 1,
            overflowX: "hidden",
          }}
        >
          {uploadedFiles?.map((file, index) => (
            <ImageBox
              file={file?.file}
              progress={file?.progress}
              status={file?.status}
              onDelete={() => handleDeleteUploadedFile(index)}
              onTryAgain={() => handleAddFileToInput(file?.file, index)}
            />
          ))}
        </Box>
      )}
      {(alreadyUploadedMedia && alreadyUploadedMedia?.length > 0) && <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column-reverse",
            gap: 1,
            overflowX: "hidden",
          }}
        >
      {alreadyUploadedMedia?.map((media) => (
        <ImageBox
          image={media?.image}
          progress={100}
          name={media?.image?.slice(6)}
          status={"successful"}
          onDelete={() => handleDeleteAlreadyUploadedFile(media?.id)}
        />
      ))}
      </Box>}
    </Box>
  );
};

export default DragAndDropBox;
