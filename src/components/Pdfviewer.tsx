import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdfDocument, setPdfDocument] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument(file).promise;
      setPdfDocument(pdf);
      setNumPages(pdf.numPages);
    };
    loadPDF();
  }, [file]);

  useEffect(() => {
    const renderPage = async (pageNumber: number) => {
      if (!pdfDocument || !canvasRef.current) return;
      const page = await pdfDocument.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
      }
    };
    renderPage(currentPage);
  }, [pdfDocument, currentPage]);

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage <= 1}
          className="p-1.5 rounded text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="font-mono text-xs text-muted-foreground">
          {currentPage} / {numPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))}
          disabled={currentPage >= numPages}
          className="p-1.5 rounded text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Canvas */}
      <div className="flex justify-center overflow-x-auto">
        <canvas ref={canvasRef} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default PDFViewer;
