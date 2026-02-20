import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import PDFViewer from '../components/Pdfviewer';
import resume from '../data/Haard Solanki Resume final.pdf';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/motion';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'HaardSolanki.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Resume
            </h1>
            <Button
              onClick={handleDownload}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-border p-4 bg-card"
          >
            <PDFViewer file={resume} />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Resume;
