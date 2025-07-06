import React from "react";
import PDFViewer from "../components/Pdfviewer";
import resume from "../data/resume.pdf"; // Adjust the path as necessary
import BackButton from "../components/backButton";
import { AwesomeButton } from "react-awesome-button";

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = resume; // Set the file URL
    link.download = "HaardSolanki.pdf"; // Set the desired download file name
    link.click(); // Programmatically trigger the download
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      <BackButton mode="light" />
      <PDFViewer file={resume} />
      {/* Download Button */}
      {/* <a
        href={resume}
        download="Haard_resume.pdf"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      >
        Download Resume
      </a> */}
      <AwesomeButton onPress={handleDownload } type="secondary">Download Resume</AwesomeButton>

    </div>
  );
};

export default Resume;
