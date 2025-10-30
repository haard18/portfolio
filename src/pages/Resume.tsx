import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PDFViewer from "../components/Pdfviewer";
import resume from "../data/Haard Solanki Resume final.pdf";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "HaardSolanki.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen">
      <Container className="py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Resume
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              My professional experience and qualifications
            </p>
          </div>

          <Separator />

          {/* Download Button */}
          <div className="flex justify-center">
            <Button onClick={handleDownload} size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="rounded-lg border bg-card p-4">
            <PDFViewer file={resume} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;

