import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300"
        >
          Matej Arlović
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-2xl"
        >
          <p className="text-xl text-gray-300">
            Content coming soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
