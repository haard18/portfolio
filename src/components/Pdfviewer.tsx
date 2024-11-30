import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Set the worker for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string; // Path or URL to the PDF file
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdfDocument, setPdfDocument] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const loadPDF = async () => {
      const loadingTask = pdfjsLib.getDocument(file);
      const pdf = await loadingTask.promise;

      setPdfDocument(pdf);
      setNumPages(pdf.numPages);
    };

    loadPDF();
  }, [file]);

  useEffect(() => {
    const renderPage = async (pageNumber: number) => {
      if (!pdfDocument || !canvasRef.current) return;

      const page = await pdfDocument.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 2.5 }); // Adjust scale as needed

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      }
    };

    renderPage(currentPage);
  }, [pdfDocument, currentPage]);

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={goToPrevPage} disabled={currentPage <= 1}>
          <FontAwesomeIcon icon={faChevronLeft} />
          
        </button>
        <span style={{ margin: "0 10px" }}>
           {currentPage} of {numPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage >= numPages}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default PDFViewer;
