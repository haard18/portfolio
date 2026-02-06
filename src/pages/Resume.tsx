import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-black">

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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-center py-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white">
              Resume
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                <span className="text-base">Download Resume</span>
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass rounded-lg border-border hover:border-neon-cyan/30 p-4 transition-all duration-300 neon-glow-hover"
            >
              <PDFViewer file={resume} />
            </motion.div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass rounded-lg border-border hover:border-neon-violet/50 p-8 max-w-2xl mx-auto text-center neon-glow-hover"
            >
              <p className="text-lg text-muted-foreground">
                Looking for a{' '}
                <span className="text-neon-cyan font-mono">full-stack engineer</span> who
                ships{' '}
                <span className="text-neon-green font-mono">fast</span> and{' '}
                <span className="text-neon-violet font-mono">reliably</span>?
              </p>
              <p className="text-base text-muted-foreground mt-2">
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
