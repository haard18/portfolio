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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Subtle Gradient Orbs */}
      <div className="fixed top-0 right-1/3 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />

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
            className="space-y-4 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block mb-2 text-muted-foreground text-xl md:text-2xl font-mono font-normal">
                $ cat resume.pdf
              </span>
              <span className="gradient-text-elegant">Resume</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground"
            >
              My professional experience and qualifications
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Separator className="opacity-20" />
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="glass text-white hover:text-black border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 group"
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
