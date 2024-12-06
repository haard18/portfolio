import React from "react";
import PDFViewer from "../components/Pdfviewer";
import resume from "../data/resume_template.pdf"
import BackButton from "../components/backButton";
const Resume: React.FC = () => {
  return (
    <div>
        <BackButton mode="light"/>
      <PDFViewer file={resume} />
    </div>
  );
};

export default Resume;
// please work
