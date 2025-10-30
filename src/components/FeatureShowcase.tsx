import { useState } from 'react';
import { Lightbulb, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FeatureShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      title: 'AI Assistant',
      description: 'Purple button (bottom-left) - Chat about projects & skills',
      color: 'from-purple-500 to-pink-500',
      demo: 'Click and ask: "Tell me about SENTIO"',
    },
    {
      title: 'Interactive Terminal',
      description: 'Green button (bottom-right) - CLI with custom commands',
      color: 'from-green-500 to-emerald-500',
      demo: 'Type: help, matrix, easter-egg',
    },
    {
      title: 'GitHub Feed',
      description: 'Live terminal showing real GitHub activity',
      color: 'from-blue-500 to-cyan-500',
      demo: 'Scroll down to see live commits & stats',
    },
    {
      title: 'System Monitor',
      description: 'DevOps dashboard with live metrics',
      color: 'from-yellow-500 to-orange-500',
      demo: 'Watch CPU graph update in real-time',
    },
    {
      title: 'Interactive Timeline',
      description: 'Scroll-based animated journey',
      color: 'from-indigo-500 to-violet-500',
      demo: 'Scroll through career milestones',
    },
  ];

  return (
    <>
      {/* Floating Info Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-6 z-40 p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Portfolio Features Guide"
      >
        <Lightbulb className="w-5 h-5 text-white" />
      </motion.button>

      {/* Feature Guide Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-card border-l border-border z-50 shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 border-b border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">Portfolio Features</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-sm opacity-90">
                  5 unique interactive features to explore
                </p>
              </div>

              {/* Features List */}
              <div className="p-6 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {feature.description}
                        </p>
                        <div className="text-xs bg-background/50 rounded px-2 py-1 font-mono">
                          💡 {feature.demo}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted/30">
                <p className="text-sm text-muted-foreground text-center">
                  Built with React, TypeScript, Framer Motion, and Tailwind CSS
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
