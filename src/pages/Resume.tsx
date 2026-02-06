import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import PDFViewer from "../components/Pdfviewer";
import resume from "../data/Haard Solanki Resume final.pdf";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "HaardSolanki.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Container className="py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6 text-center py-12"
          >
            <h1 className="text-8xl font-700 tracking-tight text-foreground">
              Resume
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-400"
            >
              Professional experience and qualifications
            </motion.p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 px-8 py-3 font-600 rounded-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                <span className="text-base">Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-border hover:border-border/50 p-4 transition-all duration-300 bg-card shadow-card"
            >
              <PDFViewer file={resume} />
            </motion.div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="pt-8 pb-24"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-border hover:border-border/50 p-8 max-w-2xl mx-auto text-center bg-card shadow-card"
            >
              <p className="text-lg text-muted-foreground font-400">
                Looking for a backend engineer who ships fast and reliably?
              </p>
              <p className="text-base text-muted-foreground/80 mt-2 font-400">
                Let's build something great together.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Resume;
